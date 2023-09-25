import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function SignForm() {
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
				<div className='flex text-xl justify-between w-2/3'>
					<div
						className={`w-1/3 text-center ${
							page.login && 'border-b-2 border-gray-200'
						}`}
					>
						<Link href={'/sign/login'}>Login</Link>
					</div>
					<div
						className={`w-1/3 text-center ${
							page.register && 'border-b-2 border-gray-200'
						}`}
					>
						<Link href={'/sign/register'}>Register</Link>
					</div>
				</div>
			</div>
			{page.login ? <LoginForm /> : <RegisterForm />}
		</div>
	)
}

const LoginForm = () => (
	<>
		<form className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4 text-white'>
			<input
				placeholder='E-MAIL'
				className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
			/>
			<input
				placeholder='PASSWORD'
				className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
			/>
			<button className='p-4 bg-red-600 w-2/3 rounded-2xl'>LOGIN</button>
			<Link href='/sign/register'>
				Need to create an account? <span className='underline'>Click here</span>
			</Link>
		</form>
	</>
)

const RegisterForm = () => (
	<>
		<form className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4  text-white'>
			<input
				placeholder='USERNAME'
				className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
			/>
			<input
				placeholder='E-MAIL'
				className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
			/>
			<input
				placeholder='PASSWORD'
				className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
			/>
			<button className='p-4 bg-red-600 w-2/3 rounded-2xl'>REGISTER</button>
			<Link href='/sign/login'>
				Already have an account? <span className='underline'>Click here</span>
			</Link>
		</form>
	</>
)
