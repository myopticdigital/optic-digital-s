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
    <div className="bg-primaryPurple grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  place-items-start place-content-between px-12 py-12 text-white">
      <div className="ld:max-w-sm max-w-72 flex-1 flex flex-col items-start gap-4">
        <img src="/whitelogo.png" className="w-36" alt="" />
        <h5 className="font-neue font-medium text-[24px]">Sign up for our newsletter</h5>
        <p className="text-[16px] leading-[24px] font-normal">
          Stay updated with the latest marketing trends and news all delivered
          straight to your inbox
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 ">
          <div className="flex items-center px-4 py-3.5 border rounded-2xl cursor-pointer gap-2">
            <Email />
            <input type="email" placeholder="Email address" className="flex-1 placeholder:text-white focus:outline-0" />
          </div>

          <button className="px-7 py-3.5 bg-white text-primaryPurple rounded-2xl">
            Subscribe
          </button>
        </div>
      </div>

      <div className="max-w-sm flex flex-col gap-4">
        <h5 className="font-neue font-bold text-[20px]">Quick links</h5>
        <ul className="text-[#E9E9E9] space-y-5 font-normal text-[16px]">
          <li>
            <a href="#">Our services</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Blog</a>
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
          <div className="bg-white rounded-full p-3">
            <Instagram />
          </div>
          <div className="bg-white rounded-full p-3">
            <Twitter />
          </div>
          <div className="bg-white rounded-full p-3 px-4">
            <FaceBook />
          </div>
          <div className="bg-white rounded-full p-3">
            <LinkedIn />
          </div>
        </div>

        <div className="text-[#E9E9E9] flex flex-col gap-3">
          <h6>Reach out</h6>
          <div className="flex items-start gap-2">
            <Email />
            <div className="flex flex-col text-[16px]">
              <a href="#">info@myopticdigital.com</a>
              <p>myopticdigital@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Phone />
            <div className="flex flex-col text-[16px]">
              <a href="#">+447780055163</a>
              <p>+2349164588817</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPinIcon />
            <p>43 Powell House, Enfield, London.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
