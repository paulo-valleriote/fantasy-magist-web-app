import TransparentTextInput from '@/app/components/input/TransparentTextInput'
import {
	CharacterAttributeStateDispatcher,
	CharacterContext,
	CharacterProps,
	CharacterStateDispatcher,
} from '@/contexts/CharacterContext'
import useForm from '@/hook/useForm'
import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react'

interface ISheetAttributeCardProps {
	attribute: { name: string; value: number }
	dispatch: CharacterAttributeStateDispatcher
}

function handleAttributeName(attributeName: string) {
	switch (attributeName) {
		case 'strenght':
			return 'STR'
		case 'dexterity':
			return 'DEX'
		case 'constitution':
			return 'CON'
		case 'intelligence':
			return 'INT'
		case 'wisdom':
			return 'WIS'
		case 'charisma':
			return 'CHA'
	}
}

enum attrEnum {
	'strenght' = 'strenght',
	'dexterity' = 'dexterity',
	'constitution' = 'constitution',
	'intelligence' = 'intelligence',
	'wisdom' = 'wisdom',
	'charisma' = 'charisma',
}

export default function SheetAttributeCard(props: ISheetAttributeCardProps) {
	const { character } = useContext(CharacterContext)

	const handleAttributeCard = ({
		currentTarget: { id, value },
	}: React.FormEvent<HTMLInputElement>) =>
		props.dispatch(id as attrEnum, Number(value))

	useEffect(() => console.log(character), [character])

	return (
		<div className='relative bg-attribute-border-vector bg-contain bg-no-repeat  text-sm flex flex-col items-center justify-between h-48 w-32'>
			<div className='absolute flex text-center justify-center flex-col top-2 text-xs w-8 overflow-hidden'>
				<TransparentTextInput
					id={props.attribute.name}
					extraClasses='text-center'
					onChange={handleAttributeCard}
				/>
				SAVE
			</div>
			<div className='absolute bottom-7 flex flex-col items-center justify-center w-8 overflow-hidden'>
				{handleAttributeName(props.attribute.name)}
				<TransparentTextInput
					id={props.attribute.name}
					value={props.attribute.value.toString()}
					extraClasses='text-center'
					onChange={handleAttributeCard}
				/>
			</div>
		</div>
	)
}
