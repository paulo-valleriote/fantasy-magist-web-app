'use client'
import { CharacterContext } from '@/contexts/CharacterContext'
import { useContext } from 'react'
import SheetAttributeCard from '../components/SheetAttributeCard'
import SheetProficiencyCard from '../components/SheetProficiencyCard'

export default function Sheet() {
	const { character, characterAttributeStateDispatcher } =
		useContext(CharacterContext)

	return (
		<>
			<div className='flex flex-col gap-4'>
				<section className='flex justify-evenly'>
					{Object.entries(character!.attributes).map((attribute) => (
						<SheetAttributeCard
							attribute={{
								name: attribute[0],
								value: attribute[1],
							}}
							key={attribute[0]}
							dispatch={characterAttributeStateDispatcher}
						/>
					))}
				</section>

				<section className='flex justify-evenly'>
					<div className='flex flex-col gap-4 justify-center'>
						<div className='flex gap-2'>
							<SheetProficiencyCard profieciesList={['Athletics']} />
							<SheetProficiencyCard
								profieciesList={['Acrobatics', 'Sleight of H.', 'Stealh']}
							/>
						</div>

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
					</div>

					<div className='flex text-xs justify-center items-center gap-4'>
						<div className='flex flex-col	text-xs justify-center items-center gap-4'>
							<div className='flex flex-col bg-proficiency-border-vector bg-no-repeat bg-contain bg-gray-200 py-7 px-6 items-center w-[7.3rem] rounded-2xl text-center'>
								<input
									id='totalHitDice'
									type='text'
									className='bg-transparent text-center border-b-[1px] border-gray-400 w-full'
								/>
								<label htmlFor='totalHitDice'>TOTAL HIT DICE</label>
							</div>

							<div className='flex flex-col bg-proficiency-border-vector bg-no-repeat bg-contain bg-gray-200 py-9 px-6 items-center w-[7.3rem] rounded-2xl  text-center'>
								<input
									id='hitDice'
									type='text'
									className='bg-transparent text-center border-b-[1px] border-gray-400 w-full'
								/>
								<label htmlFor='hitDice'>HIT DICE</label>
							</div>
						</div>

						<div className='flex flex-col bg-proficiency-border-vector bg-no-repeat bg-contain bg-gray-200 text-center h-[14rem] w-[15.8rem] rounded-3xl'>
							<textarea
								id='annotations'
								className='bg-transparent text-start h-full w-full px-6 py-4'
								placeholder='annotations'
							/>
						</div>
					</div>

					<div className='flex flex-col gap-4 justify-center'>
						<div className='flex gap-6'>
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
						</div>

						<div className='flex gap-4 justify-around'>
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
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
