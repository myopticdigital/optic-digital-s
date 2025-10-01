import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const testimonials = [
    {
      testimony:
        "Optic Digital transformed our online presence, significantly boosting bookings. Their strategic approach made them an invaluable partner",
      userName: "Wakanov",
    },
    {
      testimony:
        "Optic Digital played a key role in enhancing our brand's online footprint, increasing sales and engagement. A trusted ally for Drinks.ng",
      userName: "Drinks.ng",
      logo: "/drinks.png",
    },
    {
      testimony:
        "Optic Digital exceeded expectations in promoting our consultancy services. Their data-driven strategies positively impacted client acquisition",
      userName: "Tritek consulting ltd",
      logo: "/tritek.png",
    },
  ];
  return (
    <div className="bg-primaryPurple py-7 px-7 gap-4 flex flex-col items-center justify-center text-white">
      <h4 className="font-neue font-bold text-[36px]">Testimonials</h4>
      <p className="leading-[24px] text-[16px]">
        Don’t just take our word for it. Here’s what brands we’ve worked with
        have to say
      </p>

      <div className="w-full flex items-center justify-center">
        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="flex items-center"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonials.map((testimony, i) => (
            <SwiperSlide key={i} className="!w-auto px-3">
              <TestimonialCard
                key={i}
                testimony={testimony.testimony}
                logo={testimony.logo}
                userName={testimony.userName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center gap-2 text-black">
        <button
          className="p-3 rounded-full bg-white"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft />
        </button>
        <button
          className="p-3 rounded-full bg-white"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
