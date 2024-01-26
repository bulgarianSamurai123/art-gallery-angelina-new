import React from "react";

const ThreeImagesOne = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col gap-10 items-center justify-center sm:flex-row mt-20 xl:mt-0 mb-40 w-full xsm:w-2/3 sm:w-1/3">
        <img
          className="h-full w-full"
          src="/assets/painting_1.jpg"
          alt="Painting 1"
        />
        <img
          className="h-full w-full"
          src="/assets/triptih_2.jpg"
          alt="Triptih 2"
        />
        <img
          className="h-full w-full"
          src="/assets/painting_3.jpg"
          alt="Painting 3"
        />
      </div>
    </div>
  );
};

export default ThreeImagesOne;
