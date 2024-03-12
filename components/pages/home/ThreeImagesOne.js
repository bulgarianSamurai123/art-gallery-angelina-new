import Image from "next/image";
import React from "react";

const ThreeImagesOne = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col gap-10 items-center justify-center sm:flex-row mt-20 xl:mt-0 mb-40 w-full xsm:w-2/3 sm:w-1/3">
        <Image
          src="/assets/webp/painting_1.webp"
          alt="Painting 1"
          sizes="100vw"
          width={100}
          height={100}
          className="h-full w-full"
          loading="lazy"
        />
        <Image
          src="/assets/webp/triptih_2.webp"
          alt="Triptih 2"
          sizes="100vw"
          width={100}
          height={100}
          className="h-full w-full"
          loading="lazy"
        />
        <Image
          src="/assets/webp/painting_3.webp"
          alt="Painting 3"
          sizes="100vw"
          width={100}
          height={100}
          className="h-full w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ThreeImagesOne;
