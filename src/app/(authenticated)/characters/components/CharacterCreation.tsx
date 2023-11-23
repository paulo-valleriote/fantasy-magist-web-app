'use client'

import { useState } from 'react'
import CharacterCreationModal from './CharacterCreationModal'

export default function CharacterCreation() {
	const [isOpen, setIsOpen] = useState(false)
	if (isOpen) {
		return (
			<>
				<button
					className='p-4 h-1/2 bg-red-600'
					onClick={() => setIsOpen(true)}
				>
					new character
				</button>
				<CharacterCreationModal isOpen={isOpen} setIsOpen={setIsOpen} />
			</>
		)
	}
	return (
		<button className='p-4 h-1/2 bg-red-600' onClick={() => setIsOpen(true)}>
			new character
		</button>
	)
}
