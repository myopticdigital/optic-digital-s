import React from "react";
import {
  Email,
  FaceBook,
  Instagram,
  LinkedIn,
  MapPinIcon,
  Phone,
  Twitter,
} from "../../assets/svgs/svg";

const Footer = () => {
  return (
    <div className="bg-primaryPurple px-3 md:px-12 py-12 text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 place-items-start">
        {/* Newsletter Section */}
        <div className="max-w-xl md:col-span-2 flex flex-col items-start gap-3">
          <img src="/whitelogo.png" className="w-36" alt="Optic Digital Logo" />
          <h5 className="font-neue font-medium text-[18px] leading-[40px]">
            Sign up for our newsletter
          </h5>
          <p className="max-w-[300px] text-[12px] leading-base font-normal">
            Stay updated with the latest marketing trends and news all delivered
            straight to your inbox
          </p>
          <div className="flex w-full max-w-[500px] flex-row items-center gap-2">
            <div className="flex flex-1 items-center px-4 py-3.5 border border-white/30 rounded-2xl cursor-pointer gap-2 bg-transparent">
              <Email />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 w-full bg-transparent placeholder:text-white/70 text-white focus:outline-0"
              />
            </div>
            <button className="px-5 md:px-7 py-3.5 bg-white text-primaryPurple rounded-2xl font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h5 className="font-neue font-bold text-[16px]">Quick links</h5>
          <ul className="text-[#E9E9E9] space-y-2 font-normal text-[12px]">
            <li className="hover:text-white transition-colors">
              <a href="/services">Our services</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="/aboutus">About us</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="/contact">Contact us</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="/blogs">Blog</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="/careers">Careers</a>
            </li>
            <li className="hover:text-white transition-colors">
              <a
                href="https://drive.google.com/drive/folders/1z9t1AipbmTa2T522B_8Ymm1o8TK5UkHC"
                target="_blank"
                rel="noopener noreferrer"
              >
                Books
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col gap-4">
          <h5 className="font-neue font-bold text-[16px]">Our services</h5>
          <ul className="text-[#E9E9E9] space-y-2 font-normal text-[12px]">
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Management</li>
            <li>Pay-Per-Click (PPC) Advertising</li>
            <li>Content Marketing</li>
            <li>Email Marketing</li>
            <li>Analytics and Reporting</li>
          </ul>
        </div>

        {/* Socials & Contact */}
        <div className="flex flex-col gap-4">
          <h5 className="font-neue font-bold text-[16px]">Socials</h5>
          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/optic_digitals"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/opticdigitalltd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 px-4 hover:bg-gray-100 transition-colors"
            >
              <FaceBook />
            </a>
            <a
              href="https://www.linkedin.com/company/optic-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
            >
              <LinkedIn />
            </a>
          </div>

          <div className="text-[#E9E9E9] flex flex-col gap-3">
            <h6 className="font-semibold">Reach out</h6>
            <div className="flex items-start gap-2">
              <Email className="flex-shrink-0 mt-1" />
              <div className="flex flex-col text-[12px] gap-1">
                <a
                  href="mailto:info@myopticdigital.com"
                  className="hover:text-white transition-colors"
                >
                  info@myopticdigital.com
                </a>
                <a
                  href="mailto:myopticdigital@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  myopticdigital@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="flex-shrink-0 mt-1" />
              <div className="flex flex-col text-[12px] gap-1">
                <a
                  href="tel:+447780055163"
                  className="hover:text-white transition-colors"
                >
                  +44 7780 055163
                </a>
                <a
                  href="tel:+2349164588817"
                  className="hover:text-white transition-colors"
                >
                  +234 916 458 8817
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPinIcon className="flex-shrink-0 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=43+Powell+House,+Enfield,+London"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] hover:text-white transition-colors"
              >
                45 Carterhatch Road, Enfield.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
