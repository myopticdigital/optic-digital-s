import React, { useState, useEffect } from 'react'
import Header from './ui/Header'
import { Outlet } from 'react-router'
import Footer from './ui/Footer'
import MobileMenu from './ui/MobileMenu'

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false)
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // user scrolled up
        setIsSticky(true);
      } else {
        // user scrolled down
        setIsSticky(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      <div className={`${isSticky ? "sticky top-0 z-50" : "relative"}`}>
        <Header setShowNav={setShowNav} />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileMenu isOpen={showNav} setIsOpen={setShowNav} />
    </>
  )
}

export default Layout