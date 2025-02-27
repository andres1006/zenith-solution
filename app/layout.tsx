import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZENITH SOLUTION - Elevando tu negocio al máximo potencial digital",
  description:
    "Desarrollo de software a medida, diseño de marketing estratégico y soluciones tecnológicas innovadoras para llevar tu negocio a la cima del éxito digital.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'