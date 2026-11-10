import React from "react";
import dynamic from "next/dynamic";

import Section from "../../layout/Section";
import Hero from "./Hero";
import MyMission from "./MyMission";
import CustomPainting from "./CustomPainting";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SpecialProducts = dynamic(() => import("./SpecialProducts"));
const ThreeImages = dynamic(() => import("./ThreeImages"));
const ThreeImagesOne = dynamic(() => import("./ThreeImagesOne"));
const ThreeImagesTwo = dynamic(() => import("./ThreeImagesTwo"));

const Home = ({ products }) => {
  const t = useTranslations("Home");

  return (
    <>
      <Section>
        <Hero />
        <SpecialProducts products={products} />
        <MyMission />
        <ThreeImagesOne />
        <ThreeImagesTwo />
        <CustomPainting />
      </Section>
      <ThreeImages />
      <div className="py-10 mx-8 lg:mx-20 xl:mx-32 overflow-hidden">
        <h2 className="pb-10 text-xl md:text-3xl font-normal text-center">
          {t("facebookTitle")}
        </h2>
        <div className="flex flex-row justify-between mt-16">
          <div className="flex flex-row gap-5">
            <Link href="https://www.facebook.com/profile.php?id=100076377284606">
              <img
                src="/assets/face_prof_pic.jpg"
                className="rounded-full w-12 h-auto"
              />
            </Link>
            <div>
              <p className="font-semibold">Angelina's Art Gallery</p>
              <span className="flex flex-row gap-2 text-gray-570">
                <Link
                  href="https://www.facebook.com/profile.php?id=100076377284606"
                  className="hover:underline"
                >
                  {t("likes")}
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100076377284606"
                  className="hover:underline"
                >
                  {t("followers")}
                </Link>
              </span>
            </div>
          </div>
          <button className="py-2 px-5 bg-[#1877F2] text-white font-bold rounded-lg hover:bg-[#166cdb]">
            <Link href="https://www.facebook.com/profile.php?id=100076377284606">
              {t("follow")}
            </Link>
          </button>
        </div>
        <img src="/assets/face_page.png" className="w-full h-auto pt-5" />
      </div>
    </>
  );
};

export default Home;
