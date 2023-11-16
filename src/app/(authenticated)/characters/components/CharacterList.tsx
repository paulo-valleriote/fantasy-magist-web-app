import { Suspense } from 'react'
import { cookies } from 'next/headers'
import ListContent from './ListContent'

export default async function CharacterList() {
	return (
		<>
			<Suspense fallback={<h2>Carregando...</h2>}>
				<ListContent />
			</Suspense>
		</>
	)
}
