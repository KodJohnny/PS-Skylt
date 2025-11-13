import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Brandon Grotesque is a commercial font, so we'll use a fallback system font
// You can purchase and add the actual Brandon Grotesque font files if needed
const brandon = localFont({
  src: [],
  variable: '--font-brandon',
  fallback: ['system-ui', 'sans-serif'],
})

// Avenir Next is also commercial, so we'll use a fallback
const avenir = localFont({
  src: [],
  variable: '--font-avenir',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'PS Skylt & Inredning AB - Uteserveringar, Skyltprojekt & Solskydd',
  description: 'Helhetsleverantör av uteserveringar, skyltprojekt och solskydd för företag, hotell och restauranger i Norden.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={`${brandon.variable} ${avenir.variable}`}>
      <body>{children}</body>
    </html>
  )
}
