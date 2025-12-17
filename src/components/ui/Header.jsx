import { AlignCenter } from "lucide-react";
import React from "react";
import { useLocation } from "react-router";

const Header = ({ setShowNav }) => {
  const loction = useLocation();
  const pathName = loction.pathname;

  return (
    <div className="flex items-center justify-between md:px-[95px]  z-20 px-10 py-[15px] bg-white">
      <a href="/">
        <img src="/logo.svg" alt="logo" className="w-35 h-full" />
      </a>

      <nav className="min-[800px]:flex items-center hidden gap-5">
        <a
          href="/aboutus"
          className={`text-[12px] ${
            pathName === "/aboutus" ? "text-primaryPurple" : "text-black"
          }`}
        >
          About us
        </a>
        <a
          href="/services"
          className={`text-[12px] ${
            pathName === "/services"
              ? "text-primaryPurple font-medium"
              : "text-black"
          }`}
        >
          Our Services
        </a>
        <a
          href="/blogs"
          className={`text-[12px] ${
            pathName.includes("blogs") ? "text-primaryPurple" : "text-black"
          }`}
        >
          Blog
        </a>
        <a
          href="/careers"
          className={`text-[12px] ${
            pathName === "/careers" ? "text-primaryPurple" : "text-black"
          }`}
        >
          Careers
        </a>
        <a
          href="contact"
          className={`text-[12px] ${
            pathName === "/contact" ? "text-primaryPurple" : "text-black"
          }`}
        >
          Contact us
        </a>
        <a
          href="https://drive.google.com/drive/folders/1z9t1AipbmTa2T522B_8Ymm1o8TK5UkHC"
          className={`text-[12px] ${
            pathName === "/contact" ? "text-primaryPurple" : "text-black"
          }`}
        >
          Books
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <a href="/contact" className="cursor-pointer hover:opacity-75 transition-all duration-300 font-neue bg-primaryPurple px-6 py-3 text-white rounded-4xl font-medium">
          Book a call
        </a>

        <div className="min-[800px]:hidden" onClick={() => setShowNav(true)}>
          <AlignCenter />
        </div>
      </div>
    </div>
  );
};

export default Header;
