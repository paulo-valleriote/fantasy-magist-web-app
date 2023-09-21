export default function SheetHeader() {
	return (
		<header className='flex justify-between'>
			<div className='flex gap-4'>
				<input type='text' placeholder='NAME' />
				<div className='grid grid-cols-3 grid-rows-2 gap-2'>
					<input type='text' placeholder='RACE' />
					<input type='text' placeholder='CLASS & LEVEL' />
					<input type='text' placeholder='HEIGHT' />
					<input type='text' placeholder='BACKGROUND' />
					<input type='text' placeholder='' />
					<input type='text' placeholder='WEIGHT' />
				</div>
			</div>
			<h3>BACK</h3>
		</header>
	)
}
