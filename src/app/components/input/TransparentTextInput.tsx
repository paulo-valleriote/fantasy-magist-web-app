interface ITransparentTextInputProps {
	onClick?: () => any
	onChange?: (event: React.FormEvent<any>) => any
	placeholder?: string
	value?: string
	extraClasses?: string
	id?: string
}

export default function TransparentTextInput(
	props: ITransparentTextInputProps
) {
	return (
		<input
			type='text'
			className={`bg-transparent border-b-[1px] border-gray-400 ${props.extraClasses}`}
			value={props.value}
			id={props.id}
			placeholder={props.placeholder}
			onClick={props.onClick}
			onChange={props.onChange}
		/>
	)
}
