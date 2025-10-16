import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col gap-3 h-[20rem] items-center py-7 justify-center">
      <h1 className="font-neue font-medium text-[22px] md:text-[30px]">
        We'll love to here from you
      </h1>
      <p>Have questions? you can book a free call with us</p>
      <button className="cursor-pointer hover:opacity-75 transition-all duration-300 font-neue bg-primaryPurple px-6 py-3 text-white rounded-4xl font-medium">
        Book a call
      </button>
    </div>
  );
};

export default CallToAction;
