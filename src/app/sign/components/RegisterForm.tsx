import Link from 'next/link'
import { FormProps, SignInputs } from './SignForm'

export default function RegisterForm({ register, submit, router }: FormProps) {
	const registerRequest = ({ login, password, username }: SignInputs) => {
		fetch('/api/auth/register', {
			method: 'post',
			body: JSON.stringify({ login, password, username }),
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => res.ok && router.push('/sign/login'))
	}

	return (
		<form
			className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4  text-white'
			onSubmit={submit(registerRequest)}
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
	)
}
