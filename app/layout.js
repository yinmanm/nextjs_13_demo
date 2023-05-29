'use client'
import './globals.css'
import { Inter } from 'next/font/google';
import Layout from './componets/Layout';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Fish',
//   description: 'Catch'
// }

export default function RootLayout({ children, session }) {

  return (
    <html lang='en'>
      <body className="">
        <Layout children={children} />
        {/* <SessionProvider session={session}>
          <Layout children={children} />
        </SessionProvider> */}
      </body>
    </html>
  )
}