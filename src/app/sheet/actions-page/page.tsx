'use client'
import SheetDefaultLayout from '../components/SheetDefaultLayout'

export default function ActionsPage() {
	return (
		<SheetDefaultLayout>
			<section className='flex flex-col items-center gap-4 border-2 border-gray-700 rounded-lg p-4'>
				<table id='attacks' className='w-full'>
					<thead>
						<tr className='grid grid-cols-5 mb-2'>
							<td>NAME</td>
							<td>HIT</td>
							<td>DAMAGE</td>
							<td>TYPE</td>
							<td>PROPERTIES</td>
						</tr>
					</thead>

					<tbody>
						<tr className='grid grid-cols-5'>
							<td>
								<input
									type='text'
									className='rounded-lg bg-gray-100 py-1 px-4'
								/>
							</td>
							<td>
								<input
									type='text'
									className='rounded-lg bg-gray-100 py-1 px-4'
								/>
							</td>
							<td>
								<input
									type='text'
									className='rounded-lg bg-gray-100 py-1 px-4'
								/>
							</td>
							<td>
								<input
									type='text'
									className='rounded-lg bg-gray-100 py-1 px-4'
								/>
							</td>
							<td>
								<input
									type='text'
									className='rounded-lg bg-gray-100 py-1 px-4'
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<label htmlFor='attacks'>ATTACKS</label>
			</section>

			<section className='flex flex-col items-center gap-4'>
				<textarea
					id='equipments'
					className='bg-transparent border-2 border-gray-500 rounded-lg w-full p-4'
				/>
				<label htmlFor='equipments'>EQUIPMENTS</label>
			</section>
		</SheetDefaultLayout>
	)
}
