import React, { useContext, useState } from 'react'
import SheetHeader from './SheetHeader'
import Link from 'next/link'
import { CharacterContext } from '@/contexts/CharacterContext'

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
			<div className='flex justify-center items-center m-[-2rem] mt-8 w-screen py-10'>
				<div className='flex flex-col p-6 px-16 justify-around bg-gray-300 w-11/12 h-full rounded-lg'>
					<SheetHeader
						settingsIsOpen={settingsIsOpen}
						setSettingsIsOpen={handleSettingsModalState}
					/>
					{children}
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
			<div className='flex flex-col w-fit h-fit p-12 bg-white rounded-lg z-50'>
				<button>Save Sheet</button>
				<button>Delete Sheet</button>
				<Link href='/characters'>Back to characters selection</Link>
			</div>
		</div>
	</>
)
