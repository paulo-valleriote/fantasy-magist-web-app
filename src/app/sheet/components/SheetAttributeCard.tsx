interface ISheetAttributeCardProps {
	attribute: string
	attributeBonus?: number
}

export default function SheetAttributeCard(props: ISheetAttributeCardProps) {
	return (
		<div className='relative bg-attribute-border-vector bg-contain bg-no-repeat  text-sm flex flex-col items-center justify-between h-48 w-32'>
			<div className="absolute top-6 text-xs">SAVE</div>
			<div className='absolute bottom-7 flex flex-col items-center justify-center'>
				{props.attribute.toUpperCase()}
				<div>{props.attributeBonus ?? 0}</div>
			</div>
		</div>
	)
}
