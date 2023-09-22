import React from 'react'
import SheetHeader from './SheetHeader'

interface ISheetDefaultLayoutProps {
	children: JSX.Element | JSX.Element[]
}

export default function SheetDefaultLayout({
	children,
}: ISheetDefaultLayoutProps) {
	return (
		<div className='flex justify-center items-center m-[-2rem] mt-8 w-screen'>
			<div className='flex flex-col p-6 px-28  justify-around bg-gray-300 w-11/12 h-5/6 rounded-lg'>
				<SheetHeader />
				{children}
			</div>
		</div>
	)
}
