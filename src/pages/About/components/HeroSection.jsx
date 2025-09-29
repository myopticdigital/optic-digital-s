import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[url('ab.png')] relative bg-cover bg-blend-lighten bg-no-repeat items-center  text-white flex flex-col justify-center h-[30rem]">
      <div className="flex flex-col z-50 items-center justify-center max-w-2xl">
        <h4 className="bg-[#5206C066] p-2 rounded-full text-[20px] text-center">
          About us
        </h4>

        <h1 className="text-center leading-[64px] text-[56px] font-neue font-bold">
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
