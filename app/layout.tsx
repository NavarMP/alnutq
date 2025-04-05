import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Anek_Malayalam } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import CustomCursor from "@/components/custom-cursor"
import PWARegister from "@/components/pwa-register"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const anekMalayalam = Anek_Malayalam({
  subsets: ["latin", "malayalam"],
  variable: "--font-anek-malayalam",
})

// Monadi font will be loaded via CSS

export const metadata: Metadata = {
  title: "Al Nutq - Islamic Community",
  description: "Al Nutq is an Islamic community focused on traditional Islamic teachings.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Al Nutq",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export const viewport = {
  themeColor: "#415a80",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-icon-180x180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preload" href="/fonts/Monadi Reguler.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", montserrat.variable, anekMalayalam.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <CustomCursor />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <PWARegister />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'