'use client'
import Modal from '@/app/components/Modal'
import TransparentTextInput from '@/app/components/input/TransparentTextInput'
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
			<div className='flex flex-col gap-6 px-6 pb-8 pt-2'>
				<div className='flex flex-col gap-2 text-center px-4'>
					<h2 className='text-2xl font-semibold border-b-2 border-b-gray-200 py-2'>
						New Character
					</h2>
					<h3 className='opacity-75'>First Steps</h3>
				</div>

				<form>
					<div className='flex flex-col gap-6 justify-around items-center'>
						<div className='flex items-end gap-6'>
							<TransparentTextInput label={{ content: 'Name' }} />

							<select className='py-3 px-4 h-fit rounded-md shadow-sm'>
								<option defaultChecked>Species</option>
							</select>
						</div>

						<div className='flex items-end gap-6'>
							<TransparentTextInput
								label={{ content: 'Level' }}
								type='number'
								numberRange={{ min: 1, max: 20 }}
							/>

							<select className='py-3 px-4 h-fit rounded-md shadow-sm'>
								<option defaultChecked>Classes</option>
							</select>
						</div>
					</div>
				</form>
			</div>
		</Modal>
	)
}
