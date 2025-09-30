import React from 'react'
import { useLocation } from 'react-router'

const Header = () => {
  const loction = useLocation();
  const pathName = loction.pathname
  console.log(pathName)

  return (
    <div className='flex items-center justify-between px-[95px] py-[15px] bg-white'>
      <a href="/"><img src="src/assets/logo.svg" alt="logo" /></a>

      <nav className='flex items-center gap-7'>
        <a href="/aboutus" className={`text-[16px] ${ pathName === '/aboutus' ? 'text-primaryPurple' : 'text-black' }`}>About us</a>
        <a href="#" className={`text-[16px] ${ pathName === '/services' ? 'text-primaryPurple' : 'text-black' }`}>Our Services</a>
        <a href="blogs" className={`text-[16px] ${ pathName.includes('blogs') ? 'text-primaryPurple' : 'text-black' }`}>Blog</a>
        <a href="#" className={`text-[16px] ${ pathName === '/careers' ? 'text-primaryPurple' : 'text-black' }`}>Careers</a>
        <a href="#" className={`text-[16px] ${ pathName === '/contact' ? 'text-primaryPurple' : 'text-black' }`}>Contact us</a>
      </nav>

      <button className='cursor-pointer hover:opacity-75 transition-all duration-300 font-neue bg-primaryPurple px-6 py-3 text-white rounded-4xl font-medium'>
        Book a call
      </button>
    </div>
  )
}

export default Header