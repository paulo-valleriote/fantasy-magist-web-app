'use client'
import Link from 'next/link'
import React, { useCallback, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

interface SignFormProps {
	children: React.ReactNode | React.ReactNode[]
}
export interface SignInputs {
	login: string
	password: string
	username: string
}

export default function SignForm({ children }: SignFormProps) {
	const pathname = usePathname()
	const [page, setPage] = useState({
		login: true,
		register: false,
	})

	const changeCurrentPage = useCallback(() => {
		switch (pathname) {
			case '/sign/login':
				setPage({ login: true, register: false })
				break
			case '/sign/register':
				setPage({ login: false, register: true })
				break
		}
	}, [pathname])

	useMemo(() => changeCurrentPage(), [changeCurrentPage])

	return (
		<div className='flex flex-col items-center w-2/3 bg-zinc-700 h-full relative top-60'>
			<div className='flex flex-col items-center w-full p-6 text-white '>
				<div className='relative flex text-xl justify-between w-2/3'>
					<Link href={'/sign/login'}>
						Login
						{page.login && (
							<motion.div
								layoutId='underline'
								animate={{ borderBottom: '2px solid white' }}
							/>
						)}
					</Link>
					<Link href={'/sign/register'}>
						Register
						{page.register && (
							<motion.div
								layoutId='underline'
								animate={{ borderBottom: '2px solid white' }}
							/>
						)}
					</Link>
				</div>
			</div>
			{children}
		</div>
	)
}
