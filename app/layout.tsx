import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
