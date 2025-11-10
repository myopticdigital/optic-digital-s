import React from "react";
import { LinkedInB } from "../../../assets/svgs/svg";

const StaffCard = ({ 
  image, 
  office, 
  name, 
  imageScale = "scale-100",
  imagePosition = "object-top"
}) => {
  // Build className - mobile always 100, desktop uses custom scale
  const scaleClasses = 
    imageScale === 'scale-90' ? 'scale-100 min-[700px]:scale-90' :
    imageScale === 'scale-95' ? 'scale-100 min-[700px]:scale-95' :
    imageScale === 'scale-100' ? 'scale-100 min-[700px]:scale-100' :
    imageScale === 'scale-105' ? 'scale-100 min-[700px]:scale-105' :
    imageScale === 'scale-110' ? 'scale-100 min-[700px]:scale-110' :
    imageScale === 'scale-115' ? 'scale-100 min-[700px]:scale-[1.15]' :
    imageScale === 'scale-125' ? 'scale-100 min-[700px]:scale-125' :
    imageScale === 'scale-[1.35]' ? 'scale-100 min-[700px]:scale-[1.35]' :
    imageScale === 'scale-150' ? 'scale-120 min-[700px]:scale-150' :
    'scale-100 min-[700px]:scale-100'; // default to 100

  return (
    <div className="md:w-[397px] w-[300px] h-[360px] md:h-[442px] overflow-hidden relative rounded-tr-[100px] rounded-2xl">
      <img
        src={image}
        alt={name}
        width={500}
        height={500}
        className={`h-[500px] w-2xl transition-all ease-in-out duration-300 object-cover 
          ${imagePosition} 
          ${scaleClasses}`}
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