import React from 'react'
import { CandleStick, Light, Person, Planet } from '../../../assets/svgs/svg'
import ReasonCard from './ReasonCard'

const WhyChoose = () => {
    const reasons = [
        {
            icon : <Planet />,
            title: 'Global Reach, Local Impact',
            bodyText: ' Our international presence allows us to tailor strategies that  resonate with local audiences while leveraging global trends.'
        },

        {
            icon : <CandleStick />,
            title : 'Data-Driven Approach',
            bodyText: ' Harness the power of analytics to  make informed decisions,  optimize campaigns, and achieve  measurable results.'
        },

        {
            icon : <Light />,
            title: ' Innovation at Core',
            bodyText: ' Stay ahead in the digital  landscape with cutting-edge  techniques and emerging  technologies, keeping your brand  at the forefront.'
        },

        {
            icon : <Person />,
            title : 'Client-Centric Focus',
            bodyText: 'Your success is our priority. We  work closely with you,  understanding your goals and  evolving alongside your business.'
        }
    ]
  return (
    <div className=' max-w-[1200px] mx-auto  flex items-center px-3 justify-center flex-col pb-15 gap-4 mt-15'>
        <h3 className='capitalize font-neue text-center font-bold text-[24px] md:text-[32px]'>Why Choose Optic Digital</h3>
        <p className='text-center max-w-md md:max-w-2xl'>Every brand has its own story, and we craft strategies designed to highlight what makes yours unique while driving real, measurable results</p>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                reasons.map((reason, i) => (
                    <ReasonCard key={i} icon={reason.icon} title={reason.title} bodyText={reason.bodyText} />
                ))
            }
        </div>
    </div>
  )
}

export default WhyChoose