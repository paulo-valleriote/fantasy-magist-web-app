import Link from 'next/link'
import { FormEvent, useCallback, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import {motion} from 'framer-motion'
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'
import LoginForm from './LoginForm'

export interface FormProps {
	register: UseFormRegister<SignInputs>
	submit: any
}

interface SignInputs {
	email: string
	password: string
	username: string
}

export default function SignForm() {
	const pathname = usePathname()
	
  const queryClient = new QueryClient()

	const {register, handleSubmit} = useForm<SignInputs>()

	const onSubmit: SubmitHandler<SignInputs> = ({email, password, username}) =>{
		useQuery(
		{
			queryKey: ['login'],
			queryFn: () => fetch(process.env.DB_HOST as string, {
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
					username: username ? username : ''
				})
			})
		}
	)}

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
		<QueryClientProvider client={queryClient}>
		<div className='flex flex-col items-center w-2/3 bg-zinc-700 h-full relative top-60'>
				<div className='flex flex-col items-center w-full p-6 text-white '>
					<div className='relative flex text-xl justify-between w-2/3'>
							<Link href={'/sign/login'}>
									Login
									{page.login && <motion.div layoutId='underline' animate={{borderBottom: '2px solid white'}}/>}
							</Link>
							<Link href={'/sign/register'}>
								Register
								{page.register && <motion.div layoutId='underline' animate={{borderBottom: '2px solid white'}}/>}
							</Link>
					</div>
				</div>
				{page.login ? <LoginForm register={register} submit={handleSubmit(onSubmit)} /> : <RegisterForm register={register} submit={handleSubmit(onSubmit)}/>}
		</div>
		</QueryClientProvider>
	)
}



const RegisterForm = ({register, submit}: FormProps) => (
	<>
		<form className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4  text-white' onSubmit={() => submit}>
			<input
				placeholder='USERNAME'
				className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
				{
					...register('username', {required: true})
				}
			/>
			<input
				placeholder='E-MAIL'
				className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
				{
					...register('email', {required: true})
				}
			/>
			<input
				placeholder='PASSWORD'
				className='p-4 bg-transparent placeholder:text-white border-2 border-red-700 rounded-2xl'
				type='password'
				{
					...register('password', {required: true})
				}
			/>
			<button className='p-4 bg-red-600 w-2/3 rounded-2xl'>REGISTER</button>
			<Link href='/sign/login'>
				Already have an account? <span className='underline'>Click here</span>
			</Link>
		</form>
	</>
)
