import Image from "next/image";
import React from "react";

const ThreeImages = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col items-center justify-center sm:flex-row mt-20 xl:mt-0 mb-40 h-1/3 w-full xsm:w-2/3 sm:w-1/3">
        <Image
          src="/assets/webp/summer_1.webp"
          alt="Summer 1"
          sizes="100vw"
          width={100}
          height={100}
          className="h-full w-full"
        />
        <Image
          src="/assets/webp/brochure_3-min.webp"
          alt="Brochure 3"
          sizes="100vw"
          width={100}
          height={100}
          className="h-full w-full"
        />
        <Image
          src="/assets/webp/summer_2.webp"
          alt="Summer 2"
          sizes="100vw"
          width={100}
          height={100}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default ThreeImages;
