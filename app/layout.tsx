import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paul-Alexandru Iordache | Freelance Web Developer',
  description: '16-year-old Romanian freelance web developer specializing in Next.js, React, and modern web solutions. Available for projects €300-€500.',
  keywords: ['freelance developer', 'romanian developer', 'next.js', 'react', 'web development', 'teen developer'],
  authors: [{ name: 'Iordache Paul-Alexandru' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 