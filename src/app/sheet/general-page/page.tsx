'use client'
import SheetAttributeCard from '../components/SheetAttributeCard'
import SheetDefaultLayout from '../components/SheetDefaultLayout'
import SheetHeader from '../components/SheetHeader'
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
			<section className='flex justify-around'>
				{Object.entries(attributes).map((attribute) => (
					<SheetAttributeCard
						attribute={attribute[0]}
						attributeBonus={attribute[1]}
						key={attribute[0]}
					/>
				))}
			</section>

			<section className='flex justify-around'>
				<SheetProficiencyCard profieciesList={['Athletics']} />
				<SheetProficiencyCard
					profieciesList={['Acrobatics', 'Sleight of H.', 'Stealh']}
				/>

				<div className='flex flex-col gap-4'>
					<div className='flex flex-col bg-gray-200 p-4 items-center gap-2'>
						<input
							id='totalHitDice'
							type='text'
							className='bg-transparent border-b-[1px] border-gray-400'
						/>
						<label htmlFor='totalHitDice'>TOTAL HIT DICE</label>
					</div>

					<div className='flex flex-col bg-gray-200 p-4 items-center gap-2'>
						<input
							id='hitDice'
							type='text'
							className='bg-transparent border-b-[1px] border-gray-400'
						/>
						<label htmlFor='hitDice'>HIT DICE</label>
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

			<section className='flex'>
				<div className='flex flex-col bg-gray-200 p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>PROFIENCY BONUS</label>
				</div>

				<div className='flex flex-col bg-gray-200 p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>INITIATIVE BONUS</label>
				</div>

				<div className='flex flex-col bg-gray-200 p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>MAX HP</label>
				</div>

				<div className='flex flex-col bg-gray-200 p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>HP</label>
				</div>

				<div className='flex flex-col bg-gray-200 p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>TEMP. HP</label>
				</div>

				<div className='flex flex-col bg-gray-200 p-4 items-center gap-2'>
					<input
						id='hitDice'
						type='text'
						className='bg-transparent border-b-[1px] border-gray-400'
					/>
					<label htmlFor='hitDice'>AC</label>
				</div>
			</section>
		</SheetDefaultLayout>
	)
}
