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
    <div className="bg-primaryPurple grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3  place-items-start place-content-between px-3 md:px-12 py-12 text-white">
      <div className="ld:max-w-sm max-w-xl col-span-2 flex flex-col items-start gap-4">
        <img src="/whitelogo.png" className="w-36" alt="" />
        <h5 className="font-neue font-medium text-[24px] leading-[40px]">
          Sign up for our newsletter
        </h5>
        <p className="text-[16px] leading-[24px] font-normal">
          Stay updated with the latest marketing trends and news all delivered
          straight to your inbox
        </p>
        <div className="flex w-[350px] md:w-[500px] overflow-hidden  flex-row items-center gap-2 ">
          <div className="flex w-1/2  items-center px-4 py-3.5 border rounded-2xl cursor-pointer gap-2">
            <Email />
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 w-full placeholder:text-white focus:outline-0"
            />
          </div>

          <button className="px-5 md:px-7 py-3.5 bg-white text-primaryPurple rounded-2xl">
            Subscribe
          </button>
        </div>
      </div>

      <div className="max-w-sm flex flex-col gap-4">
        <h5 className="font-neue font-bold text-[20px]">Quick links</h5>
        <ul className="text-[#E9E9E9] space-y-5 font-normal text-[16px]">
          <li>
            <a href="/services">Our services</a>
          </li>
          <li>
            <a href="/aboutus">About us</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
          <li>
            <a href="/blogs">Blog</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
        </ul>
      </div>
      <div className="max-w-40 flex items-start flex-col gap-4">
        <h5 className="font-neue font-bold text-[20px]">Our services</h5>
        <ul className="text-[#E9E9E9] space-y-2 font-normal text-[16px]">
          <li>Search Engine Optimization (SEO)</li>
          <li>Social Media Management</li>
          <li>Pay-Per-Click (PPC) Advertising</li>
          <li>Content Marketing</li>
          <li>Email Marketing</li>
          <li>Analytics and Reporting</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h5 className="font-neue font-bold text-[20px]">Socials</h5>
        <div className="flex items-center gap-2">
          <a
            href="https://instagram.com/optic_digitals"
            target="_blank"
            className="bg-white rounded-full p-3"
          >
            <Instagram />
          </a>
          <div className="bg-white rounded-full p-3">
            <Twitter />
          </div>
          <a
            href="https://www.facebook.com/opticdigitalltd"
            target="_blank"
            className="bg-white rounded-full p-3 px-4"
          >
            <FaceBook />
          </a>
          <a
            href="https://www.linkedin.com/company/optic-digital"
            target="_blank"
            className="bg-white rounded-full p-3"
          >
            <LinkedIn />
          </a>
        </div>

        <div className="text-[#E9E9E9] flex flex-col gap-3">
          <h6>Reach out</h6>
          <div className="flex items-start gap-2">
            <Email />
            <div className="flex flex-col text-[16px]">
              <a href="mailto:info@myopticdigital.com">
                info@myopticdigital.com
              </a>
              <a href="mailto:myopticdigital@gmail.com">
                myopticdigital@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Phone />
            <div className="flex flex-col text-[16px]">
              <a href="tel+447780055163">+447780055163</a>
              <a href="tel:+2349164588817">+2349164588817</a>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPinIcon />
            <a
              href="https://www.google.com/maps/search/?api=1&query=43+Powell+House,+Enfield,+London"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>43 Powell House, Enfield, London.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
