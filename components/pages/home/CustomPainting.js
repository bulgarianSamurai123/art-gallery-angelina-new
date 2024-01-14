import React from "react";
import { useRouter } from "next/router";

import Button from "../../ui/Button";
import Link from "next/link";

const CustomPainting = () => {
  const router = useRouter();

  return (
    <div className="flex md:flex-row flex-col gap-10 md:gap-24">
      <div className="flex flex-col justify-center md:order-first order-last">
        <h1 className="pb-5 text-xl md:text-3xl font-normal">
          Пана по поръчка
        </h1>
        <p className="text-base md:text-2xl font-normal md:font-light leading-relaxed">
          Независимо дали преобразувате търговско пространство, проектирате офис
          или обновявате дома си, Angelina’s Art gallery пана са популярен и
          модерен начин да направите всяка стена отличителна и уникална.
          Изберете перфектната текстура и цветове, дайте ми вашите изисквания за
          размер и разкажете история с масивно и уникално пано. Натиснете бутона
          по-долу, за да попълните форма и се свържете с мен. Разгледайте и
          секция{" "}
          <Link href="/gallery" className="text-link-blue">
            Галерия готови проекти
          </Link>
          , за да се вдъхновите от готови проекти, изпращани така любезно от
          клиенти, от където може да заимствате идея и да получите прекрасен
          ориентир за окачени и вписали се Angelina’s Art gallery пана.
        </p>
        <div>
          <Button onClick={() => router.push("/contact-us")}>Контакти</Button>
        </div>
      </div>
      <img
        className="w-full md:w-1/3 lg:w-2/3 lg:h-2/3"
        src="/assets/custom-painting.png"
        alt="Custom Painting Image"
      />
    </div>
  );
};

export default CustomPainting;
