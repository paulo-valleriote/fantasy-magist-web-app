interface ISheetAttributeCardProps {
	attribute: string
	attributeBonus?: number
}

export default function SheetAttributeCard(props: ISheetAttributeCardProps) {
	return (
		<div className='bg-gray-200 flex flex-col items-center justify-between h-36 w-48'>
			<div>SAVE</div>
			<div className='flex flex-col items-center justify-center'>
				{props.attribute.toUpperCase()}
				<div>{props.attributeBonus || 0}</div>
			</div>
		</div>
	)
}
