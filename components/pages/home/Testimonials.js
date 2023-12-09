import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Testimonial from "../../ui/Testimonial";
import MobileTestimonials from "../../testimonials/MobileTestimonials";

const Testimonials = () => {
  return (
    <Fragment>
      <div className="mt-32 hidden sm:flex gap-10 items-center justify-center mb-20">
          <Testimonial name="- Име">
            Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas
            egestas molestie condimentum. Non posuere posuere tempor venenatis
            amet augue dolor.
          </Testimonial>
          <Testimonial name="- Име">
            Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas
            egestas molestie condimentum. Non posuere posuere tempor venenatis
            amet augue dolor.
          </Testimonial>
          <Testimonial name="- Име">
            Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas
            egestas molestie condimentum. Non posuere posuere tempor venenatis
            amet augue dolor.
          </Testimonial>
      </div>

      <MobileTestimonials />
    </Fragment>
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
