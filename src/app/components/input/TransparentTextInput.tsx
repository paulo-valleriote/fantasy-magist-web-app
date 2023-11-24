interface ITransparentTextInputProps {
	onClick?: () => any
	onChange?: (event: React.FormEvent<any>) => any
	placeholder?: string
	value?: string
	type?: 'text' | 'password' | 'number'
	numberRange?: {
		min: number
		max: number
	}
	extraClasses?: string
	id?: string
	label?: {
		content: string
		position?: 'TOP' | 'BOTTOM'
	}
}

export default function TransparentTextInput(
	props: ITransparentTextInputProps
) {
	if (props.label?.content) {
		if (!props.label.position) {
			props.label.position = 'TOP'
		}

		const direction =
			props.label.position === 'TOP' ? 'flex-col' : 'flex-col-reverse'

		return (
			<div className={`flex ${direction}`}>
				<label>{props.label.content}</label>
				<input
					type={props.type || 'text'}
					min={props.numberRange?.min || undefined}
					max={props.numberRange?.max || undefined}
					className={`bg-transparent border-b-[1px] border-gray-400 ${props.extraClasses}`}
					value={props.value}
					id={props.id}
					placeholder={props.placeholder}
					onClick={props.onClick}
					onChange={props.onChange}
				/>
			</div>
		)
	}

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
