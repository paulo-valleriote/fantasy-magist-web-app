'use client'
import Image from 'next/image'
import Link from 'next/link'
import appLogo from './../../../public/logo-fantasy-magist.svg'
import { useContext } from 'react'
import { UserDetailsContext } from '@/contexts/UserContext'

export default function Header() {
	const { userDetails } = useContext(UserDetailsContext)

	const logged = localStorage.getItem('logged')

	return (
		<header className='fixed z-50 w-screen px-28'>
			<div className='flex text-white justify-between items-center'>
				<Link href={'/'}>
					<Image src={appLogo} alt='Fantasy Magist' width={245} height={50} />
				</Link>
				<div className='flex gap-8 items-center'>
					<Link href='/characters'>Characters</Link>
					{!userDetails.isLogged && !logged ? (
						<Link
							href={'/sign/register'}
							className='px-4 py-2 border-white border-[1px] rounded-md'
						>
							Sign Up
						</Link>
					) : (
						<Link
							href={'/profile'}
							className='px-4 py-2 border-white border-[1px] rounded-md'
						>
							Profile
						</Link>
					)}
				</div>
			</div>
		</header>
	)
}
