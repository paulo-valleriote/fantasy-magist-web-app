'use client'
interface ISheetProficiencyCardProps {
	profieciesList: string[]
}

export default function SheetProficiencyCard(
	props: ISheetProficiencyCardProps
) {
	return (
		<div className='border-2 border-gray-500 rounded-lg py-2 px-4 h-36 w-48'>
			<ul>
				{props.profieciesList.map((profiency) => (
					<li key={profiency} className='flex gap-4'>
						<input
							type='checkbox'
							id={profiency}
							name={profiency}
							value={profiency}
						/>
						<label htmlFor={profiency}>{profiency}</label>
					</li>
				))}
			</ul>
		</div>
	)
}
