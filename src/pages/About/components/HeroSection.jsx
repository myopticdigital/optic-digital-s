import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[url('/ab.png')] relative bg-cover bg-blend-lighten bg-no-repeat items-center mt-5  text-white flex flex-col justify-center h-[38rem]">
      <div className="flex flex-col z-10 items-center justify-center max-w-md md:max-w-[470px] px-2">
        <h4 className="bg-[#5206C066] p-2 px-4 rounded-full text-[16px] text-center">
          About us
        </h4>

        <h1 className="text-center leading-base text-[25px] md:text-[40px] font-neue font-bold">
          Discover our journey and what drives us
        </h1>
        <p className="text-center">
          a powerhouse of creative intellect, fueled by consumer insights and
          propelled by an insatiable desire to innovate
        </p>
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default HeroSection;
