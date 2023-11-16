import { Suspense, useContext } from 'react'
import { UserDetailsContext } from '@/contexts/UserContext'
import { cookies } from 'next/headers'

interface CharacterListProps {
	children: React.ReactNode | React.ReactNode[]
}

export default function CharacterList({ children }: CharacterListProps) {
	return (
		<>
			{!cookies().get('token') ? (
				<p className='opacity-30 text-center p-20'>Empty List</p>
			) : (
				<Suspense fallback={<h2>Carregando...</h2>}>{children}</Suspense>
			)}
		</>
	)
}
