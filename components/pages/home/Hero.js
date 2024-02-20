import React from "react";

import localFont from "next/font/local";
const myFont = localFont({
  src: "../../../public/fonts/BrittanySignature.ttf",
});

import Button from "../../ui/Button";
import { useRouter } from "next/router";

const Hero = ({ translation }) => {
  const router = useRouter();

  const navigationHandler = () => {
    router.push("/products");
  };

  return (
    <div className="pb-36">
      <div className="absolute w-full h-[85%] right-0 top-28 bg-background-home bg-cover bg-no-repeat -z-10" />
      <div className="h-[70vh] flex flex-col items-center justify-center">
        <h1
          className={`pb-3 text-2xl sm:text-3xl text-white ${myFont.className}`}
        >
          Angelina's Art Gallery
        </h1>
        <p className="pb-5 text-sm sm:text-xl text-white">
          {translation("home.hero.subtext")}
        </p>
        <Button onClick={navigationHandler}>
          {translation("home.hero.button")}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
