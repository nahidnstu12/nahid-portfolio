import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://nahid-portfolio.vercel.app";

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/", "/_next/", "/admin/"],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
