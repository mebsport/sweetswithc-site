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
              Welcome to SweetswithC, {''}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'We make Choclate Covered Strawberries',
                2500,
                'We make Strawberry Cheesecake Cups',
                2500,
                'We make Banana Pudding Cups',
                2500,
                'And we make everything with love',
                2500,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#d4dce2] text-base sm:text-lg lg:text-xl mb-6'>
            At our sweet treat business, we believe that every celebration
            deserves a touch of sweetness. Whether you&apos;re planning a
            vibrant birthday bash filled with laughter, a romantic wedding
            extravaganza that captures the essence of love, a heartfelt
            anniversary celebration that honors cherished memories, or any other
            special occasion that calls for a delightful indulgence, we are
            dedicated to bringing your sweetest ideas to life. Our team is
            passionate about crafting unique and delicious treats that not only
            satisfy your cravings but also add that extra special touch to your
            event. Let us help you create unforgettable moments that will leave
            your guests talking long after the party ends!{' '}
          </p>
          <div className='place-self-center'>
            <button
              className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-[#FFC0CB] text-white border border-white hover:text-black mt-3'
              onClick={() => window.open('/gallery', '_self')}
            >
              SEE MY WORK
            </button>
            <button
              className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-[#FFC0CB] text-white border border-white hover:text-black mt-3'
              onClick={() => window.open('/products', '_self')}
            >
              VIEW MY PRODUCTS
            </button>
            <button
              className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-[#FFC0CB] text-white border border-white hover:text-black mt-3'
              onClick={() => window.open('/order', '_self')}
            >
              PLACE AN ORDER
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[300px] h-[300px]'>
            <Image
              src='/Images/SweetswithC.PNG'
              alt='logo'
              className='transform-translate-x-1/2 transform-translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <Image
        src='/Images/HomeImages.png'
        alt='logo'
        className='mt-8'
        width={1440}
        height={900}
      />
    </section>
  )
}

export default HeroSection
