import React, { Fragment } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import { getProductById, getProducts } from "/helpers/api-util";
import Section from "../../components/layout/Section";
import Product from "../../components/pages/products/Product";
import FeaturedProducts from "../../components/pages/products/FeaturedProducts";
import { getFeaturedProducts } from "../../helpers/api-util";
import BackButton from "../../components/ui/buttons/BackButton";

const ProductDetailPage = ({ selectedProduct, featuredProducts }) => {
  const product = selectedProduct;

  return (
    <Fragment>
      <Head>
        {product ? (
          <title>Angelina's Art Gallery - {product.name}</title>
        ) : null}
        {product ? (
          <meta name="title" property="og:title" content={product.name} />
        ) : null}
        {product ? (
          <meta
            name="description"
            property="og:description"
            content={product.description}
          />
        ) : null}
        {product ? (
          <meta name="image" property="og:image" content={product.coverImage} />
        ) : null}
        {product ? (
          <meta
            name="url"
            property="og:url"
            content={`http://angelinartgallery.com/products/${product.id}`}
          />
        ) : null}

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Section>
        <div className="pb-10">
          <BackButton link={"/products"} />
        </div>
        <Product product={product} />
        <motion.div
          className="mt-20 flex flex-col items-center gap-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1 className="text-2xl">Може също така да харесате</h1>
          <FeaturedProducts products={featuredProducts} motion={motion} />
        </motion.div>
      </Section>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const productID = context.params.slug;
  const product = await getProductById(productID);
  const featuredProducts = await getFeaturedProducts();

  return {
    props: {
      selectedProduct: product,
      featuredProducts: featuredProducts,
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
