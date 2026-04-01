import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tam Nguyen — Sell AI. Make Money.',
  description: 'AI sales coach and operator. Helping builders turn AI skills into real revenue.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
