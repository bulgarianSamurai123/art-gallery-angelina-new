import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Testimonial from "../ui/Testimonial";

const MobileTestimonials = () => {
  return (
    <div className="block sm:hidden mt-32">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex items-center justify-center mb-12">
          <Testimonial name="- Име">
            Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas
            egestas molestie condimentum. Non posuere posuere tempor venenatis
            amet augue dolor.
          </Testimonial>
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="- Име">
            Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas
            egestas molestie condimentum. Non posuere posuere tempor venenatis
            amet augue dolor.
          </Testimonial>
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="- Име">
            Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas
            egestas molestie condimentum. Non posuere posuere tempor venenatis
            amet augue dolor.
          </Testimonial>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MobileTestimonials;
