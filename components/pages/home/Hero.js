import React from "react";

import Button from "../../ui/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center pb-20">
      <div className="absolute w-full h-[85%] right-0 top-28 bg-background-home bg-cover bg-no-repeat -z-10" />
      <h1 className="text-3xl font-bold text-white">Home Page</h1>
      <p className="text-xl text-white">Some more text</p>
      <Button onClick={() => router.push("/products")}>Go to Shop</Button>
    </div>
  );
};

export default Hero;
