import React from "react";
import dynamic from "next/dynamic";

import Section from "../../layout/Section";
import Hero from "./Hero";
import MyMission from "./MyMission";
import CustomPainting from "./CustomPainting";
import Testimonials from "./Testimonials";
import LazyLoad from "react-lazyload";

const SpecialProducts = dynamic(() => import("./SpecialProducts"));
const ThreeImages = dynamic(() => import("./ThreeImages"));
const ThreeImagesOne = dynamic(() => import("./ThreeImagesOne"));
const ThreeImagesTwo = dynamic(() => import("./ThreeImagesTwo"));

const Home = ({ products }) => {
  return (
    <>
      <Section>
        <Hero />
        <SpecialProducts products={products} />
        <MyMission />
        <LazyLoad offset={100}>
          <ThreeImagesOne />
          <ThreeImagesTwo />
          <CustomPainting />
          <Testimonials />
        </LazyLoad>
      </Section>
      <ThreeImages />
    </>
  );
};

export default Home;
