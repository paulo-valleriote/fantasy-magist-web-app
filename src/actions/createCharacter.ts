'use server'
import { cookies } from 'next/headers'
import convertFormData from './convertFormData'

export default async function createCharacter(formData: FormData) {
	'use server'
	const sheetCreationProps = convertFormData(formData)

	const response = await fetch(process.env.PUBLIC_URL + '/api/sheets/', {
		method: 'POST',
		body: JSON.stringify(sheetCreationProps),
		cache: 'no-cache',
		headers: {
			Cookie: 'token=' + cookies().get('token')?.value,
		},
	})

	if (response.ok) {
		return await response.json()
	}

	throw new Error('Error while creating a new character sheet')
}
