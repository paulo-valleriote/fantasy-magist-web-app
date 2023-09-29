'use client'
import SheetAttributeCard from '../components/SheetAttributeCard'
import SheetDefaultLayout from '../components/SheetDefaultLayout'
import SheetProficiencyCard from '../components/SheetProficiencyCard'

export default function Sheet() {
	const attributes = {
		STR: 0,
		DEX: 0,
		CON: 0,
		INT: 0,
		WIS: 0,
		CHA: 0,
	}
	return (
		<SheetDefaultLayout>
			<section className='flex justify-around gap-2'>
				{Object.entries(attributes).map((attribute) => (
					<SheetAttributeCard
						attribute={attribute[0]}
						attributeBonus={attribute[1]}
						key={attribute[0]}
					/>
				))}
			</section>

			<section className='flex gap-2'>
				<SheetProficiencyCard profieciesList={['Athletics']} />
				<SheetProficiencyCard
					profieciesList={['Acrobatics', 'Sleight of H.', 'Stealh']}
				/>

				<div className='flex  w-full'>
					<div className='flex flex-col gap-2 text-xs justify-center items-center'>
						<div className='flex flex-col bg-gray-200 px-4 py-2 items-center gap-2 w-2/3 text-center'>
							<input
								id='totalHitDice'
								type='text'
								className='bg-transparent text-center border-b-[1px] border-gray-400 w-full'
							/>
							<label htmlFor='totalHitDice'>TOTAL HIT DICE</label>
						</div>

						<div className='flex flex-col bg-gray-200 p-1 px-3 items-center gap-2  w-2/3 text-center'>
							<input
								id='hitDice'
								type='text'
								className='bg-transparent text-center border-b-[1px] border-gray-400 w-full'
							/>
							<label htmlFor='hitDice'>HIT DICE</label>
						</div>
					</div>
				</div>

				<SheetProficiencyCard
					profieciesList={[
						'Arcana',
						'History',
						'Investigation',
						'Nature',
						'Religion',
					]}
				/>
				<SheetProficiencyCard
					profieciesList={[
						'Animal H.',
						'Insight',
						'Medicine',
						'Perception',
						'Survival',
					]}
				/>
				<SheetProficiencyCard
					profieciesList={[
						'Deception',
						'Intimidation',
						'Performance',
						'Persuasion',
					]}
				/>
			</section>

			<section className='flex gap-2 text-sm'>
				<div className='bg-stats-border-vector bg-no-repeat bg-contain w-fit flex flex-col p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='w-full bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>PROFIENCY BONUS</label>
				</div>

				<div className='bg-stats-border-vector bg-no-repeat bg-contain w-fit flex flex-col  p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='w-full bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>INITIATIVE BONUS</label>
				</div>

				<div className='w-1/2 flex flex-col bg-gray-200 p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='w-full bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>MAX HP</label>
				</div>

				<div className='w-1/2 flex flex-col bg-gray-200 p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='w-full bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>HP</label>
				</div>

				<div className='w-1/2 flex flex-col bg-gray-200 p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='w-full bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>TEMP. HP</label>
				</div>

				<div className='relative bg-shield-vector bg-no-repeat bg-contain w-fit flex flex-col items-center justify-center gap-2'>
					<div className='flex flex-col items-center'>
						<input
							id='hitDice'
							type='text'
							className='w-1/2 text-center bg-transparent border-b-[1px] border-gray-400'
						/>
						<label htmlFor='hitDice'>AC</label>
					</div>
				</div>
			</section>
		</SheetDefaultLayout>
	)
}
