import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medium to Kindle',
  description: 'Convert Medium articles to Kindle format',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
