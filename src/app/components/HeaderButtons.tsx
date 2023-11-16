import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function HeaderButtons() {
	return (
		<>
			<Link href='/characters'>Characters</Link>
			{!cookies().get('token') ? (
				<Link
					href={'/sign/register'}
					className='px-4 py-2 border-white border-[1px] rounded-md'
				>
					Sign Up
				</Link>
			) : (
				<Link
					href={'/profile'}
					className='px-4 py-2 border-white border-[1px] rounded-md'
				>
					Profile
				</Link>
			)}
		</>
	)
}
