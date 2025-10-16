import React from "react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

const TrustedBy = () => {
  const images = [
    "/logo1.png",
    "public/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
  ];
  return (
    <div className="max-w-[1200px] overflow-hidden m-auto flex flex-col gap-3  pb-24 px-5">
      <h1 className="font-neue text-center font-bold text-[22px] md:text-[30px] mb-10">
        Trusted by
      </h1>
      {/* Slider for company logos */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="flex items-center justify-between"
        >
          {images.map((logo, i) => (
            <SwiperSlide key={i}>
              <img src={logo} alt="logo" className="h-12 object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedBy;
