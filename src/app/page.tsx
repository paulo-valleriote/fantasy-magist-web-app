'use client';
import Image from 'next/image';
import dungeonAndDragonsTitle from './../../public/dungeons-n-dragons-hero-vector.svg'
import Link from 'next/link';

export default function Index() {
    return (
      <div className='flex flex-col gap-4 items-center place-content-center text-center  text-white'>
      <h1 className="font-bold text-4xl text-center">
        Welcome to the
      </h1>
      <Image
      src={dungeonAndDragonsTitle}
      alt='Dungeons&Dragons'
      width={1280}
      height={135}
      />
      <h1 className="font-bold text-4xl">
        Online Sheet Manager
      </h1>
      <div className='flex flex-col gap-10 items-center text-center w-2/4'>
        <p className='uppercase'>
          Create a D&D character in minutes with a digital character sheet, roll dice, and manage spells, inventory, hit points, and more. Join friends to conquer monsters, embark on epic quests, and craft imaginative, enjoyable stories.
        </p>
        <Link href='./signUp' className='bg-white text-black uppercase border-4 w-2/6 border-black p-3 rounded-full text-sm'>
          Create an account
        </Link>
      </div>
      </div>
    );
}