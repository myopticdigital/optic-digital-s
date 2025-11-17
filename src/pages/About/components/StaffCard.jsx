import React from "react";
import { LinkedInB } from "../../../assets/svgs/svg";

const StaffCard = ({ 
  image, 
  office, 
  name, 
  imagePosition = "object-top"
}) => {
  return (
    <div className="w-full min-w-[300px] md:max-w-[300px] overflow-hidden relative rounded-tr-[100px] rounded-2xl">
      <img
        src={image}
        alt={name}
        width={500}
        className={`h-[350px] md:h-[400px] w-full transition-all ease-in-out duration-300 object-cover ${imagePosition}`}
      />
      <div className="flex items-center justify-between absolute p-3 bottom-4 right-3 left-3 bg-white rounded-xl">
        <div className="flex items-start gap-2 flex-col">
          <h3 className="capitalize font-neue font-medium text-[16px] leading-[32px]">
            {name}
          </h3>
          <p className="leading-base text-sm">{office}</p>
        </div>

        <LinkedInB />
      </div>
    </div>
  );
};

export default StaffCard;