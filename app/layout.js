// 'use client'
import './globals.css'
import { Inter } from 'next/font/google';
import Layout from './componets/Layout';
import { ClerkProvider } from '@clerk/nextjs/app-beta'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Fish',
//   description: 'Catch'
// }

export default function RootLayout({ children }) {

  return (
    <ClerkProvider>
      <html lang="en">
        <Layout children={children} />
      </html>
    </ClerkProvider>
  )
}