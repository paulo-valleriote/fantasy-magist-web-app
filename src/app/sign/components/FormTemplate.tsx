import React from 'react'
import { SignInputs } from './SignForm'

interface FormTemplateProps {
	children: React.ReactNode | React.ReactNode[]
	request: (props: SignInputs) => Promise<void>
}

export default async function FormTemplate({
	children,
	request,
}: FormTemplateProps) {
	const convertingFormData = async (formData: FormData) => {
		'use server'
		const eventData = {
			login: formData.get('login')?.toString() || '',
			username: formData.get('username')?.toString() || '',
			password: formData.get('password')?.toString() || '',
		}

		await request({
			login: eventData.login,
			username: eventData.username,
			password: eventData.password,
		})
	}

	return (
		<form
			className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4 text-white'
			action={convertingFormData}
		>
			{children}
		</form>
	)
}
