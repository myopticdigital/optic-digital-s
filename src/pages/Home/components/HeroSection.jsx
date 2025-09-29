import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative bg-[url('./assets/homeherobg.jpg')] flex flex-col items-center gap-4 justify-center bg-cover bg-no-repeat w-full h-[600px] bg-center">
        <h1 className='font-neue font-bold text-white text-center max-w-3xl text-[56px] z-50'>We Grow Brands That People Can’t Ignore</h1>
        <p className='text-[16px] text-white text-center max-w-md z-50'>Strategy, design, and campaigns built to make your business stand out, connect, and convert.</p>
        <div className='flex items-center gap-4 z-50'>
            <button className='cursor-pointer font-neue bg-primaryPurple px-6 py-3 text-white rounded-4xl font-medium'>Book a call</button>
            <button className='cursor-pointer font-neue border border-secondaryColor px-6 py-3 text-white rounded-4xl font-medium'><a href="#">Explore our services</a></button>
        </div>

        <div className='absolute inset-0 bg-black/60 -z-0'></div>
    </div>
  )
}

export default HeroSection