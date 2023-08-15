import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar/page'
import Footer from './components/footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Starbucks',
  description: 'A flavour of teste Icecream',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  )
}
