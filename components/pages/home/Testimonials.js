import React, { Fragment } from "react";

import "swiper/css";
import "swiper/css/pagination";

import Testimonial from "../../ui/Testimonial";
import MobileTestimonials from "../../testimonials/MobileTestimonials";

const Testimonials = ({ translation }) => {
  return (
    <Fragment>
      <div className="mt-32 hidden sm:flex gap-10 items-center justify-center">
        <Testimonial
          name={translation("home.testimonials.testimonial-01.name")}
        >
          {translation("home.testimonials.testimonial-01.text")}
        </Testimonial>
        <Testimonial
          name={translation("home.testimonials.testimonial-02.name")}
        >
          {translation("home.testimonials.testimonial-02.text")}
        </Testimonial>
        <Testimonial
          name={translation("home.testimonials.testimonial-03.name")}
        >
          {translation("home.testimonials.testimonial-03.text")}
        </Testimonial>
      </div>

      <MobileTestimonials />
    </Fragment>
  );
};

export default Testimonials;
