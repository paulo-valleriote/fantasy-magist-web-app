'use client';
import Image from 'next/image';
import dungeonAndDragonsTitle from './../../../public/dungeons-n-dragons-hero-vector.svg'
import Link from 'next/link';

export default function Index() {
    return (
    <div className="grid grid-cols-2 items-center p-12">
      <div className='flex flex-col items-center w-2/3 bg-zinc-700 h-full relative top-60'>
        <div className='flex flex-col items-center w-full p-6 text-white '>
          <div className='flex text-xl justify-between w-2/3'>
            <Link href={'./'}>Login</Link>
            <Link href={'./../signIn'}>Register</Link>
          </div>
        </div>
        <form className='flex flex-col w-full h-full bg-card-gradient items-center px-6 py-16 rounded-t-2xl gap-4'>
          <input placeholder='USERNAME' className='p-4 bg-transparent text-white placeholder:text-white border-2 border-red-700 rounded-2xl'/>
          <input  placeholder='PASSWORD' className='p-4 bg-transparent text-white placeholder:text-white border-2 border-red-700 rounded-2xl'/>
          <button className='p-4 bg-red-600 w-2/3 text-white rounded-2xl'>LOGIN</button>
        </form>
      </div>

      <div className='text-center text-white'>
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
      </div>
    </div>
    );
}