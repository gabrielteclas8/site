import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gabriel Rodrigues - Músico, Produtor e Compositor",
  description:
    "Site oficial do músico, produtor musical e compositor Gabriel Rodrigues. Conheça sua história, discografia e entre em contato.",
  keywords: "Gabriel Rodrigues, música gospel, produtor musical, compositor, Bless Records",
  authors: [{ name: "Gabriel Rodrigues" }],
  creator: "Gabriel Rodrigues",
  publisher: "Gabriel Rodrigues",
  openGraph: {
    title: "Gabriel Rodrigues - Músico, Produtor e Compositor",
    description: "Site oficial do músico, produtor musical e compositor Gabriel Rodrigues.",
    url: "https://gabrielrodriguesoficial.com.br",
    siteName: "Gabriel Rodrigues Oficial",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Rodrigues - Músico, Produtor e Compositor",
    description: "Site oficial do músico, produtor musical e compositor Gabriel Rodrigues.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#d97706" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
