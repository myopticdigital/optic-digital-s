import React from 'react'
import Header from './ui/Header'
import { Outlet } from 'react-router'
import Footer from './ui/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout