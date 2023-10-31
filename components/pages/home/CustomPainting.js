import React from "react";
import { useRouter } from "next/router";

import Button from "../ui/Button";

const CustomPainting = () => {
  const router = useRouter();

  return (
    <div className="flex md:flex-row flex-col gap-10 md:gap-24">
      <div className="flex flex-col justify-center md:order-first order-last">
        <h1 className="pb-5 text-xl md:text-3xl font-normal">
          Custom Paintings
        </h1>
        <p className="text-base md:text-2xl font-light leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Proin pellentesque at
          pellentesque arcu nisi nec fermentum vel risus. Cursus maecenas vel eu
          turpis commodo ante. Risus maecenas urna aliquet egestas nisl
          dignissim morbi sit ut. Euismod tristique erat pellentesque iaculis
          diam vitae eu. Hendrerit ullamcorper tristique ipsum.
        </p>
        <div>
          <Button onClick={() => router.push("/contact-us")}>Contact us</Button>
        </div>
      </div>
      <img
        className="w-full lg:w-2/3 lg:h-2/3"
        src="/assets/custom-painting.png"
        alt="Custom Painting Image"
      />
    </div>
  );
};

export default CustomPainting;
