'use client'
import React, { createContext, useState } from 'react'

interface UserDetailsContextProviderProps {
	children: React.ReactNode | React.ReactNode[]
}

interface UserContextProps {
	userDetails: UserProps
	switchIsLogged: (state: boolean) => void
}

interface UserProps {
	isLogged: boolean
}

const initialState = {
	isLogged: false,
}

export const UserDetailsContext = createContext<UserContextProps>({
	userDetails: initialState,
	switchIsLogged: () => {},
})

export function UserDetailsContextProvider({
	children,
}: UserDetailsContextProviderProps) {
	const [userDetails, setUserDetails] = useState<UserProps>(initialState)

	const switchIsLogged = (state: boolean) => {
		state
			? localStorage.setItem('logged', 'true')
			: localStorage.removeItem('logged')
		setUserDetails({ ...userDetails, isLogged: state })
	}

	return (
		<UserDetailsContext.Provider
			value={{
				userDetails,
				switchIsLogged,
			}}
		>
			{children}
		</UserDetailsContext.Provider>
	)
}
