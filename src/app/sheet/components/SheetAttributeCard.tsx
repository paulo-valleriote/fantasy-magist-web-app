import TransparentTextInput from "@/app/components/input/TransparentTextInput"

interface ISheetAttributeCardProps {
	attribute: string
	attributeBonus?: number
}

export default function SheetAttributeCard(props: ISheetAttributeCardProps) {
	return (
		<div className='relative bg-attribute-border-vector bg-contain bg-no-repeat  text-sm flex flex-col items-center justify-between h-48 w-32'>
			<div className="absolute flex text-center justify-center flex-col top-2 text-xs w-8 overflow-hidden">
				<TransparentTextInput extraClasses="text-center"/>
				SAVE
			</div>
			<div className='absolute bottom-7 flex flex-col items-center justify-center w-8 overflow-hidden'>
				{props.attribute.toUpperCase()}
				<TransparentTextInput value={props.attributeBonus?.toString() ?? '0'} extraClasses="text-center"/>
			</div>
		</div>
	)
}
