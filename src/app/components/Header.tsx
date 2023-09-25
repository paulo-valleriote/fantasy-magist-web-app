'use client'
import Image from 'next/image'
import Link from 'next/link'
import appLogo from './../../../public/logo-fantasy-magist.svg'
import { usePathname } from 'next/navigation'

export default function Header() {
	const loginOrRegisterLink = usePathname() !== '/sign/login'

	return (
		<header className='fixed z-50 w-screen px-28'>
			<div className='flex text-white justify-between items-center'>
				<Link href={'/'}>
					<Image src={appLogo} alt='Fantasy Magist' width={245} height={50} />
				</Link>
				<div className='flex gap-8 items-center'>
					<Link href='/characters'>Characters</Link>
					<Link
						href={loginOrRegisterLink ? '/sign/login' : '/sign/register'}
						className='px-4 py-2 border-white border-[1px] rounded-md'
					>
						{loginOrRegisterLink ? 'Sign In' : 'Sign Up'}
					</Link>
				</div>
			</div>
		</header>
	)
}
