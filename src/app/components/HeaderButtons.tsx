import { cookies } from 'next/headers'
import Link from 'next/link'
import RedirectButton from './RedirectButton'

export default async function HeaderButtons() {
	return (
		<>
			<RedirectButton to={'/characters'} content={'Characters'} />
			{!cookies().get('token') ? (
				<RedirectButton
					to={'/sign/register'}
					content={'Sign Up'}
					withBorder={true}
				/>
			) : (
				<RedirectButton to={'/profile'} content={'Profile'} withBorder={true} />
			)}
		</>
	)
}
