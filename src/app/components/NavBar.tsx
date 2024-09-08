'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const navLinks = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/gallery',
    title: 'Gallery',
  },
  {
    href: '/products',
    title: 'Products',
  },
  {
    href: '/order',
    title: 'Order',
  },
]

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false)

  return (
    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2 '>
        <Link href={'/'} className='text-lg md:text-5xl text-[#FFC0CB] font-mono'>
          TEXT LOGO PLACEHOLDER
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-[#FFC0CB] text-[#FFC0CB] hover:text-[#FFD700] hover:border-[#FFD700]'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-[#FFC0CB] text-[#FFC0CB] hover:text-[#FFD700] hover:border-[#FFD700]'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar
