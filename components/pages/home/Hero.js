import React from "react";
import Image from "next/image";

import localFont from "next/font/local";
const myFont = localFont({
  src: "../../../public/fonts/BrittanySignature.ttf",
});

import Button from "../../ui/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const navigationHandler = () => {
    router.push("/products");
  };

  return (
    <div className="pb-36">
      <Image
        // src="/assets/webp/image_home.webp"
        src="/assets/image_home_new.png"
        alt="Home Page Image"
        width={100}
        height={100}
        quality={70}
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
        <Button onClick={navigationHandler}>Вижте всички произведения</Button>
      </div>
    </div>
  );
};

export default Hero;
