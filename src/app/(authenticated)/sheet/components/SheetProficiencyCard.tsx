interface ISheetProficiencyCardProps {
	profieciesList: string[]
}

export default function SheetProficiencyCard(
	props: ISheetProficiencyCardProps
) {
	return (
		<div className='bg-proficiency-border-vector bg-no-repeat bg-contain py-2 px-4 h-36 w-full'>
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
