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
          или обновявате собственият си дом, Angelina’s Art gallery пана са
          достъпен и лесен начин да направите всяка стена модерна, отличителна и
          уникална. Разгледайте творбите в секция Магазин, изберете перфектната
          текстура и цветове, дайте ми Вашите изисквания за размер и разкажете
          история с масивно и уникално авторско пано по поръчка. Натиснете
          бутона по-долу, за да попълните форма и се свържете с мен. Не
          пропускайте да посетите и секция{" "}
          <Link href="/gallery" className="text-link-blue">
            Галерия Готови Проекти
          </Link>
          , за да получите перфектен ориентир за пана намерили вече своят
          прекрасен дом и уникалното си място в него и се вдъхновите да
          пътувате, мечтаете, дерзаете и осъществявате! Бъдете Благословени! ❤️
        </p>
        <div>
          <Button onClick={() => router.push("/contact-us")}>Контакти</Button>
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
