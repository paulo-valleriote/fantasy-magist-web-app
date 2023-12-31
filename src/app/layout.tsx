import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import heroBackground from './../../public/bg-fantasy-magist.png'

import './globals.css'

import Image from 'next/image'
import Header from './components/Header'
import { CharacterContextProvider } from '@/contexts/CharacterContext'

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
			<body
				className={`${inter.className} p-6 flex justify-center w-screen h-screen overflow-hidden`}
			>
				<Header />
				<CharacterContextProvider>{children}</CharacterContextProvider>
				<div className='w-screen h-screen bg-black absolute top-0 opacity-10 -z-30' />
				<Image
					src={heroBackground}
					placeholder='blur'
					alt='bg'
					fill
					style={{ zIndex: -50, objectFit: 'cover' }}
					quality={100}
				/>
			</body>
		</html>
	)
}
