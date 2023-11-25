import React, { Fragment, useState } from "react";
import Head from "next/head";

import { getProducts } from "../../helpers/api-util";
import Section from "../../components/layout/Section";
import ProductsList from "../../components/pages/products/ProductsList";

const ProductPage = ({ products }) => {
  const [filterIsClicked, setFilterIsClicked] = useState(false);

  function filterHandler() {
    setFilterIsClicked(!filterIsClicked);
  }

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Products</title>
        <meta name="description" content="The best paintings you will find." />
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Магазин
        </h1>
        <ProductsList products={products} />
      </Section>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: {
      products: products,
    },
  };
}

export default ProductPage;
