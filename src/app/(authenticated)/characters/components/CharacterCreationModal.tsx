'use client'
import Modal from '@/app/components/Modal'
import { Dispatch, SetStateAction, useState } from 'react'

export default function CharacterCreationModal({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
	return (
		<Modal state={isOpen} dispatchFunction={setIsOpen}>
			<div>abre e fecha</div>
		</Modal>
	)
}
