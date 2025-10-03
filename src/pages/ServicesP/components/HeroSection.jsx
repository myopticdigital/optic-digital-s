import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[url('service1.jpg')] relative bg-cover bg-blend-lighten bg-no-repeat items-center  text-white flex flex-col justify-center h-[30rem]">
      <div className="flex flex-col z-10 items-center justify-center max-w-2xl">
        <h4 className="bg-[#5206C066] p-2 rounded-full text-[20px] text-center">
          Our Services
        </h4>

        <h1 className="text-center leading-[64px] text-[34px] md:text-[56px] font-neue font-bold">
         Tailored solutions designed to elevate your business
        </h1>
        <p className="text-center">
          We deliver innovative services across strategy, design, and
          technology—helping you achieve impactful results and long-lasting
          growth.
        </p>
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default HeroSection;
