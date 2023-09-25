'use client'
import Image from 'next/image'
import dungeonAndDragonsTitle from './../../../../public/dungeons-n-dragons-hero-vector.svg'
import SignForm from '../components/SignForm'

export default function Index() {
	return (
		<div className='grid grid-cols-2 items-center p-12'>
			<SignForm />

			<div className='text-center text-white'>
				<h1 className='font-bold text-4xl text-center'>Welcome to the</h1>
				<Image
					src={dungeonAndDragonsTitle}
					alt='Dungeons&Dragons'
					width={1280}
					height={135}
				/>
				<h1 className='font-bold text-4xl'>Online Sheet Manager</h1>
			</div>
		</div>
	)
}
