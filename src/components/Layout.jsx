import React, { useState, useEffect } from "react";
import Header from "./ui/Header";
import { Outlet } from "react-router";
import Footer from "./ui/Footer";
import MobileMenu from "./ui/MobileMenu";

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
      <div
        className={`fixed -top-2 left-0 w-full z-50 transform transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header setShowNav={setShowNav} />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileMenu isOpen={showNav} setIsOpen={setShowNav} />
    </>
  );
};

export default Layout;
