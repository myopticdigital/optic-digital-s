import { Search } from "lucide-react";
import React from "react";

const HeroSection = ({ searchValue, setSearchValue }) => {
  return (
    <div className="bg-[url('ab.png')] relative bg-cover bg-blend-lighten bg-no-repeat mt-5 items-center  text-white flex flex-col justify-center h-[30rem]">
      <div className="flex flex-col z-10 gap-4 items-center justify-center max-w-md md:max-w-2xl">
        <h4 className="bg-[#5206C066] p-2 rounded-full text-[20px] text-center">
          Our blog
        </h4>

        <h1 className="text-center capitalize leading-[64px] text-[34px] md:text-[56px] font-neue font-bold">
         Insights that drive growth
        </h1>
        <p className="text-center">
          Explore expert perspectives, practical strategies, and the latest trends in marketing to keep your brand ahead of the curve
        </p>
      <div className="flex items-center md:w-[517px] w-[300px] gap-2 h-[50px] px-[24px] text-black bg-white rounded-[100px]">
        <Search />
        <input type="text" name="" value={searchValue} onChange={setSearchValue} className="flex-1 focus:outline-0" placeholder="Search for topics or authors" id="" />
      </div>

      </div>
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default HeroSection;
