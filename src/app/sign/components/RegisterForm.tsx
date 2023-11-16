import Link from 'next/link'
import FormTemplate from './FormTemplate'
import { SignInputs } from './SignForm'
import TextInput from './TextInputs'

export default async function RegisterForm() {
	const registerRequest = async ({ login, password, username }: SignInputs) => {
		'use server'
		await fetch(process.env.PUBLIC_URL + '/api/auth/register', {
			method: 'post',
			body: JSON.stringify({ login, password, username }),
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	return (
		<FormTemplate request={registerRequest}>
			<TextInput
				placeholder={'USERNAME'}
				registerField={'username'}
				registerConfigurations={{ required: true }}
			/>
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
			<button className='p-4 bg-red-600 w-2/3 rounded-2xl'>REGISTER</button>
			<Link href='/sign/login'>
				Already have an account? <span className='underline'>Click here</span>
			</Link>
		</FormTemplate>
	)
}
