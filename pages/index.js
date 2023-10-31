import React, { Fragment } from "react";
import Head from "next/head";

import Section from "../components/layout/Section";
import Hero from "../components/pages/home/Hero";
import SpecialProducts from "../components/pages/home/SpecialProducts";
import ForPainter from "../components/pages/home/ForPainter";
import CustomPainting from "../components/pages/home/CustomPainting";
import Testimonials from "../components/pages/home/Testimonials";
import AskQuestion from "../components/pages/home/AskQuestion";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
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
