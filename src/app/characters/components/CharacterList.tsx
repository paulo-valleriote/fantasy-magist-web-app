import { motion } from 'framer-motion'
import CharacterCard from './CharacterCard'
import { CharacterContext } from '@/contexts/CharacterContext'
import { useContext } from 'react'
import { characters } from '../../../../fakedb'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

interface CharacterListProps {
	router: AppRouterInstance
}

export default function CharacterList({ router }: CharacterListProps) {
	const { updateAll } = useContext(CharacterContext)
	const redirectToSheets = () => router.push('/sheet/general-page')

	const placeholderCharacters = [...characters]

	const selectCharacter = (id: number) =>
		updateAll(placeholderCharacters[id - 1])

	return (
		<div className='grid grid-flow-col grid-cols-4 grid-rows-2 w-screen gap-2 gap-y-10'>
			{placeholderCharacters.map((character) => (
				<motion.div
					key={character.id}
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5, ease: 'backInOut' },
					}}
				>
					<CharacterCard
						name={character.name}
						height={character.height}
						weight={character.weight}
						race={character.race}
						characterClass={character.class}
						redirectFunction={() => {
							selectCharacter(character.id)
							redirectToSheets()
						}}
					/>
				</motion.div>
			))}
		</div>
	)
}
