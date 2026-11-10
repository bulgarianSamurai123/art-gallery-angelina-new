import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const MyMission = () => {
  const t = useTranslations("Home");

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
        <h1 className="pb-5 text-xl md:text-3xl font-normal">{t("missionTitle")}</h1>
        <p className="text-base md:text-xl font-normal md:font-light leading-relaxed">
          {t("missionText")}
        </p>
      </div>
    </div>
  );
};

export default MyMission;
