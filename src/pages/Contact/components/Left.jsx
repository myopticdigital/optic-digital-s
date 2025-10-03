import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import {
  FacebookWhite,
  Instagramwhite,
  TwitterWhite,
} from "../../../assets/svgs/svg";

const Left = () => {
  return (
    <div className="bg-gradient-to-br from-primaryPurple to-primaryPurple rounded-3xl p-10 text-white flex flex-col justify-between max-h-[600px] shadow-2xl">
      <div>
        <h2 className="text-4xl font-bold mb-3">Contact information</h2>
        <p className="text-purple-200 text-lg">Want to make inquires?</p>
      </div>

      <div className="space-y-6 my-8">
        <a
          href="tel:+2349164588817"
          className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 group"
        >
          <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-lg">+2349164588817</span>
        </a>

        <a
          href="mailto:myopticdigital@gmail.com"
          className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 group"
        >
          <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <span className="text-lg">myopticdigital@gmail.com</span>
        </a>

        <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300 group">
          <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-lg">43 Powell House, Enfield, London</span>
        </div>
      </div>

      <div className="flex items-center gap-5 pt-6 border-t border-white/20">
        <a
          href="https://www.facebook.com/opticdigitalltd"
          target="_blank"
          className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
          aria-label="Facebook"
        >
          <FacebookWhite />
        </a>
        <a
          href="https://instagram.com/optic_digitals"
          target="_blank"
          className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
          aria-label="Instagram"
        >
          <Instagramwhite />
        </a>
        <a
          href="#"
          className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
          aria-label="Twitter"
        >
          <TwitterWhite />
        </a>
      </div>
    </div>
  );
};

export default Left;
