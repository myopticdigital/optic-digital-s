import React from 'react'

const TestimonialCard = ({
    testimony,
    userName,
    logo
}) => {
  return (
    <div className='flex rounded-2xl items-start justify-between max-w-96 h-96 gap-4 p-7 flex-col bg-white text-black'>
        <img src="/quotes.png" alt="quotes" />

        <p className='text-[20px] leading-[32px]'>{testimony}</p>

        <div className='flex items-center gap-4'>
            <img src={logo} className='w-8 h-8 rounded-full' alt="logo" />
            <p className='font-neue font-medium text-[24px] leading-[30px]'>{userName}</p>
        </div>
    </div>
  )
}

export default TestimonialCard