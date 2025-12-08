import React from 'react'
import Left from './Left'
import Form from './Form'

const Main = () => {
  return (
    <div className='flex flex-col md:flex-row md:h-[550px] bg-white/70 backdrop-blur-lg  lg:w-[1196px] gap-11 rounded-3xl overflow-hidden my-3'>
        <Left />
        <Form />
    </div>
  )
}

export default Main