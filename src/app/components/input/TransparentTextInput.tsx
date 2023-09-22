interface ITransparentTextInputProps {
	onClick?: () => any
	placeholder?: string
	id?: string
}

export default function TransparentTextInput(
	props: ITransparentTextInputProps
) {
	return (
		<input
			type='text'
			className='bg-transparent border-b-[1px] border-gray-400'
			id={props.id}
			placeholder={props.placeholder}
			onClick={props.onClick}
		/>
	)
}
