import React from "react";

const ForPainter = () => {
  return (
    <div className="py-40 flex items-center md:flex-row flex-col gap-10 md:gap-24">
      <img
        className="w-full lg:w-2/3 lg:h-2/3"
        src="/assets/for-painter.png"
        alt="For Painter Image"
      />
      <div className="flex flex-col justify-center">
        <h1 className="pb-5 text-xl md:text-3xl font-normal">For Painter</h1>
        <p className="text-base md:text-2xl font-normal md:font-light leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Quis feugiat phasellus
          faucibus egestas scelerisque sed enim. Urna lorem aliquam risus
          malesuada proin aliquam malesuada urna facilisis. Mauris scelerisque
          consectetur viverra pretium diam turpis. Condimentum mattis lobortis
          commodo ac aliquam aliquet nunc nibh. Egestas ut faucibus purus
          egestas.
        </p>
      </div>
    </div>
  );
};

export default ForPainter;
