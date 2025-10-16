import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  return (
    <div className="relative bg-[url('./assets/homeherobg.jpg')] flex flex-col items-center gap-4 justify-center bg-cover bg-no-repeat w-full h-[100vh] bg-center">

      <motion.div
        className="flex flex-col items-center gap-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      <motion.h1 className="font-neue font-bold text-white text-center max-w-3xl text-[30px] md:text-[45px] z-50 px-[10px]" variants={itemVariants}>
        We Grow Brands That People Can’t Ignore
      </motion.h1>
      
      <motion.p className="text-[16px] text-white text-center max-w-md z-50" variants={itemVariants}>
         Strategy, design, and campaigns built to make your business stand out,
        connect, and convert.
      </motion.p>
      <p >
       
      </p>
      <motion.div className="flex items-center gap-4 z-10" variants={itemVariants}>
        <button className="cursor-pointer font-neue bg-primaryPurple px-6 py-3 hover:opacity-75 transition duration-300 text-white rounded-4xl font-medium">
          Book a call
        </button>
        <button className="cursor-pointer font-neue border hover:bg-secondaryColor/80 transition duration-300 border-secondaryColor px-6 py-3 text-white rounded-4xl font-medium">
          <a href="/services">Explore our services</a>
        </button>
      </motion.div>

      </motion.div>

      <div className="absolute inset-0 bg-black/50 -z-0"></div>
    </div>
  );
};

export default HeroSection;
