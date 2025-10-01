import { Mail, MapPinIcon, Phone } from 'lucide-react'
import React from 'react'
import { FaceBook, Instagram, Twitter } from '../../../assets/svgs/svg'

const Left = () => {
  return (
    <div className='bg-primaryPurple rounded-r-3xl text-white p-10 h-full flex flex-col justify-between'>
        <div>
            <h3 className='font-neue font-medium text-[30px]'>Contact information</h3>
        <p className=''>Want to make inquires?</p>

        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
                <Phone width={20} height={20} /> +2347041400350
            </div>

            <div className='flex items-center gap-3'>
                <Mail width={20} height={20}/> israelyaya0@gmail.com
            </div>

            <div className='flex items-center gap-3'>
                <MapPinIcon width={20} height={20} /> badagry lagos state
            </div>
        </div>

        <div className='flex items-center gap-3'>
            <Twitter />
            <Instagram />
            <FaceBook />
        </div>
    </div>
  )
}

export default Left