import { X } from 'lucide-react'
import React, { useRef } from 'react'
import { useLocation } from 'react-router'

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const location = useLocation()
    const pathName = location.pathname
    const navRef = useRef(null)
  return (
    <div className={`fixed transition duration-300 md:hidden top-0 z-50 bg-white/25 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
    }  backdrop-blur-lg w-full h-full`} ref={navRef}>
        <div></div>
        <div className='relative'>
            <div className='absolute top-10 right-10' onClick={() => setIsOpen(false)}>
                <X />
            </div>
        </div>
        <nav className='flex flex-col items-center justify-center h-full gap-7'>
        <a href="/aboutus" className={`text-[25px] ${ pathName === '/aboutus' ? 'text-primaryPurple font-medium' : 'text-white' }`}>About us</a>
        <a href="#" className={`text-[25px] ${ pathName === '/services' ? 'text-primaryPurple font-medium' : 'text-white' }`}>Our Services</a>
        <a href="blogs" className={`text-[25px] ${ pathName.includes('blogs') ? 'text-primaryPurple font-medium' : 'text-white' }`}>Blog</a>
        <a href="#" className={`text-[25px] ${ pathName === '/careers' ? 'text-primaryPurple font-medium' : 'text-white' }`}>Careers</a>
        <a href="#" className={`text-[25px] ${ pathName === '/contact' ? 'text-primaryPurple font-medium' : 'text-white' }`}>Contact us</a>
      </nav>

    </div>
  )
}

export default MobileMenu