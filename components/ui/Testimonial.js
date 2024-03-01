import Image from "next/image";
import React from "react";

const Testimonial = (props) => {
  return (
    <div
      className={`text-center flex flex-col items-center gap-6 ${props.className}`}
    >
      <Image src="/assets/quote.svg" alt="Quote Icon" width={50} height={50} />
      <p className="text-gray-490 text-base sm:text-xl font-light italic">
        {props.children}
      </p>
      <span className="text-gray-490">{props.name}</span>
    </div>
  );
};

export default Testimonial;
