interface ITransparentTextInputProps {
	onClick?: () => any
	placeholder?: string
	id?: string
}

export default function DefaultTextInput(props: ITransparentTextInputProps) {
	return (
		<input
			type='text'
			className='rounded-lg bg-gray-100 py-1 px-4'
			id={props.id}
			placeholder={props.placeholder}
			onClick={props.onClick}
		/>
	)
}
