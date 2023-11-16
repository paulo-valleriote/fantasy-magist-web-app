'use client'
import { motion } from 'framer-motion'

interface ICharacterCardProps {
	id?: string
	name?: string
	height?: string
	weight?: string
	race?: string
	characterClass?: string
}

export default function CharacterCard({
	id = '0',
	name = 'John Doe',
	height = '1.75m',
	weight = '70kg',
	race = 'human',
	characterClass = 'fighter',
}: ICharacterCardProps) {
	const character = {
		id: id,
		name: name,
		characteristics: {
			height: height,
			weight: weight,
			race: race,
			class: characterClass,
		},
	}

	return (
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
			<div className='grid grid-rows-2 bg-black w-2/3 cursor-pointer'>
				<div className='flex place-content-center items-center shadow-3xl-inner rounded-t-lg shadow-red-500'>
					Character Image
				</div>
				<div className='flex flex-col bg-gray-600 text-white p-2 gap-2 rounded-b-lg'>
					<h3 className='font-bold'>{character.name}</h3>
					<div className='flex flex-wrap gap-4'>
						{Object.entries(character.characteristics).map(
							(characteristicsPair) => (
								<div className='flex flex-col' key={character.name}>
									<span className='text-xs opacity-75'>
										{characteristicsPair[0]}
									</span>
									<span className='text-md'>{characteristicsPair[1]}</span>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</motion.div>
	)
}