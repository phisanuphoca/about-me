import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Phisanu Phoca",
	description: "Resume",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta
					name="viewport"
					content="width=1300, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<title>About Me - Senior Backend Developer</title>
				<meta
					name="description"
					content="Experienced Senior Backend Developer specializing in Go, ReactJS, Microservices, Web3, and Cloud Solutions."
				/>
				<meta
					name="keywords"
					content="Senior Backend Developer, Go Developer, ReactJS Developer, Microservices Architecture, NFT Integration, Cloud-Based Solutions, Phisanu Phoca"
				/>
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
			<GoogleAnalytics gaId="G-588P1PHT2E" />
		</html>
	);
}
