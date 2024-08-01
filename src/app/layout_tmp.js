import { Be_Vietnam_Pro, Noto_Sans } from 'next/font/google'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['400', '700'] })
const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Freelancer Hours Tracking',
  description: 'Track your hours and get paid faster',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${beVietnamPro.className} ${notoSans.className}`}>{children}</body>
    </html>
  )
}