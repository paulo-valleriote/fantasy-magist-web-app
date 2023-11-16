import CharacterCard from './CharacterCard'
import { characters } from '../../../../../fakedb'

export default async function ListContent() {
	const placeholderCharacters = [...characters]

	return (
		<div className='grid grid-flow-col grid-cols-4 grid-rows-2 w-screen gap-2 gap-y-10'>
			{placeholderCharacters.map((character) => (
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
