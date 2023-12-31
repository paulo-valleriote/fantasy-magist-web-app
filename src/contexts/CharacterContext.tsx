'use client'
import React, { createContext, useState } from 'react'

interface CharacterContextProviderProps {
	children: React.ReactNode | React.ReactNode[]
}

interface CharacterContextProps {
	character: CharacterProps
	characterGeneralDispatcher: (props: CharacterProps) => void
	characterStateDispatcher: CharacterStateDispatcher
	characterAttributeStateDispatcher: CharacterAttributeStateDispatcher
}

interface CharacterAttributes {
	strenght: number
	dexterity: number
	constitution: number
	wisdom: number
	intelligence: number
	charisma: number
}
export interface CharacterProps {
	id: string
	name: string
	level: number
	class: string
	race: string
	background: string
	height: string
	weight: string
	armorClass: number
	healthPoints: number
	hitDice: number
	attributes: CharacterAttributes
}

const initialState = {
	id: '',
	name: '',
	level: 0,
	armorClass: 0,
	background: '',
	class: '',
	healthPoints: 0,
	hitDice: 0,
	race: '',
	height: '',
	weight: '',
	attributes: {
		strenght: 0,
		dexterity: 0,
		constitution: 0,
		intelligence: 0,
		wisdom: 0,
		charisma: 0,
	},
}

type KeyOfCharacterProps = keyof CharacterProps
type KeyOfCharacterAttributes = keyof CharacterAttributes
type ValueOfCharacterProps = (typeof initialState)[KeyOfCharacterProps]

export type CharacterStateDispatcher = (
	key: KeyOfCharacterProps,
	value: ValueOfCharacterProps
) => void

export type CharacterAttributeStateDispatcher = (
	key: KeyOfCharacterAttributes,
	value: number
) => void

export const CharacterContext = createContext<CharacterContextProps>({
	character: initialState,
	characterGeneralDispatcher: (props: CharacterProps) => {},
	characterStateDispatcher: (
		key: KeyOfCharacterProps,
		value: ValueOfCharacterProps
	) => {},
	characterAttributeStateDispatcher: (
		key: KeyOfCharacterAttributes,
		value: number
	) => {},
})

export function CharacterContextProvider({
	children,
}: CharacterContextProviderProps) {
	const [character, setCharacter] = useState<CharacterProps>(initialState)

	const characterStateDispatcher = (
		key: KeyOfCharacterProps,
		value: ValueOfCharacterProps
	) => setCharacter({ ...character, [key]: value })

	const characterAttributeStateDispatcher = (
		key: KeyOfCharacterAttributes,
		value: number
	) =>
		setCharacter({
			...character,
			attributes: {
				...character.attributes,
				[key]: value,
			},
		})

	const characterGeneralDispatcher = (props: CharacterProps) =>
		setCharacter(props)

	return (
		<CharacterContext.Provider
			value={{
				character,
				characterGeneralDispatcher,
				characterStateDispatcher,
				characterAttributeStateDispatcher,
			}}
		>
			{children}
		</CharacterContext.Provider>
	)
}
