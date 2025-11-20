import 'styles/main.scss';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'fcjfior',
  description: 'fcjfior - artist homepage',
  keywords: ['fcjfior', 'digital art', 'illustration', 'portfolio', 'artist'],
  authors: [{ name: 'fcjfior', url: 'https://www.fcjfior.xyz' }],
  creator: 'Your Name',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="3_OPVZpkPOdJNvs4b4WhVgtXQPHg2YdpffnaEkwW1qs" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}