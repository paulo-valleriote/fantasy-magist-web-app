import DefaultTextInput from '@/app/components/input/DefaultTextInput'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'

interface ISheetHeaderProps {
	settingsIsOpen: boolean
	setSettingsIsOpen: () => void
}

export default function SheetHeader(props: ISheetHeaderProps) {
	const pathname = usePathname()

	const [page, setPage] = useState({
		overview: true,
		actions: false,
	})

	const changeCurrentPage = useCallback(() => {
		switch (pathname) {
			case '/sheet/general-page':
				setPage({ overview: true, actions: false })
				break
			case '/sheet/actions-page':
				setPage({ overview: false, actions: true })
				break
		}
	}, [pathname])

	useMemo(() => changeCurrentPage(), [changeCurrentPage])

	return (
		<header className='flex flex-col justify-between gap-4'>
			<div className='flex gap-4'>
				<DefaultTextInput placeholder='NAME' />
				<div className='grid grid-cols-3 grid-rows-2 gap-2'>
					<DefaultTextInput placeholder='RACE' />
					<DefaultTextInput placeholder='CLASS & LEVEL' />
					<DefaultTextInput placeholder='HEIGHT' />
					<DefaultTextInput placeholder='BACKGROUND' />
					<DefaultTextInput placeholder='' />
					<DefaultTextInput placeholder='WEIGHT' />
				</div>
			</div>
			<div className='flex justify-around'>
				<Link
					href={'/sheet/general-page'}
					className={`${page.overview && 'text-red-600'}`}
				>
					OVERVIEW
				</Link>
				<Link
					href={'/sheet/actions-page'}
					className={`${page.actions && 'text-red-600'}`}
				>
					ACTIONS
				</Link>
				<button className='w-fit h-fit' onClick={props.setSettingsIsOpen}>
					SETTINGS
				</button>
			</div>
		</header>
	)
}
