import React, { Fragment } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
  const { t } = useTranslation();

  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content="Angelina's Art Gallery" />
        <meta
          property="og:description"
          content="Textured. Minimalistic. Art."
        />
        <meta property="og:url" content="http://angelinartgallery.com/" />
        <meta property="og:image" content="/assets/image_home.png" />
      </Head>
      <Section>
        <Hero translation={t} />
        <SpecialProducts products={products} translation={t} />
        <MyMission translation={t} />
        <ThreeImagesOne />
        <CustomPainting translation={t} />
        <Testimonials translation={t} />
      </Section>
      <ThreeImages />
    </Fragment>
  );
};

export async function getServerSideProps({ locale }) {
  const featuredProducts = await getFeaturedProducts();

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      products: featuredProducts,
    },
  };
}

export default HomePage;
