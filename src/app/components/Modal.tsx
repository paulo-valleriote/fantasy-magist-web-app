'use client'
import useModal from '@/hooks/useModal'
import { Dispatch, SetStateAction } from 'react'

interface IModalProps {
	children: React.ReactNode | React.ReactNode[]
	state: boolean
	dispatchFunction: Dispatch<SetStateAction<boolean>>
}

export default function Modal({
	children,
	state,
	dispatchFunction,
}: IModalProps) {
	const { closeModal } = useModal(dispatchFunction)

	if (!state) {
		return <></>
	}

	return (
		<div className='absolute flex justify-center items-center top-0 left-0 bottom-0 right-0 z-40'>
			<div
				className='absolute w-screen h-screen bg-black opacity-60 z-40'
				onClick={closeModal}
			/>
			<div className='bg-slate-100 text-black p-6 rounded-2xl z-50'>
				{children}
			</div>
		</div>
	)
}
