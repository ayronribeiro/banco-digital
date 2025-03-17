import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Banco Digital',
  description: 'Seu banco digital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
