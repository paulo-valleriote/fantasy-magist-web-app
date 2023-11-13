import React, { useContext, useState } from 'react'
import SheetHeader from './SheetHeader'
import Link from 'next/link'
import { CharacterContext } from '@/contexts/CharacterContext'
import { motion } from 'framer-motion'

interface ISheetDefaultLayoutProps {
	children: React.JSX.Element | React.JSX.Element[]
}

export default function SheetDefaultLayout({
	children,
}: ISheetDefaultLayoutProps) {
	const [settingsIsOpen, setSettingsIsOpen] = useState(false)

	const handleSettingsModalState = () => {
		setSettingsIsOpen(!settingsIsOpen)
	}

	return (
		<>
			<div className='flex justify-center items-center m-[-2rem] mt-8 max-h-screen h-screen w-screen py-24'>
				<div className='relative flex flex-col py-12 px-16 justify-around bg-gray-300 h-full w-11/12 rounded-lg'>
					<SheetHeader
						settingsIsOpen={settingsIsOpen}
						setSettingsIsOpen={handleSettingsModalState}
					/>
					<div className='mt-24'>
						{children}
					</div>
				</div>
			</div>
			{settingsIsOpen && (
				<SettingsModal handleModalState={handleSettingsModalState} />
			)}
		</>
	)
}

const SettingsModal = ({
	handleModalState,
}: {
	handleModalState: () => void
}) => (
	<>
		<div
			className='absolute top-0 bg-black w-screen h-screen opacity-80 grid place-content-center z-50'
			onClick={handleModalState}
		/>
		<div className='absolute top-0 w-screen h-screen  grid place-content-center'>
			<div className='flex flex-col gap-2 w-fit h-fit py-14 px-28 bg-white rounded-lg z-50'>
				<button>Save Sheet</button>
				<hr/>
				<button>Delete Sheet</button>
				<hr/>
				<Link href='/characters'>Back to selection</Link>
			</div>
		</div>
	</>
)
