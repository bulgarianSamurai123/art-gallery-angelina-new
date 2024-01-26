import React, { Fragment } from "react";
import Head from "next/head";

import { getFeaturedProducts } from "../helpers/api-util";
import Section from "../components/layout/Section";
import Hero from "../components/pages/home/Hero";
import SpecialProducts from "../components/pages/home/SpecialProducts";
import MyMission from "../components/pages/home/MyMission";
import CustomPainting from "../components/pages/home/CustomPainting";
import Testimonials from "../components/pages/home/Testimonials";
import ThreeImages from "../components/pages/home/ThreeImages";
import ThreeImagesOne from "../components/pages/home/ThreeImagesOne";

const HomePage = ({ products }) => {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Textured. Minimalistic. Art." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Section>
        <Hero />
        <SpecialProducts products={products} />
        <MyMission />
        <ThreeImagesOne />
        <CustomPainting />
        <Testimonials />
      </Section>
      <ThreeImages />
    </Fragment>
  );
};

export async function getServerSideProps() {
  const featuredProducts = await getFeaturedProducts();

  return {
    props: {
      products: featuredProducts,
    },
  };
}

export default HomePage;
