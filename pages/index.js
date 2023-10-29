import React from "react";

import Section from "/components/layout/Section";
import Hero from "/components/home/Hero";
import SpecialProducts from "/components/home/SpecialProducts";
import ForPainter from "/components/home/ForPainter";
import CustomPainting from "/components/home/CustomPainting";
import Testimonials from "/components/home/Testimonials";
import AskQuestion from "/components/home/AskQuestion";

const HomePage = () => {
  return (
    <Section>
      <Hero />
      <SpecialProducts />
      <ForPainter />
      <CustomPainting />
      <Testimonials />
      <AskQuestion />
    </Section>
  );
};

export default HomePage;
