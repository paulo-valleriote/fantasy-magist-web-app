'use client'
import Image from 'next/image'
import dungeonAndDragonsTitle from './../../../../public/dungeons-n-dragons-hero-vector.svg'
import SignForm from '../components/SignForm'
import WelcomeBanner from '../components/WelcomeBanner'

export default function Index() {
	return (
		<div className='grid grid-cols-2 items-center p-12'>
			<SignForm />
			<WelcomeBanner/>
		</div>
	)
}
