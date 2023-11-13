import Image from "next/image";
import dungeonAndDragonsTitle from './../../../../public/dungeons-n-dragons-hero-vector.svg'
import { motion } from 'framer-motion'

export default function WelcomeBanner() {

	return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        className='text-center text-white'
      >
      <h1 className='font-bold text-4xl text-center'>Welcome to the</h1>
      <Image
        src={dungeonAndDragonsTitle}
        alt='Dungeons&Dragons'
        width={1280}
        height={135}
      />
      <h1 className='font-bold text-4xl'>Online Sheet Manager</h1>
    </motion.div>
	)
}
