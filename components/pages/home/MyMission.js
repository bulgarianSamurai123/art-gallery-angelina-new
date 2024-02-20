import React from "react";

const MyMission = ({ translation }) => {
  return (
    <div className="py-40 flex items-center md:flex-row flex-col gap-10 md:gap-24">
      <img
        className="w-full md:w-1/3 lg:w-2/3 lg:h-2/3"
        src="/assets/for-painter.jpg"
        alt="For Painter Image"
      />
      <div className="flex flex-col justify-center">
        <h1 className="pb-5 text-xl md:text-3xl font-normal">
          {translation("home.my-mission.title")}
        </h1>
        <p className="text-base md:text-xl font-normal md:font-light leading-relaxed">
          {translation("home.my-mission.text")}
        </p>
      </div>
    </div>
  );
};

export default MyMission;
