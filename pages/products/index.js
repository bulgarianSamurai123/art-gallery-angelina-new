import React, { Fragment, useState } from "react";
import Head from "next/head";

import { getProducts } from "../../helpers/api-util";
import Section from "../../components/layout/Section";
import ProductsList from "../../components/pages/products/ProductsList";

const ProductPage = ({ products }) => {
  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - Products</title>
        <meta name="description" content="The best paintings you will find." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Section>
        <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
          Магазин
        </h1>
        {products.length < 1 && <p>Няма продукти</p>}
        {products.length > 1 && <ProductsList products={products} />}
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
