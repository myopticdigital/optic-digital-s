import React from 'react'
import Main from './components/Main'

const Contact = () => {
  return (
    <div className='flex items-center justify-center flex-col py-7 mt-7 px-5 pt-15'>
      <h1 className='font-neue font-bold text-[25px] md:text-[40px] text-black'>Contact us</h1>
      <p className='text-[#717171] text-center font-medium'>Any question or remarks? Just write us a message!</p>
      <Main />
    </div>
  )
}

export default Contact