import React from "react";
import dynamic from "next/dynamic";

import Section from "../../layout/Section";
import Hero from "./Hero";
import SpecialProducts from "./SpecialProducts";
import MyMission from "./MyMission";

const ThreeImagesOne = dynamic(() => import("./ThreeImagesOne"));
const CustomPainting = dynamic(() => import("./CustomPainting"));
const Testimonials = dynamic(() => import("./Testimonials"));
const ThreeImages = dynamic(() => import("./ThreeImages"));

const Home = ({ products }) => {
  return (
    <>
      <Section>
        <Hero />
        <SpecialProducts products={products} />
        <MyMission />
        <ThreeImagesOne />
        <CustomPainting />
        <Testimonials />
      </Section>
      <ThreeImages />
    </>
  );
};

export default Home;
