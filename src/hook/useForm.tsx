import React, { Dispatch } from 'react'

export default function useForm() {
	const handlerFormChange = (
		dispatch: Dispatch<any>,
		state: any,
		event: React.FormEvent<any>
	) =>
		dispatch({ ...state, [event.currentTarget.id]: event.currentTarget.value })

	return { handlerFormChange }
}
