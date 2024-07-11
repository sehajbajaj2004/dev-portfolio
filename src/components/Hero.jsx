import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#975eff]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-600 from-15%' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Sehaj</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I Develop 3D visuals, User <br className="hidden sm:block" /> Interfaces and Web Applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[64px] h-[35px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
            animate ={{
                x: [-12, 15, -12]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero