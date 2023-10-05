'use client'
import SheetAttributeCard from '../components/SheetAttributeCard'
import SheetDefaultLayout from '../components/SheetDefaultLayout'
import SheetProficiencyCard from '../components/SheetProficiencyCard'
import {motion} from 'framer-motion'
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
		<motion.div initial={{scale:0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: 0.6, ease: 'easeOut'}}>
			<SheetDefaultLayout>
				<section className='flex justify-between'>
					{Object.entries(attributes).map((attribute) => (
						<SheetAttributeCard
							attribute={attribute[0]}
							attributeBonus={attribute[1]}
							key={attribute[0]}
						/>
					))}
				</section>

				<section className='flex gap-4'>
					<SheetProficiencyCard profieciesList={['Athletics']} />
					<SheetProficiencyCard
						profieciesList={['Acrobatics', 'Sleight of H.', 'Stealh']}
					/>

					<div className='flex  w-full'>
						<div className='flex flex-wrap gap-2 text-xs justify-center items-center'>
							<div className='flex flex-col bg-proficiency-border-vector bg-no-repeat bg-contain bg-gray-200 py-4 px-4 items-center w-[5.5rem] text-center'>
								<input
									id='totalHitDice'
									type='text'
									className='bg-transparent text-center border-b-[1px] border-gray-400 w-full'
								/>
								<label htmlFor='totalHitDice'>TOTAL HIT DICE</label>
							</div>

							<div className='flex flex-col bg-proficiency-border-vector bg-no-repeat bg-contain bg-gray-200 py-6 px-4 items-center  w-[5.5rem] text-center'>
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

				<section className='flex text-xs justify-between'>

					<div className='flex gap-4'>
						<div className='bg-stats-border-vector bg-no-repeat bg-contain w-28 text-center flex flex-col p-8 items-center justify-center'>
							<input
								id='hitDice'
								type='text'
								className='w-16 text-center bg-transparent border-b-[1px] border-gray-400'
							/>
							<label htmlFor='hitDice'>PROFIENCY BONUS</label>
						</div>

						<div className='bg-stats-border-vector bg-no-repeat bg-contain w-28 text-center flex flex-col p-8 items-center justify-center'>
							<input
								id='hitDice'
								type='text'
								className='w-16 text-center bg-transparent border-b-[1px] border-gray-400'
							/>
							<label htmlFor='hitDice'>INITIATIVE BONUS</label>
						</div>
						
						<div className='bg-stats-border-vector bg-no-repeat bg-contain w-28 text-center flex flex-col p-8 items-center justify-center'>
							<input
								id='hitDice'
								type='text'
								className='w-16 text-center bg-transparent border-b-[1px] border-gray-400'
							/>
							<label htmlFor='hitDice'>SPEED</label>
						</div>
					</div>

					<div className='relative flex justify-center'>
						<div className='flex flex-col text-center bg-right-ornamental-border-vector bg-no-repeat bg-contain items-center w-1/3 justify-center p-8'>
							<input
								id='hitDice'
								type='text'
								className='w-6 text-center  bg-transparent border-b-[1px] border-gray-400'
							/>
							<label htmlFor='hitDice'>MAX HP</label>
						</div>

						<div className='flex flex-col text-center bg-double-ornamental-border-vector bg-no-repeat bg-contain items-center  w-1/3  justify-center p-8'>
							<input
								id='hitDice'
								type='text'
								className='w-6 text-center bg-transparent border-b-[1px] border-gray-400'
							/>
							<label htmlFor='hitDice'>HP</label>
						</div>

						<div className='flex flex-col text-center bg-left-ornamental-border-vector bg-no-repeat bg-contain items-center  w-1/3  justify-center p-8'>
							<input
								id='hitDice'
								type='text'
								className='w-6 text-center bg-transparent border-b-[1px] border-gray-400'
							/>
							<label htmlFor='hitDice'>TEMP. HP</label>
						</div>
					</div>

					<div className='relative bg-shield-vector bg-no-repeat bg-contain w-fit flex flex-col items-center justify-center gap-2'>
						<div className='flex flex-col w-24 items-center'>
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
		</motion.div>
	)
}
