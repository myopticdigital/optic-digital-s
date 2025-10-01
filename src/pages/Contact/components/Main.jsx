import React from 'react'
import Left from './Left'
import Form from './Form'

const Main = () => {
  return (
    <div className='flex items-center h-[667px] w-[1196px] gap-11 rounded-3xl overflow-hidden shadow my-3'>
        <Left />
        <Form />
    </div>
  )
}

export default Main