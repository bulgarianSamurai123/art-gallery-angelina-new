import React from "react";

import Testimonial from "../../ui/Testimonial";

const Testimonials = () => {
  return (
    <div className="mt-32 flex flex-row gap-10">
      <Testimonial name="- Име" className="invisible lg:visible">
        Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas egestas
        molestie condimentum. Non posuere posuere tempor venenatis amet augue
        dolor.
      </Testimonial>
      <Testimonial name="- Име">
        Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas egestas
        molestie condimentum. Non posuere posuere tempor venenatis amet augue
        dolor.
      </Testimonial>
      <Testimonial name="- Име" className="invisible md:visible">
        Lorem ipsum dolor sit amet consectetur. Congue mi cras egestas egestas
        molestie condimentum. Non posuere posuere tempor venenatis amet augue
        dolor.
      </Testimonial>
    </div>
  );
};

export default Testimonials;
