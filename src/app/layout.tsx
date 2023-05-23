import '../styles/globals.sass'
import { Inter } from 'next/font/google'
import Header from '@/components/base/Header'
import Footer from '@/components/base/Footer'
import MainBanner from '@/components/base/MainBanner'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <MainBanner />
        <Footer />
      </body>
    </html>
  )
}
