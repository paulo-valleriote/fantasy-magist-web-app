import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { UseFormRegister, useForm } from 'react-hook-form'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

export interface FormProps {
	register: UseFormRegister<SignInputs>
	submit: any
	router: AppRouterInstance
}

export interface SignInputs {
	login: string
	password: string
	username: string
}

export default function SignForm() {
	const pathname = usePathname()
	const router = useRouter()

	const { register, handleSubmit } = useForm<SignInputs>()

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
			{page.login ? (
				<LoginForm register={register} submit={handleSubmit} router={router} />
			) : (
				<RegisterForm
					register={register}
					submit={handleSubmit}
					router={router}
				/>
			)}
		</div>
	)
}
