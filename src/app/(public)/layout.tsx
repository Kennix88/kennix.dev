import Metricate from '@app/app/_components/Metricate'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'KennixDev - Open-source Software Developer',
  description:
    'I develop various software. Telegram bots, Telegram mini-apps, VPN services, scraping projects, web apps and other projects.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="coinzilla" content="7a1518b6f3004596205a8fd524d63b20" />
        <meta
          name="adbytes-site-verification"
          content="1dc235b1a0a1a9c003aa433f802322bcf12148bd9ed631cfb564af7c175e91a4"
        />
        <Metricate />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
