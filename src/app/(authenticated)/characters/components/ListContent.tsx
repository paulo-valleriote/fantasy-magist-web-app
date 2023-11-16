import { CharacterProps } from '@/contexts/CharacterContext'
import CharacterCard from './CharacterCard'
import { cookies } from 'next/headers'

export default async function ListContent() {
	const loadCharacters = async () => {
		'use server'
		const response = await fetch(process.env.PUBLIC_URL + '/api/sheets/user', {
			headers: {
				Cookie: 'token=' + cookies().get('token'),
			},
		})

		if (response.ok) {
			const body = await response.json().catch((err) => {
				console.log(err)
				return []
			})
			return body
		}

		return []
	}

	const characters: CharacterProps[] = await loadCharacters()

	return (
		<div className='grid grid-flow-col grid-cols-4 grid-rows-2 w-screen gap-2 gap-y-10'>
			{characters.map((character) => (
				<CharacterCard
					key={character.id}
					id={character.id.toString()}
					name={character.name}
					height={character.height}
					weight={character.weight}
					race={character.race}
					characterClass={character.class}
				/>
			))}
		</div>
	)
}
