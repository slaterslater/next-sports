import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NewsNav from './NewsNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sports news',
  description: 'sports news',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NewsNav />
        {children}
      </body>
    </html>
  )
}
