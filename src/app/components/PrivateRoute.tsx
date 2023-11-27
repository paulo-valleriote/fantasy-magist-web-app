'use server'
import { cookies } from 'next/headers'
import React from 'react'
import RedirectButton from './RedirectButton'

interface IPrivateRoute {
	children: React.ReactNode | React.ReactNode[]
}

export default async function PrivateRoute({ children }: IPrivateRoute) {
	const token = cookies().get('token')?.value

	if (!token) {
		return (
			<div className='relative flex flex-col gap-4 w-screen h-screen justify-center items-center text-2xl font-bold text-white '>
				<div className='absolute bg-black w-[36rem] h-[10rem] -z-20 blur-3xl opacity-20' />
				<div className='border-b-2 border-b-gray-200 py-1 text-center'>
					Not Authenticated
				</div>
				<div className='flex flex-col gap-2 text-center justify-center items-center font-normal text-lg'>
					Please, login into an account to access this section of our site.
					<RedirectButton
						to={'/sign/login'}
						content={'Sign In'}
						withBorder={true}
					/>
				</div>
			</div>
		)
	}

	return <>{children}</>
}
