import nodemailer from "nodemailer";

// Get SMTP configuration from environment variables
// Remove quotes from password if present
const password = (process.env.MAIL_PASSWORD || "").replace(/^["']|["']$/g, "");

const port = parseInt(process.env.MAIL_PORT || "587");
const isSecurePort = port === 465;

const smtpConfig = {
	host: process.env.MAIL_HOST || "smtp.hostinger.com",
	port: port,
	secure: isSecurePort, // true for 465 (SSL), false for 587 (STARTTLS)
	requireTLS: !isSecurePort, // Require TLS for port 587
	auth: {
		user: process.env.MAIL_USERNAME || "no-reply@radiustheme.net",
		pass: password,
	},
	// Increase timeouts for slower connections
	connectionTimeout: 20000, // 20 seconds
	greetingTimeout: 20000,
	socketTimeout: 20000,
	// Retry configuration
	maxConnections: 5,
	maxMessages: 100,
	// Debug mode (set to false in production)
	debug: process.env.NODE_ENV === "development",
	logger: process.env.NODE_ENV === "development",
	// TLS options
	tls: {
		rejectUnauthorized: false, // Allow self-signed certificates (use true in production if you have proper certs)
		ciphers: 'SSLv3',
	},
};

// Log configuration (without password) for debugging
if (process.env.NODE_ENV === "development") {
	console.log("SMTP Config:", {
		host: smtpConfig.host,
		port: smtpConfig.port,
		secure: smtpConfig.secure,
		user: smtpConfig.auth.user,
		hasPassword: !!smtpConfig.auth.pass,
	});
}

// Create reusable transporter using SMTP
export const transporter = nodemailer.createTransport(smtpConfig);

// Verify connection configuration
export async function verifyConnection() {
	try {
		await transporter.verify();
		console.log("SMTP server is ready to send emails");
		return true;
	} catch (error) {
		console.error("SMTP connection error:", error);
		return false;
	}
}
