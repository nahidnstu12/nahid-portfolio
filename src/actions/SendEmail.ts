"use server";

import { personalInfo } from "@/data/personalData";
import { transporter } from "@/lib/nodemailer";

interface EmailResponse {
	success: boolean;
	error?: string;
	message?: string;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize HTML content to prevent XSS
function sanitizeHtml(text: string): string {
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\n/g, "<br>");
}

export async function sendEmail(_prevState: EmailResponse | null, formData: FormData): Promise<EmailResponse> {
	try {
		// Extract and validate form data
		const name = formData.get("name")?.toString()?.trim();
		const email = formData.get("email")?.toString()?.trim().toLowerCase();
		const message = formData.get("message")?.toString()?.trim();

		// Validation
		if (!name || name.length < 2) {
			return {
				success: false,
				error: "Name must be at least 2 characters long.",
			};
		}

		if (!email || !EMAIL_REGEX.test(email)) {
			return {
				success: false,
				error: "Please enter a valid email address.",
			};
		}

		if (!message || message.length < 10) {
			return {
				success: false,
				error: "Message must be at least 10 characters long.",
			};
		}

		// Additional validation for spam prevention
		if (name.length > 100 || email.length > 100 || message.length > 2000) {
			return {
				success: false,
				error: "Input too long. Please keep your message concise.",
			};
		}

		// Check for suspicious patterns (basic spam detection)
		const suspiciousPatterns = [
			/https?:\/\//gi, // URLs
			/\b(buy|sale|discount|offer|deal|free|win|winner|prize|lottery|casino|viagra|cialis)\b/gi,
		];

		const combinedText = `${name} ${email} ${message}`;
		const hasSuspiciousContent = suspiciousPatterns.some((pattern) => pattern.test(combinedText));

		if (hasSuspiciousContent) {
			return {
				success: false,
				error: "Message appears to be spam. Please contact me directly if this is a legitimate inquiry.",
			};
		}

		// Verify SMTP connection first
		try {
			await transporter.verify();
		} catch (verifyError) {
			console.error("SMTP verification failed:", verifyError);
			return {
				success: false,
				error: "Email service is currently unavailable. Please contact me directly at " + personalInfo.contact.email,
			};
		}

		// Send email using SMTP
		const recipientEmail = personalInfo.contact.email;
		const mailOptions = {
			from: `${process.env.MAIL_FROM_NAME || "Portfolio Contact"} <${process.env.MAIL_FROM_ADDRESS || process.env.MAIL_USERNAME}>`,
			to: recipientEmail,
			replyTo: email,
			subject: `New Portfolio Contact from ${name}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
					<div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
						<h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
							New Contact Form Submission
						</h2>

						<div style="margin-bottom: 20px;">
							<h3 style="color: #555; margin-bottom: 5px;">From:</h3>
							<p style="margin: 0; padding: 10px; background-color: #f0f0f0; border-radius: 5px;">
								<strong>${sanitizeHtml(name)}</strong><br>
								<a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
							</p>
						</div>

						<div style="margin-bottom: 20px;">
							<h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
							<div style="padding: 15px; background-color: #f8f8f8; border-left: 4px solid #10b981; border-radius: 5px;">
								${sanitizeHtml(message)}
							</div>
						</div>

						<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
							<p>This message was sent from your portfolio contact form.</p>
							<p>Sent at: ${new Date().toLocaleString()}</p>
						</div>
					</div>
				</div>
			`,
		};

		const result = await transporter.sendMail(mailOptions);

		console.log("Email send result:", {
			messageId: result.messageId,
			accepted: result.accepted,
			rejected: result.rejected,
			response: result.response,
			pending: result.pending,
		});

		// Check if email was rejected or not accepted
		if (result.rejected && result.rejected.length > 0) {
			console.error("SMTP send rejected:", {
				rejected: result.rejected,
				response: result.response,
			});
			return {
				success: false,
				error: `Email was rejected by server: ${result.rejected.join(", ")}. Please contact me directly at ${recipientEmail}`,
			};
		}

		// Check if email was accepted
		if (!result.accepted || result.accepted.length === 0) {
			console.error("SMTP send failed - no accepted recipients:", {
				accepted: result.accepted,
				rejected: result.rejected,
				response: result.response,
			});
			return {
				success: false,
				error: "Email was not accepted by server. Please try again or contact me directly at " + recipientEmail,
			};
		}

		// Check if messageId exists (indicates successful queuing)
		if (!result.messageId) {
			console.error("SMTP send failed - no messageId:", {
				accepted: result.accepted,
				rejected: result.rejected,
				response: result.response,
			});
			return {
				success: false,
				error: "Failed to queue email. Please try again or contact me directly at " + recipientEmail,
			};
		}

		console.log("Email successfully sent to:", result.accepted);

		return {
			success: true,
			message: "Thank you for your message! I'll get back to you within 24 hours.",
		};
	} catch (error) {
		console.error("Email sending error:", error);
		
		// Log full error details for debugging
		if (error instanceof Error) {
			console.error("Error name:", error.name);
			console.error("Error message:", error.message);
			console.error("Error stack:", error.stack);
			
			// Handle specific SMTP errors
			if (error.message.includes("authentication") || error.message.includes("credentials") || error.message.includes("Invalid login")) {
				return {
					success: false,
					error: "Email service authentication failed. Please contact me directly at " + personalInfo.contact.email,
				};
			}
			if (error.message.includes("connection") || error.message.includes("timeout") || error.message.includes("ECONNREFUSED")) {
				return {
					success: false,
					error: "Cannot connect to email server. Please try again later or contact me directly.",
				};
			}
			if (error.message.includes("ENOTFOUND") || error.message.includes("getaddrinfo")) {
				return {
					success: false,
					error: "Email server not found. Please contact me directly at " + personalInfo.contact.email,
				};
			}
		}

		return {
			success: false,
			error: `An unexpected error occurred: ${error instanceof Error ? error.message : "Unknown error"}. Please contact me directly at ${personalInfo.contact.email}`,
		};
	}
}
