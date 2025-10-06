import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className='relative h-[35rem] bg-[url("/careerbg.jpg")] mt-5 bg-cover bg-center flex items-center justify-center'>
     
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>

     
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
        >
          We bring a wealth of experience from diverse backgrounds
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto"
        >
          Our philosophy is simple: hire great people, give them the resources 
          and support they need, and watch them do their best work.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
            Join Our Team <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>

     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
        className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 blur-2xl opacity-30"
      />
    </div>
  );
};

export default HeroSection;
