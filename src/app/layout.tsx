import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
	title: "Islam Mokrane",
	description: "Islam Mokrane's personal website | Portfolio ",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable}`}>
				<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
			</body>
		</html>
	)
}
