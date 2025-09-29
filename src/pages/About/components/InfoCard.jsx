import React from "react";

const InfoCard = ({ image, text, heading, imagealign, className, use }) => {
  return (
    <div
      className={`flex items-center gap-10 p-7 rounded-xl w-[1200px] justify-between ${className}`}
    >
      {imagealign === "left" && (
        <div>
          <img src={image} className="w-[549px] h-[355px] rounded-xl" alt="" />
        </div>
      )}

      {use && (
        <div className="relative w-[549px] h-[355px]">
          <div className=" rounded-xl relative top-[64px] left-[292px]">
            <div
              className="flex rounded-xl p-3 w-[201px] right-0 flex-col bg-primaryPurple text-white"
              style={{clipPath : "polygon(0 0, 63% 0, 100% 99%, 0% 100%);"}}
            >
              <h1 className="font-neue font-bold">4+</h1>
              <p>years of experience</p>
            </div>
          </div>
          <img
            src="/ab3.jpg"
            className="w-[315px] h-[250px] rounded-xl"
            alt=""
          />
          <img
            src="/ab4.jpg"
            className="w-[315px] h-[193px] absolute top-[162px] right-0 rounded-xl"
            alt=""
          />
        </div>
      )}

      <div className="flex flex-col items-start gap-4">
        <h3 className="font-neue font-bold text-[36px] leading-[44px]">
          {heading}
        </h3>
        <p className="leading-[24px] max-w-[546px]">{text}</p>
      </div>

      {imagealign === "right" && (
        <div>
          <img src={image} className="w-[549px] h-[355px] rounded-xl" alt="" />
        </div>
      )}
    </div>
  );
};

export default InfoCard;
