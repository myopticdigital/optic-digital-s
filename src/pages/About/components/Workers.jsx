import React from "react";
import StaffCard from "./StaffCard";

const Workers = () => {
  const staffs = [
    {
      image: "/worker1.jpg",
      name: "Abraham Segun",
      office: "Chief executive officer(CEO)",
    },
    {
      image: "/worker2.jpg",
      name: "Obafemi Abel",
      office: "Chief operations officer(COO)",
    },
    {
      image: "/worker3.jpg",
      name: "Olaniyan John",
      office: "Creative Lead",
    },
  ];
  return (
    <div className="flex items-center py-7 px-4 justify-center flex-col gap-3">
      <h1 className="font-neue font-bold text-center text-[22px] md:text-[30px]">
        Our service
      </h1>
      <p className="leading-base text-center max-w-xl">
        Our team brings together expertise in strategy, design, and marketing to
        deliver solutions that move brands forward with precision and impact
      </p>
      <div className="flex flex-wrap justify-center items-center gap-7">
        {staffs.map((staff, i) => (
          <div key={i}>
            <StaffCard
              name={staff.name}
              image={staff.image}
              office={staff.office}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workers;
