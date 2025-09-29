import React from 'react'
import HeroSection from './components/HeroSection'
import GetToKnow from './components/GetToKnow'
import OurServices from './components/OurServices'
import TrustedBy from './components/TrustedBy'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import BookSection from './components/BookSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <GetToKnow />
      <OurServices />
      <TrustedBy />
      <WhyChoose />
      <Testimonials />
      <BookSection />
    </div>
  )
}

export default Home