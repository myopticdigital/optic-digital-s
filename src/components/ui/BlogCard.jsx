import React from 'react'

const BlogCard = () => {
  return (
    <div className='flex flex-col items-start gap-3 p-3 border max-w-[397px] max-h-[444px] overflow-hidden rounded-2xl border-[#DADADA]'>
        <img src="/blogi.jpg" className='rounded-xl' alt="" />
        <h3 className='font-semibold text-[24px] leading-[28px] max-w-[340px]'>5 Proven Marketing Strategies to Boost Brand Awareness in 2025</h3>
        <div className='flex items-center w-full justify-between'>
            <div className='flex items-center gap-2'>
                <img src="/worker1.jpg" className='w-10 h-10 rounded-full' alt="" />
                <p className='font-medium text-[16px]'>Abraham Segun</p>
            </div>

            <p className='text-[#969696]'>October 1, 2025</p>
        </div>
    </div>
  )
}

export default BlogCard