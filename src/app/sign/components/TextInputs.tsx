'use client'
import { RegisterOptions, useForm } from 'react-hook-form'
import { SignInputs } from './SignForm'

interface TextInputProps {
	placeholder: string
	registerField: keyof SignInputs
	registerConfigurations: RegisterOptions
}
export default function TextInput({
	placeholder,
	registerField,
	registerConfigurations,
}: TextInputProps) {
	const { register } = useForm()

	return (
		<input
			placeholder={placeholder}
			className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
			{...register(registerField, registerConfigurations)}
		/>
	)
}
