'use client'
import React, { createContext,  useState } from "react";

interface CharacterContextProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

interface CharacterContextProps {
  character: CharacterProps | undefined
  setCharacter: React.Dispatch<React.SetStateAction<CharacterProps | undefined>>
}

export interface CharacterProps {
  id: number
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
  attributes: {
    strenght: number
    dexterity: number
    constitution: number
    wisdom: number
    intelligence: number
    charisma: number
  }
}

const initialState = {
  id: 0,
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
    charisma: 0
  }
}

export const CharacterContext = createContext<CharacterContextProps>({
  character: initialState,
  setCharacter: () => {}
})

export function CharacterContextProvider({children}: CharacterContextProviderProps) {
  const [character, setCharacter] = useState<CharacterProps>()

  return (
    <CharacterContext.Provider value={{character, setCharacter}}>
      {children}
    </CharacterContext.Provider>
  )
}