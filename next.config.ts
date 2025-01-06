import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	reactStrictMode: true,
	basePath: "/about-me",
	assetPrefix: "/about-me/",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
