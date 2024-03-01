import React, { Fragment } from "react";
import Head from "next/head";

import Home from "../components/pages/home/Home";

const HomePage = ({ products }) => {
  return (
    <Fragment>
      <Head>
        <meta property="og:title" content="Angelina's Art Gallery" />
        <meta
          property="og:description"
          content="Textured. Minimalistic. Art."
        />
        <meta property="og:url" content="http://angelinartgallery.com/" />
        <meta property="og:image" content="/assets/webp/image_home-min.webp" />
        <link rel="preload" href="/assets/webp/image_home-min.webp" as="image" />
      </Head>
      <Home products={products} />
    </Fragment>
  );
};

export async function getServerSideProps() {
  const featuredProducts = await import("../helpers/api-util").then((mod) =>
    mod.getFeaturedProducts()
  );

  return {
    props: {
      products: featuredProducts,
    },
  };
}

export default HomePage;
