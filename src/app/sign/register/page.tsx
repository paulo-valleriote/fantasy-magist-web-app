import RegisterForm from '../components/RegisterForm'
import SignForm from '../components/SignForm'
import WelcomeBanner from '../components/WelcomeBanner'

export default async function Index() {
	return (
		<div className='grid grid-cols-2 items-center p-12'>
			<SignForm>
				<RegisterForm />
			</SignForm>
			<WelcomeBanner />
		</div>
	)
}
