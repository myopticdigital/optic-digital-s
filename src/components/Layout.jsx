import React, { useState } from 'react'
import Header from './ui/Header'
import { Outlet } from 'react-router'
import Footer from './ui/Footer'
import MobileMenu from './ui/MobileMenu'

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <Header setShowNav={setShowNav} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileMenu isOpen={showNav} setIsOpen={setShowNav} />
    </>
  )
}

export default Layout