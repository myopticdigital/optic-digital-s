import React from "react";

const InfoCard = ({ image, text, heading, imagealign, className, use }) => {
  return (
    <div
      className={`flex md:flex-row flex-col items-center gap-10 p-7 md:mx-10  md:rounded-xl md:w-[1000px] justify-between ${className}`}
    >
      {imagealign === "left" && (
        <div className="md:w-[500px] overflow-hidden object-cover">
          <img src={image} className="rounded-xl " alt="" />
        </div>
      )}

      {use && (
        <div className="relative md:w-[549px] md:h-[355px]">
          <div className="md:flex rounded-xl absolute top-10 hidden p-3 w-[201px] right-5 flex-col bg-primaryPurple text-white [clip-path:polygon(0_0,63%_0,100%_99%,0%_100%)]">
            <h1 className="font-neue font-bold">4+</h1>
            <p>years of experience</p>
          </div>
          <img
            src="/ab3.jpg"
            className="md:w-[315px]  md:h-[250px] rounded-xl object-cover"
            alt=""
          />
          <img
            src="/ab4.jpg"
            className="md:w-[315px] w-[225px] h-[150px] md:h-[193px] object-cover absolute md:inline top-0 hidden md:top-[162px] right-0 rounded-xl"
            alt=""
          />
        </div>
      )}

      <div className="flex flex-col items-start gap-4">
        <h3 className="font-neue font-bold text-[22px] md:text-[30px]">
          {heading}
        </h3>
        <p className="leading-base max-w-[546px] leading-relaxed">{text}</p>
      </div>

      {imagealign === "right" && (
        <div className="md:w-[500px] overflow-hidden object-cover">
          <img src={image} className=" rounded-xl" alt="" />
        </div>
      )}
    </div>
  );
};

export default InfoCard;
