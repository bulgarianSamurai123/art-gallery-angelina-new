import React from "react";

const ThreeImages = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col items-center justify-center sm:flex-row mt-20 xl:mt-0 mb-40 h-1/3 w-full xsm:w-2/3 sm:w-1/3">
        <img
          className="h-full w-full"
          src="/assets/summer_1.jpg"
          alt="Summer 1"
        />
        <img
          className="h-full w-full"
          src="/assets/brochure_3.jpg"
          alt="Brochure 3"
        />
        <img
          className="h-full w-full"
          src="/assets/summer_2.jpg"
          alt="Summer 2"
        />
      </div>
    </div>
  );
};

export default ThreeImages;
