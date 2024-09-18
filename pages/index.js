import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";

import Home from "../components/pages/home/Home";
import { getFeaturedProductsQuery } from "../helpers/database-queries";

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getFeaturedProductsQuery(setProducts)
  }, [])

  return (
    <Fragment>
      <Head>
        <link rel="preload" href="/assets/webp/image_home.webp" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta property="og:title" content="Angelina's Art Gallery" />
        <meta
          property="og:description"
          content="Textured. Minimalistic. Art."
        />
        <meta property="og:url" content="http://angelinartgallery.com/" />
        <meta property="og:image" content="/assets/image_home.png" />
      </Head>
      <Home products={products} />
    </Fragment>
  );
};

export default HomePage;
