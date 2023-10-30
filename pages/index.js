import React, { Fragment } from "react";

import Section from "/components/layout/Section";
import Hero from "/components/home/Hero";
import SpecialProducts from "/components/home/SpecialProducts";
import ForPainter from "/components/home/ForPainter";
import CustomPainting from "/components/home/CustomPainting";
import Testimonials from "/components/home/Testimonials";
import AskQuestion from "/components/home/AskQuestion";
import Head from "next/head";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery</title>
        <meta name="description" content="Textured. Minimalistic. Art." />
      </Head>
      <Section>
        <Hero />
        <SpecialProducts />
        <ForPainter />
        <CustomPainting />
        <Testimonials />
        <AskQuestion />
      </Section>
    </Fragment>
  );
};

export default HomePage;
