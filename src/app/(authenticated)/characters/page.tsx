import PrivateRoute from '@/app/components/PrivateRoute'
import CharacterList from './components/CharacterList'
import CharacterCreationModal from './components/CharacterCreationModal'
import CharacterCreation from './components/CharacterCreation'

export default async function Index() {
	return (
		<PrivateRoute>
			<div className='bg-black w-screen m-[-2rem] mt-20 p-6 px-28'>
				<div className='flex flex-col gap-12 text-white'>
					<div className='flex justify-between items-center'>
						<div className='flex flex-col gap-2'>
							<h2 className='text-xl'>All Characters</h2>
							<div className='flex gap-4'>
								<input
									type='text'
									placeholder='search by name'
									className='p-2 bg-transparent border-red-600 border-2'
								/>
								<button className='w-12 h-12 border-2 border-red-600'>a</button>
							</div>
						</div>
						<CharacterCreation />
					</div>

					<CharacterList />
				</div>
			</div>
			<div className='absolute bg-black w-screen h-screen m-[-2rem] opacity-20 -z-40' />
		</PrivateRoute>
	)
}
