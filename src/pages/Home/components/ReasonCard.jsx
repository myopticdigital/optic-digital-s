import React from 'react'

const ReasonCard = ({
    icon,
    title,
    bodyText
}) => {
  return (
    <div className='flex flex-col items-center hover:-translate-y-2 trnasition duration-300 text-white justify-center rounded-xl max-w-80 md:max-w-60 p-5 gap-2 bg-gradient-to-tr from-[#5206C0] from-80% to-[#FDC280]'>
        <div>
            {icon}
        </div>

        <h4 className='font-neue text-center font-medium text-[24px]'>{ title }</h4>

        <p className='text-center'>{ bodyText }</p>
    </div>
  )
}

export default ReasonCard