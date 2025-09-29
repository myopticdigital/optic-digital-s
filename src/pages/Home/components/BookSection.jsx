import React from "react";


const BookSection = () => {
  return (
    <div className="bg-[#FEEDD9] flex items-center justify-center gap-20 p-7">
      <div className="max-w-[30rem] p-2 flex items-start gap-3 flex-col">
        <h4 className="font-neue leading-[44px] font-bold text-[36px]">
          Ready to Grow Your Brand and Scale Exponentially?
        </h4>
        <p className="leading-[24px]">
          Let’s turn bold ideas into measurable growth. Partner with us and take
          your brand further
        </p>

        <button className="cursor-pointer font-neue bg-primaryPurple px-6 py-3 text-white rounded-4xl font-medium">
          Book a call
        </button>
      </div>

      <div className="relative flex items-center justify-center">
        <img src="/main.png" className="w-36 absolute -left-2 top-28 z-10" alt="" />
        <div className="h-[30rem] overflow-hidden z-20">
            <img src="/officer.png" className="h-[35rem] z-20" /> 
        </div>
        <div className="absolute bottom-0 bg-white h-80 rounded-tr-[3rem] rounded-bl-[3rem] w-80"></div>
      </div>
    </div>
  );
};

export default BookSection;
