'use client'

import { useRouter } from 'next/navigation'
import CharacterCard from './components/CharacterCard'
import { useContext } from 'react'
import { CharacterContext } from '@/contexts/CharacterContext'
import { characters } from '../../../fakedb'
import { motion } from 'framer-motion'

export default function Index() {
	const router = useRouter()
	const { updateAll } = useContext(CharacterContext)
	const redirectToSheets = () => router.push('/sheet/general-page')

	const placeholderCharacters = [...characters]

	const selectCharacter = (id: number) =>
		updateAll(placeholderCharacters[id - 1])

	return (
		<>
			<div className='bg-black w-screen m-[-2rem] mt-20 p-6 px-28'>
				<div className='flex flex-col gap-12 text-white'>
					<div className='flex justify-between items-center'>
						<div className='flex flex-col gap-2'>
							<h2 className='text-xl'>All Characters</h2>
							<div className='flex gap-4'>
								<input
									type='text'
									placeholder='search by name'
									className='p-2 bg-transparent border-red-600 border-2'
								/>
								<button className='w-12 h-12 border-2 border-red-600'>a</button>
							</div>
						</div>
						<button className='p-4 h-1/2 bg-red-600'>new character</button>
					</div>
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
				</div>
			</div>
			<div className='absolute bg-black w-screen h-screen m-[-2rem] opacity-20 -z-40' />
		</>
	)
}
