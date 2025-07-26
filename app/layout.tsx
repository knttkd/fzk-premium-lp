import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI写メ日記 - 毎日がもっと特別になる',
  description: '今日の出来事を写真と一緒に残すだけ。AIがあなたにピッタリの"エモい"日記を提案してくれるよ。',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="grid-pattern">{children}</body>
    </html>
  )
}