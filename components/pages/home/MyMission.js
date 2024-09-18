import Image from "next/image";
import React from "react";

const MyMission = () => {
  return (
    <div className="py-40 flex items-center md:flex-row flex-col gap-10 md:gap-24">
      <div className="bg-cover w-full h-96 sm:block md:hidden">
        <Image
          src="/assets/webp/3.webp"
          alt="For Painter Image"
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-full object-cover md:w-2/3 lg:w-2/3 lg:h-2/3"
        />
      </div>
      <Image
        src="/assets/webp/3.webp"
        alt="For Painter Image"
        width={100}
        height={100}
        sizes="100vw"
        className="hidden md:block md:w-1/3 md:h-full md:scale-y-[3] lg:scale-y-[2] lg:w-1/3 lg:h-full xl:scale-y-[1.5]"
      />
      <div className="flex flex-col justify-center">
        <h1 className="pb-5 text-xl md:text-3xl font-normal">Моята мисия</h1>
        <p className="text-base md:text-xl font-normal md:font-light leading-relaxed">
          Името ми е Ангелина и като творец на модерно изкуство се стремя към
          иновации и експериментирам с нови техники, материали и концепции.
          Искам да предизвикам традиционните норми и да Ви предложа нещо ново и
          свежо, което вдъхновява, стимулира и обогатява както духовният Ви
          свят, така и се вписва хармонично в общата композиция на интериорното
          Ви пространство. Обичам да изследвам идеи и концепции като ги
          изразявам чрез абстракционизъм, поп арт, минимализъм и не само.
          Фокусирам се върху съдържанието и символиката в творбите си, често с
          цел да предизвикам умовете на зрителите както и техните сетива,
          емоции, спомени.
        </p>
      </div>
    </div>
  );
};

export default MyMission;
