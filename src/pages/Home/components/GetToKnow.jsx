import React from "react";

const GetToKnow = () => {
  return (
    <section className="bg-primaryPurple text-[#E9E9E9] py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-5">
        {/* Image - controlled height */}
        <div className="overflow-hidden w-full lg:w-auto lg:max-w-[400px] lg:px-0">
          <img
            src="/gettoknowpic.jpg"
            className="w-full h-[400px] lg:h-[500px] object-cover object-[center_32%] rounded-[40px]"
            alt="Optic Digital"
          />
        </div>

        {/* Text */}
        <div className="max-w-[500px] flex items-start flex-col gap-2">
          <h1 className="font-neue text-white font-bold text-[22px] md:text-[30px]">
            Get to know Optic Digital
          </h1>
          <p>
            Optic Digital is a dynamic digital marketing company, that has
            successfully navigated the ever-evolving landscape for three years.
            Our journey is defined by a commitment to excellence and a proven
            track record of propelling businesses to new heights. With branches
            in the UK and Nigeria, we seamlessly blend global expertise with
            local insights to amplify your brand&apos;s impact.
          </p>
          <div>
            <p className="mt-3">
              Our clients describe us as a powerhouse of creative intellect,
              fueled by consumer insights and propelled by an insatiable desire
              to innovate.
            </p>

            <p className="mt-3">
              We are not just a digital agency; we are a force to be reckoned
              with, transforming challenges into triumphs and ideas into
              immersive digital experiences.
            </p>

            <p className="mt-3">
              Optic Digital - Where strategy meets pixels, and brilliance
              becomes the standard.
            </p>
          </div>

          <a href="/contact" className="cursor-pointer font-neue bg-white px-6 py-3 text-primaryPurple rounded-4xl font-medium">
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetToKnow;
