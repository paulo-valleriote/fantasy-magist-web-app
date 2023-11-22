'use client'
import { CharacterContext, CharacterProps } from '@/contexts/CharacterContext'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

interface ICharacterCardProps {
	characterProps: CharacterProps
}

export default function CharacterCard({ characterProps }: ICharacterCardProps) {
	const router = useRouter()
	const { characterGeneralDispatcher } = useContext(CharacterContext)

	const character = {
		id: characterProps.id,
		name: characterProps.name,
		characteristics: {
			height: characterProps.height,
			weight: characterProps.weight,
			race: characterProps.race,
			class: characterProps.class,
		},
	}

	const handleCharacterSelection = () => {
		characterGeneralDispatcher(characterProps)
		router.push('/sheet/overview')
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
			<div
				onClick={handleCharacterSelection}
				className='grid grid-rows-2 bg-black w-2/3 cursor-pointer'
			>
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
									<span className='text-md'>
										{characteristicsPair[1] || 'not defined'}
									</span>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</motion.div>
	)
}
