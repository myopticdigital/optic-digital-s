import React from 'react'

const ServiceCard = ({
    icon,
    serviceTitle,
    bodyText
}) => {
  return (
    <div className='flex flex-col items-start max-w-80 gap-3 p-4 bg-[#F4F4F4F4] rounded-[20px]'>
        <div className='bg-white p-3 rounded-xl'>
            { icon }
        </div>
        <h3 className='font-neue capitalize font-medium text-2xl'>{serviceTitle}</h3>

        <p className='text-[#575757]'>{bodyText}</p>
    </div>
  )
}

export default ServiceCard