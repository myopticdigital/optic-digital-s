import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  
  const testimonials = [
    {
      testimony:
        "Optic Digital transformed our online presence, significantly boosting bookings. Their strategic approach made them an invaluable partner",
      userName: "Wakanov",
      logo: "/Wakanov.png",
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
    {
      testimony:
        "Optic Digital's innovative campaigns expanded our consultancy reach. Their commitment to results is commendable.",
      userName: "MBC Konsults",
      logo: "/logo3.png",
    },
    {
      testimony:
        "Optic Digital's tailored approach greatly enhanced our educational platform's visibility, increasing user engagement.",
      userName: "Hesed Learning",
      logo: "/logo4.png",
    },
    {
      testimony:
        "Optic Digital brought creativity and precision to our online presence, positioning us as a standout brand.",
      userName: "Goggle and Giggle",
      logo: "/google.png",
    },
    {
      testimony:
        "Optic Digital's strategies added a sweet touch, contributing to increased brand awareness for Krispy Kreme.",
      userName: "Krispy Kreme",
      logo: "/logo5.png",
    },
    {
      testimony:
        "Optic Digital's prowess helped us reach a wider audience, driving more pizza lovers to our doorsteps.",
      userName: "Dodo Pizza",
      logo: "/logo6.png",
    },
    {
      testimony:
        "Optic Digital played a vital role in promoting financial education, significantly increasing online student enrollment.",
      userName: "Amey Finance Academy",
      logo: "/amy.png",
    },
    {
      testimony:
        "Optic Digital's tech-savvy marketing approach positioned us as an industry leader, boosting our online presence.",
      userName: "Syphonia Tech",
      logo: "/round.png",
    },
    {
      testimony:
        "Optic Digital's efforts helped us reach aspiring entrepreneurs globally, making a meaningful impact.",
      userName: "London Academy For Business and Entrepreneurs",
      logo: "/logo7.png",
    },
    {
      testimony:
        "Optic Digital's expertise in financial sector marketing effectively communicated our brand message, increasing trust and engagement.",
      userName: "All Things Finance",
      logo: "/things.png",
    },
  ];

  return (
    <div className="bg-primaryPurple py-12 md:py-20 w-full overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 px-6">
        <h4 className="font-neue font-bold text-2xl md:text-[32px] lg:text-[42px] mb-4 text-white">
          Testimonials
        </h4>
        <p className="leading-relaxed text-base md:text-lg text-white/90">
          Don't just take our word for it. Here's what brands we've worked with have to say
        </p>
      </div>

      {/* Swiper Container - CENTERED */}
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            centeredSlides={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { 
                slidesPerView: 1, 
                spaceBetween: 16,
                centeredSlides: true
              },
              640: { 
                slidesPerView: 1, 
                spaceBetween: 20,
                centeredSlides: true
              },
              768: { 
                slidesPerView: 2, 
                spaceBetween: 20,
                centeredSlides: false
              },
              1024: { 
                slidesPerView: 2, 
                spaceBetween: 24,
                centeredSlides: false
              },
              1280: { 
                slidesPerView: 3, 
                spaceBetween: 24,
                centeredSlides: false
              },
            }}
            className="!pb-12"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {testimonials.map((testimony, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <TestimonialCard
                  testimony={testimony.testimony}
                  logo={testimony.logo}
                  userName={testimony.userName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8 px-6">
        <button
          className="p-3 md:p-4 rounded-full bg-white hover:bg-gray-100 text-black transition-all duration-300 hover:scale-110 shadow-lg active:scale-95"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          className="p-3 md:p-4 rounded-full bg-white hover:bg-gray-100 text-black transition-all duration-300 hover:scale-110 shadow-lg active:scale-95"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;