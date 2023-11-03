import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Testimonial from "../../ui/Testimonial";

const Testimonials = () => {
  return (
    <div className="mt-32 flex gap-10 items-center justify-center">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide className="">
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

export default Testimonials;

{
  /* <Testimonial name="- Име" className="hidden lg:block">
        Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas egestas
        molestie condimentum. Non posuere posuere tempor venenatis amet augue
        dolor.
      </Testimonial>
      <Testimonial name="- Име">
        Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas egestas
        molestie condimentum. Non posuere posuere tempor venenatis amet augue
        dolor.
      </Testimonial>
      <Testimonial name="- Име" className="hidden md:block">
        Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas egestas
        molestie condimentum. Non posuere posuere tempor venenatis amet augue
        dolor.
      </Testimonial>  */
}
