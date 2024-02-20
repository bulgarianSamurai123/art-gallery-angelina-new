import React from "react";
import { useRouter } from "next/router";

import Button from "../../ui/Button";
import Link from "next/link";

const CustomPainting = ({ translation }) => {
  const router = useRouter();

  return (
    <div className="flex md:flex-row flex-col gap-10 md:gap-24">
      <div className="flex flex-col justify-center md:order-first order-last">
        <h1 className="pb-5 text-xl md:text-3xl font-normal">
          {translation("home.custom-painting.title")}
        </h1>
        <p className="text-base md:text-xl font-normal md:font-light leading-relaxed">
          {translation("home.custom-painting.text-01")}
          <Link href="/gallery" className="text-link-blue">
            {translation("home.custom-painting.gallery-link")}
          </Link>
          {translation("home.custom-painting.text-02")}
        </p>
        <div>
          <Button onClick={() => router.push("/contact-us")}>
            {translation("home.custom-painting.button")}
          </Button>
        </div>
      </div>
      <img
        className="w-full md:w-1/3 lg:w-2/3 lg:h-2/3"
        src="/assets/custom-painting.jpeg"
        alt="Custom Painting Image"
      />
    </div>
  );
};

export default CustomPainting;
