import Link from 'next/link'
import { FormProps, SignInputs } from './SignForm'
import { UserDetailsContext } from '@/contexts/UserContext'
import { useContext } from 'react'

export default function LoginForm({ register, submit, router }: FormProps) {
	const { switchIsLogged } = useContext(UserDetailsContext)

	const loginRequest = ({ login, password }: SignInputs) => {
		fetch('/api/auth/login', {
			method: 'post',
			body: JSON.stringify({ login, password }),
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			switchIsLogged(true)
			router.push('/')
		})
	}

	return (
		<>
			<form
				className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4 text-white'
				onSubmit={submit(loginRequest)}
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
