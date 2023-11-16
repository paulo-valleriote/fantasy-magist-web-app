'use client'

import { Suspense, useContext } from 'react'
import CharacterList from './components/CharacterList'
import { UserDetailsContext } from '@/contexts/UserContext'
import { useRouter } from 'next/navigation'
import CharacterCard from './components/CharacterCard'
import { CharacterContext } from '@/contexts/CharacterContext'
import { characters } from '../../../../fakedb'
import { motion } from 'framer-motion'

export default function Index() {
	const router = useRouter()
	const { userDetails } = useContext(UserDetailsContext)
	const logged = localStorage.getItem('logged')

	return (
		<>
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
						<button className='p-4 h-1/2 bg-red-600'>new character</button>
					</div>
					{!userDetails.isLogged && !logged ? (
						<p className='opacity-30 text-center p-20'>Empty List</p>
					) : (
						<Suspense fallback={<h2>Carregando...</h2>}>
							<CharacterList router={router} />
						</Suspense>
					)}
				</div>
			</div>
			<div className='absolute bg-black w-screen h-screen m-[-2rem] opacity-20 -z-40' />
		</>
	)
}
