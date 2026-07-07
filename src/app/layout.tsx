import type { Metadata, Viewport } from 'next'
import { bodyFont } from './fonts'
import MetaPixel from './components/MetaPixel'
import { rootMetadata } from './seo'
import { SITE_THEME_COLOR } from './site'
import './globals.css'
import './site.css'

export const metadata: Metadata = rootMetadata

export const viewport: Viewport = {
  themeColor: SITE_THEME_COLOR,
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bodyFont.variable}>
      <body className={bodyFont.className}>
        <MetaPixel />
        {children}
      </body>
    </html>
  )
}
