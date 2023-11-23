import { Dispatch, SetStateAction } from 'react'

type DispatchType = Dispatch<SetStateAction<boolean>>

export default function useModal(dispatch: DispatchType) {
	const openModal = () => dispatch(true)
	const closeModal = () => dispatch(false)

	return { openModal, closeModal }
}
