import './globals.css'
import { Inter } from 'next/font/google'
import Header from './componets/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fish',
  description: 'Catch',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className="">
        <Header />
        <main className=''>{children}</main>
      </body>
    </html>
  )
}
