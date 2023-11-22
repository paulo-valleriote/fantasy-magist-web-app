import Link from 'next/link'
import FormTemplate from './FormTemplate'
import TextInput from './TextInputs'
import { SignInputs } from './SignForm'
import { cookies } from 'next/headers'

export default async function LoginForm() {
	const loginRequest = async ({ login, password }: SignInputs) => {
		'use server'
		const response = await fetch(process.env.PUBLIC_URL + '/api/auth/login', {
			method: 'post',
			body: JSON.stringify({ login, password }),
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const convertedResponse = await response.json()

		cookies().set({
			name: 'token',
			value: convertedResponse.headers.jwtToken,
			expires: new Date(convertedResponse.headers.jwtExpiration),
			httpOnly: true,
		})
	}

	return (
		<FormTemplate request={loginRequest}>
			<TextInput
				placeholder={'E-MAIL'}
				registerField={'login'}
				registerConfigurations={{ required: true }}
			/>
			<TextInput
				placeholder={'PASSWORD'}
				registerField={'password'}
				registerConfigurations={{ required: true }}
			/>
			<button type='submit' className='p-4 bg-red-600 w-2/3 rounded-2xl'>
				LOGIN
			</button>
			<Link href='/sign/register'>
				Need to create an account? <span className='underline'>Click here</span>
			</Link>
		</FormTemplate>
	)
}
