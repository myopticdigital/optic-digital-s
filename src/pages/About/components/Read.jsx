import React from 'react'
import BlogCard from '../../../components/ui/BlogCard'

const Read = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 py-7 px-3'>
        <h1 className='font-neue font-bold text-[36px] leading-[44px] capitalize text-center'>Read Insights That Drive Growth</h1>
        <p className='leading-[24px] text-center max-w-2xl'>Explore expert perspectives, practical strategies, and the latest trends in marketing to keep your brand ahead of the curve</p>
        <div className='flex flex-col md:flex-row items-center gap-3'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    </div>
  )
}

export default Read