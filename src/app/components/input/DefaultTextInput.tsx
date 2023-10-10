interface ITransparentTextInputProps {
	onClick?: () => any
	onChange?: (event: React.FormEvent<any>) => any
	placeholder?: string
	value?: string
	id?: string
}

export default function DefaultTextInput(props: ITransparentTextInputProps) {
	return (
		<input
			type='text'
			className='rounded-lg bg-gray-100 py-1 px-4'
			id={props.id}
			placeholder={props.placeholder}
			value={props.value}
			onClick={props.onClick}
			onChange={props.onChange}
		/>
	)
}
