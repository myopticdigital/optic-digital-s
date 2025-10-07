import React from "react";
import { LinkedInB } from "../../../assets/svgs/svg";

const StaffCard = ({ image, office, name }) => {
  return (
    <div className="md:w-[397px] w-[300px] h-[360px] md:h-[442px] overflow-hidden relative rounded-tr-[100px] rounded-2xl">
      <img
        src={image}
        alt="Abraham Segun"
        width={500}
        height={500}
        className="h-full w-2xl hover:scale-110 transition-all ease-in-out duration-300 object-cover object-top"
      />
      <div className="flex items-center justify-between absolute p-3 bottom-4 right-3 left-3 bg-white rounded-xl">
        <div className="flex items-start gap-2 flex-col">
          <h3 className="capitalize font-neue font-medium text-[24px] leading-[32px]">
            {name}
          </h3>
          <p className="leading-[24px]">{office}</p>
        </div>

        <LinkedInB />
      </div>
    </div>
  );
};

export default StaffCard;
