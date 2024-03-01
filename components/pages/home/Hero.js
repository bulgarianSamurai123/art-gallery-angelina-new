import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import localFont from "next/font/local";
const myFont = localFont({
  src: "../../../public/fonts/BrittanySignature.ttf",
});

import Button from "../../ui/Button";

const Hero = () => {
  const router = useRouter();

  const navigationHandler = () => {
    router.push("/products");
  };

  return (
    <div className="pb-36">
      <Image
        src="/assets/webp/image_home-min.webp"
        alt="Home Page Image"
        width={100}
        height={100}
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="-z-10 top-28 right-0 absolute w-full h-[85%] bg-cover"
        priority={true}
      />
      <div className="h-[70vh] flex flex-col items-center justify-center">
        <h1
          className={`pb-3 text-2xl sm:text-3xl text-white ${myFont.className}`}
        >
          Angelina's Art Gallery
        </h1>
        <p className="pb-5 text-sm sm:text-xl text-white">
          Абстракционизъм, Поп Арт, Минимализъм
        </p>
        <Button onClick={navigationHandler}>Пазарувай</Button>
      </div>
    </div>
  );
};

export default Hero;
