'use client'
import DefaultTextInput from '@/pages/components/input/DefaultTextInput'
import { CharacterContext, CharacterProps } from '@/contexts/CharacterContext'
import useForm from '@/hook/useForm'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React, {
	Dispatch,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from 'react'

interface ISheetHeaderProps {
	settingsIsOpen: boolean
	setSettingsIsOpen: () => void
}

export default function SheetHeader(props: ISheetHeaderProps) {
	const pathname = usePathname()
	const { character, characterStateDispatcher } = useContext(CharacterContext)

	const [page, setPage] = useState({
		overview: true,
		actions: false,
	})

	const handleSheetHeaderValueChange = (
		event: React.FormEvent<HTMLInputElement>
	) =>
		characterStateDispatcher(
			event.currentTarget.id as keyof CharacterProps,
			event.currentTarget.value
		)

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
		<header className='absolute top-12 flex flex-col justify-between gap-4 text-sm'>
			<div className='flex gap-4 mb-4 mt-[-1rem]'>
				<DefaultTextInput
					placeholder='NAME'
					onChange={handleSheetHeaderValueChange}
					id='name'
					value={character?.name}
				/>
				<div className='grid grid-cols-3 grid-rows-2 gap-2'>
					<DefaultTextInput
						placeholder='RACE'
						onChange={handleSheetHeaderValueChange}
						id='race'
						value={character?.race}
					/>
					<DefaultTextInput
						placeholder='CLASS & LEVEL'
						onChange={handleSheetHeaderValueChange}
						id='class'
						value={character?.class}
					/>
					<DefaultTextInput
						placeholder='HEIGHT'
						onChange={handleSheetHeaderValueChange}
						id='height'
						value={character?.height}
					/>
					<DefaultTextInput
						placeholder='BACKGROUND'
						onChange={handleSheetHeaderValueChange}
						id='background'
						value={character?.background}
					/>
					<DefaultTextInput placeholder='' />
					<DefaultTextInput
						placeholder='WEIGHT'
						onChange={handleSheetHeaderValueChange}
						id='weight'
						value={character?.weight}
					/>
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
