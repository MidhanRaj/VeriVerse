import type React from "react"
import type { Metadata } from "next"
import { Exo_2, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "VeriVerse | The Global Trust Layer for AI Agents",
  description:
    "Verifiable AI decisions with blockchain-backed proof. The future of trustworthy artificial intelligence.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${exo2.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>
        {children}
        <Toaster position="top-right" theme="dark" richColors />
        <Analytics />
      </body>
    </html>
  )
}
