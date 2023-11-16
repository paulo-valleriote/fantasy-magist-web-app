import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { setCookie } from 'cookies-next'
import { motion } from 'framer-motion'
import {
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
	useForm,
} from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
export interface FormProps {
	register: UseFormRegister<SignInputs>
	submit: UseFormHandleSubmit<SignInputs, undefined>
	router: AppRouterInstance
}

interface SignInputs {
	login: string
	password: string
	username: string
}

export default function SignForm() {
	const router = useRouter()
	const pathname = usePathname()

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

const RegisterForm = ({ register, submit, router }: FormProps) => {
	const request: SubmitHandler<SignInputs> = async ({
		login,
		password,
		username,
	}) => {
		const response = await fetch(`${process.env.DB_HOST}/auth/register`, {
			method: 'POST',
			body: JSON.stringify({
				login,
				password,
				username: username,
			}),
			headers: { 'Content-Type': 'application/json' },
		})

		if (response.ok) {
			router.push('/')
		}
	}

	return (
		<>
			<form
				className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4  text-white'
				onSubmit={submit(request)}
			>
				<input
					placeholder='USERNAME'
					className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
					{...register('username', { required: true })}
				/>
				<input
					placeholder='E-MAIL'
					className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
					{...register('login', { required: true })}
				/>
				<input
					placeholder='PASSWORD'
					className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
					type='password'
					{...register('password', { required: true })}
				/>
				<button className='p-4 bg-red-600 w-2/3 rounded-2xl'>REGISTER</button>
				<Link href='/sign/login'>
					Already have an account? <span className='underline'>Click here</span>
				</Link>
			</form>
		</>
	)
}

const LoginForm = ({ register, submit, router }: FormProps) => {
	const request: SubmitHandler<SignInputs> = async ({ login, password }) => {
		console.log('opa')
		const response = await fetch(
			`${process.env.DB_HOST}/auth/login` as string,
			{
				method: 'POST',
				body: JSON.stringify({
					login,
					password,
				}),
				headers: { 'Content-Type': 'application/json' },
			}
		)

		if (response.ok) {
			const headers = response.headers
			const token = headers.get('Token') as string
			const expiresAt = new Date(headers.get('ExpiresAt') as string)

			setCookie('token', token, {
				httpOnly: true,
				expires: expiresAt,
			})
		}

		router.push('/characters')
	}

	return (
		<>
			<form
				className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4 text-white'
				onSubmit={submit(request)}
			>
				<input
					placeholder='E-MAIL'
					className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
					{...register('login', { required: true })}
				/>
				<input
					placeholder='PASSWORD'
					className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
					type='password'
					{...register('password', { required: true })}
				/>
				<button type='submit' className='p-4 bg-red-600 w-2/3 rounded-2xl'>
					LOGIN
				</button>
				<Link href='/sign/register'>
					Need to create an account?{' '}
					<span className='underline'>Click here</span>
				</Link>
			</form>
		</>
	)
}
