import React from "react";

const GetToKnow = () => {
  return (
    <section className="bg-primaryPurple text-[#E9E9E9] py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className=" overflow-hidden md:w-[500px] hidden md:block md:h-[470px] rounded-[40px]">
            <img src="/gettoknowpic.jpg" className="w-[512px] h-[572px]" alt="" />
        </div>
        <div className="max-w-md flex items-start flex-col gap-2">
          <h1 className="font-neue text-white font-bold text-[36px]">
            Get to know Optic Digital
          </h1>
          <p>
            Optic Digital is a dynamic digital marketing company, that has
            successfully navigated the ever-evolving landscape for three years.
            Our journey is defined by a commitment to excellence and a proven
            track record of propelling businesses to new heights. With branches
            in the UK and Nigeria, we seamlessly blend global expertise with
            local insights to amplify your brand's impact.
          </p>
          <div>
            <p>
              Our clients describe us as a powerhouse of creative intellect,
              fueled by consumer insights and propelled by an insatiable desire
              to innovate.
            </p>

            <p>
              We are not just a digital agency; we are a force to be reckoned
              with, transforming challenges into triumphs and ideas into
              immersive digital experiences.
            </p>

            <p>
              Optic Digital - Where strategy meets pixels, and brilliance
              becomes the standard.
            </p>
          </div>

          <button className="cursor-pointer font-neue bg-white px-6 py-3 text-primaryPurple rounded-4xl font-medium">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetToKnow;
