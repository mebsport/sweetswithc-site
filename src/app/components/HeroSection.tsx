'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12 '>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FFC0CB] to-[#FFD700]'>
              Hi, I&apos;m Carlissa, {''}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "1",
                2500,
                "2",
                2500,
                "3",
                2500,
                "4",
                2500,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#d4dce2] text-base sm:text-lg lg:text-xl mb-6'>
            little blurb about what she does or what got ehr started placeholder
          </p>
          <div className='place-self-center'>
            <button className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-[#FFC0CB] text-white border border-white hover:text-black mt-3'>
              SEE MY WORK
            </button>
            <button
              className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-[#FFC0CB] text-white border border-white hover:text-black mt-3'
              onClick={() =>
                window.open('https://github.com/mebsport', '_blank')
              }
            >
              VIEW MY PRODUCTS
            </button>
            <button className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-[#FFC0CB] text-white border border-white hover:text-black mt-3'>
              PLACE AN ORDER
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[300px] h-[300px]'>
            <Image
              src='/Images/MarcelusCodesLogo.png'
              alt='logo'
              className='transform-translate-x-1/2 transform-translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
