import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer' // Import the Footer component

import { Roboto } from 'next/font/google'
import { ModalProvider } from '@/logic/modalContext'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'High Maintenance',
  description: 'Norge remont',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <ModalProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </ModalProvider>
      </body>
    </html>
  )
}
