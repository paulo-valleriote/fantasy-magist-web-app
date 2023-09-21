import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import heroBackground from './../../public/bg-fantasy-magist.png'

import './globals.css'

import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fantasy Magist',
  description: 'Online Dungeons and Dragons Sheet Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en-us'>
      <body className={`${inter.className} p-6 flex justify-center w-screen h-screen overflow-hidden`}>
      <Header/>
      {children}
      <div className='w-screen h-screen bg-black absolute top-0 opacity-10 -z-30'/>
      <Image
        src={heroBackground}
        placeholder="blur"
        alt="bg"
        fill
        sizes="100vw"
        objectFit="cover"
        style={{zIndex: -50}}
        quality={100}
      />
      </body>
    </html>
  )
}
