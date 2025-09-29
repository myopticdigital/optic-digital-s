import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-[95px] py-[15px] bg-white'>
      <img src="src/assets/logo.svg" alt="logo" />

      <nav className='flex items-center gap-7'>
        <a href="/aboutus" className='text-[16px] '>About Us</a>
        <a href="#" className='text-[16px] '>Our Services</a>
        <a href="blogs" className='text-[16px] '>Blog</a>
        <a href="#" className='text-[16px] '>Careers</a>
        <a href="#" className='text-[16px] '>Contact us</a>
      </nav>

      <button className='cursor-pointer font-neue bg-primaryPurple px-6 py-3 text-white rounded-4xl font-medium'>
        Book a call
      </button>
    </div>
  )
}

export default Header