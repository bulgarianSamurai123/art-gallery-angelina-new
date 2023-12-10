 import React, { Fragment } from "react";
import Head from "next/head";

import { getFeaturedProducts } from "../helpers/api-util";
import Section from "../components/layout/Section";
import Hero from "../components/pages/home/Hero";
import SpecialProducts from "../components/pages/home/SpecialProducts";
import MyMission from "../components/pages/home/MyMission";
import CustomPainting from "../components/pages/home/CustomPainting";
import Testimonials from "../components/pages/home/Testimonials";

const HomePage = ({ products }) => {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Textured. Minimalistic. Art." />
      </Head>
      <Section>
        <Hero />
        <SpecialProducts products={products} />
        <MyMission />
        <CustomPainting />
        <Testimonials />
      </Section>
    </Fragment>
  );
};

export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts();

  return {
    props: {
      products: featuredProducts,
    },
  };
}

export default HomePage;
