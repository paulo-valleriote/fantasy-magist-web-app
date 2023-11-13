import Link from "next/link";
import { FormProps } from "./SignForm";

export default function LoginForm({register, submit}: FormProps) {
	return (
	<>
		<form className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4 text-white' onSubmit={submit}>
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
			<button type='submit' className='p-4 bg-red-600 w-2/3 rounded-2xl'>LOGIN</button>
			<Link href='/sign/register'>
				Need to create an account? <span className='underline'>Click here</span>
			</Link>
		</form>
	</>
	)
}