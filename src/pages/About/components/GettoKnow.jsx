import React from "react";
import InfoCard from "./InfoCard";

const GettoKnow = () => {
  const information = [
    {
      image: "/ab1.jpg",
      heading: "Get to know Optic Digital",
      text: "Optic Digital is a dynamic digital marketing company, that has successfully navigated the ever-evolving landscape for three years.\nOur journey is defined by a commitment to excellence and a proven track record of propelling businesses to new heights.\nWith branches in the UK and Nigeria, we seamlessly blend global expertise with local insights to amplify your brand's impact.",
      className: "bg-[#FDC280] text-black",
      align: "left",
    },
    {
      image: "/ab2.jpg",
      heading: "Who are we?",
      text: "Our clients describe us as a powerhouse of creative intellect, fueled by consumer insights and propelled by an insatiable desire to innovate.\nWe are not just a digital agency; we are a force to be reckoned with, transforming challenges into triumphs and ideas into immersive digital experiences.\nOptic Digital - Where strategy meets pixels, and brilliance becomes the standard.",
      className: "bg-primaryPurple text-white",
      align: "right",
    },
    {
      heading: "Our expertise and strategic approach",
      text: "With four years of experience, Optic Digital has honed its expertise in leveraging cutting-edge digital marketing strategies. Our seasoned team has consistently adapted to industry trends, ensuring clients stay ahead of the curve.\nThe crux of our success lies in our strategic approach. We analyze market trends, understand client objectives, and craft bespoke campaigns that resonate with target audiences. \nFrom SEO and social media to content marketing, we employ a holistic strategy tailored to each client’s unique needs.",
      className: "bg-[#FDC280] text-black",
      use : true,
    },
  ];
  return (
    <div className="flex md:py-10 md:gap-10 flex-col items-center justify-center">
      {information.map((info, i) => (
        <InfoCard
          key={i}
          heading={info.heading}
          text={info.text}
          imagealign={info.align}
          className={info.className}
          image={info.image}
          use={info.use}
        />
      ))}
    </div>
  );
};

export default GettoKnow;
