import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import Blogs from './components/Blogs'

const Blog = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <HeroSection searchValue={searchValue} setSearchValue={(e) => setSearchValue(e.target.value)} />
      <Blogs searchValue={searchValue}/>
    </div>
  )
}

export default Blog