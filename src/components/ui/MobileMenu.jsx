import { X } from 'lucide-react'
import React, { useRef } from 'react'
import { useLocation } from 'react-router'

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const location = useLocation()
    const pathName = location.pathname
    const navRef = useRef(null)
  return (
    <div className={`fixed transition duration-300 ease-in min-[800px]:hidden top-0 z-50 bg-white/65 ${
        isOpen ? 'translate-x-0' : '-translate-x-full '
    }  backdrop-blur-xl w-full h-full`} ref={navRef}>
        <div></div>
        <div className='relative'>
            <div className='absolute top-10 right-10' onClick={() => setIsOpen(false)}>
                <X />
            </div>
        </div>
        <nav className='flex flex-col items-center justify-center h-full gap-7'>
        <a href="/aboutus" className={`text-[25px] ${ pathName === '/aboutus' ? 'text-primaryPurple font-medium' : 'text-black' }`}>About us</a>
        <a href="/services" className={`text-[25px] ${ pathName === '/services' ? 'text-primaryPurple font-medium' : 'text-black' }`}>Our Services</a>
        <a href="/blogs" className={`text-[25px] ${ pathName.includes('blogs') ? 'text-primaryPurple font-medium' : 'text-black' }`}>Blog</a>
        <a href="/careers" className={`text-[25px] ${ pathName === '/careers' ? 'text-primaryPurple font-medium' : 'text-black' }`}>Careers</a>
        <a href="/contact" className={`text-[25px] ${ pathName === '/contact' ? 'text-primaryPurple font-medium' : 'text-black' }`}>Contact us</a>
      </nav>

    </div>
  )
}

export default MobileMenu