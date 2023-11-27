'use client'
import React from 'react'
import { RegisterOptions, useForm } from 'react-hook-form'

interface TextInputProps {
	children: React.ReactNode | React.ReactNode[]
	registerField: string
	registerConfigurations: RegisterOptions
}
export default function TextInput({
	children,
	registerField,
	registerConfigurations,
}: TextInputProps) {
	const { register } = useForm()

	return (
		<select
			className='py-3 px-4 h-fit rounded-md shadow-sm'
			{...register(registerField, registerConfigurations)}
		>
			{children}
		</select>
	)
}
