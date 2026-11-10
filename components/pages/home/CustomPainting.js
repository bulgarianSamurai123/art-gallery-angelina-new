import React from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

import Button from "../../ui/Button";
import Link from "next/link";
import Image from "next/image";

const CustomPainting = () => {
  const router = useRouter();
  const t = useTranslations("Home");

  return (
    <div className="flex md:flex-row flex-col gap-10 md:gap-24">
      <div className="flex flex-col justify-center md:order-first order-last">
        <h1 className="pb-5 text-xl md:text-3xl font-normal">
          {t("customTitle")}
        </h1>
        <p className="text-base md:text-xl font-normal md:font-light leading-relaxed">
          {t.rich("customText", {
            link: (chunks) => (
              <Link
                href="/gallery"
                className="text-link-blue font-semibold hover:underline"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
        <div>
          <Button onClick={() => router.push("/contact-us")}>{t("contactButton")}</Button>
        </div>
      </div>
      <Image
        src="/assets/webp/custom-painting.webp"
        alt="Custom Painting Image"
        width={100}
        height={100}
        sizes="100vw"
        className="w-full md:w-1/3 lg:w-2/3 lg:h-2/3"
      />
    </div>
  );
};

export default CustomPainting;
