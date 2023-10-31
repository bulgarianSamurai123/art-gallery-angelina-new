import React, { Fragment } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import { getProductById, getProducts } from "/helpers/api-util";
import { DUMMY_PRODUCTS_HOMEPAGE } from "../../dummy-products";
import Section from "../../components/layout/Section";
import Product from "../../components/pages/products/Product";
import FeaturedProducts from "../../components/pages/products/FeaturedProducts";

const ProductDetailPage = ({ selectedProduct }) => {
  const product = selectedProduct;

  return (
    <Fragment>
      <Head>
        <title>Angelina's Art Gallery - {product.name}</title>
        <meta name="description" content={product.description} />
      </Head>
      <Section>
        <Product product={product} />
        <motion.div
          className="mt-20 flex flex-col items-center gap-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1 className="text-2xl">Може също така да харесате</h1>
          <FeaturedProducts
            products={DUMMY_PRODUCTS_HOMEPAGE}
            motion={motion}
          />
        </motion.div>
      </Section>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const productID = context.params.slug;
  const product = await getProductById(productID);

  return {
    props: {
      selectedProduct: product,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allProducts = await getProducts();

  const paths = allProducts.map((product) => ({
    params: { slug: product.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default ProductDetailPage;
