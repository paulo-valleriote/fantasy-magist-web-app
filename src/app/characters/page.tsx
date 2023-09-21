'use client'

import { useRouter } from 'next/navigation'
import CharacterCard from './components/CharacterCard'

export default function Index() {
	const router = useRouter()
	const redirectToSheets = () => router.push('/sheet/general-page')

	const placeholderCharacter = {
		name: 'John Doe',
		height: '1.8m',
		weight: '65kg',
		race: 'elf',
		characterClass: 'rogue',
	}

	return (
		<>
			<div className='bg-black w-screen m-[-2rem] mt-20 p-6 px-28'>
				<div className='flex flex-col gap-4 text-white'>
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
					<div className='grid grid-flow-col grid-cols-4 grid-rows-2 w-screen'>
						<CharacterCard
							name={placeholderCharacter.name}
							height={placeholderCharacter.height}
							weight={placeholderCharacter.weight}
							race={placeholderCharacter.race}
							characterClass={placeholderCharacter.characterClass}
							redirectFunction={() => redirectToSheets()}
						/>
					</div>
				</div>
			</div>
			<div className='absolute bg-black w-screen h-screen m-[-2rem] opacity-20 -z-40' />
		</>
	)
}
