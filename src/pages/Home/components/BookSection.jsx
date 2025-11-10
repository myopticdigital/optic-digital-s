import { motion } from "framer-motion";
import React from "react";

const BookSection = () => {
  return (
    <div className="bg-[#FEEDD9] flex flex-col-reverse md:flex-row items-center justify-center gap-20 p-7">
      <div className="max-w-[30rem] p-2 flex items-start gap-3 flex-col">
        <h4 className="font-neue leading-base font-bold text-[22px] md:text-[30px]">
          Ready to Grow Your Brand and Scale Exponentially?
        </h4>
        <p className="">
          Let’s turn bold ideas into measurable growth. Partner with us and take
          your brand further
        </p>

        <button className="cursor-pointer hover:opacity-75 transition duration-200 font-neue bg-primaryPurple px-6 py-3 text-white rounded-4xl font-medium">
          Book a call
        </button>
      </div>

      <div className="w-full relative flex items-center justify-center">
        <motion.img
          src="/main.png"
          className="w-36 absolute -left-2 top-28 z-10 object-contain"
          alt=""
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          animate={{
            y: [0, -15, 0],
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        />

        {/* Main officer image with slide up */}
        <motion.div
          className="h-[30rem] overflow-hidden z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.img
            src="/officer.png"
            className="h-[35rem] z-20 object-cover "
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-0 bg-white h-80 rounded-tr-[3rem] rounded-bl-[3rem] w-80"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default BookSection;
