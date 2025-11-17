import React from "react";
import StaffCard from "./StaffCard";

const Workers = () => {
  return (
    <div className="max-w-8xl mx-auto flex items-center py-7 px-4 justify-center flex-col gap-3">
      <h1 className="font-neue font-bold text-center text-[22px] md:text-[30px]">
        Our Team
      </h1>
      <p className="leading-base text-center max-w-xl">
        Our team brings together expertise in strategy, design, and marketing to
        deliver solutions that move brands forward with precision and impact
      </p>
      
   <div className="flex flex-wrap justify-center items-center gap-7">
  {/* CEO Card */}
  <div className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
    <StaffCard
      image="/worker1.jpg"
      name="Abraham Segun"
      office="Chief executive officer(CEO)"
      imageScale="scale-170"
      imagePosition="object-[center_0%]"
    />
  </div>

  {/* COO Card */}
  <div className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
    <StaffCard
      image="/worker2.jpg"
      name="Obafemi Abel"
      office="Chief operations officer(COO)"
      imageScale="scale-100"
      imagePosition="object-top"
    />
  </div>

  {/* Creative Lead Card */}
  <div className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
    <StaffCard
      image="/worker3.jpg"
      name="Olaniyan John"
      office="Creative Lead"
      imageScale="scale-100"
      imagePosition="object-top"
    />
  </div>
</div>
    </div>
  );
};

export default Workers;