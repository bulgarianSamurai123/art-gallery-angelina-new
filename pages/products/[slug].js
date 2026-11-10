import React, { Fragment, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

import { getProductById, getProducts } from "/helpers/api-util";
import Section from "../../components/layout/Section";
import Product from "../../components/pages/products/Product";
import FeaturedProducts from "../../components/pages/products/FeaturedProducts";
import { getFeaturedProducts } from "../../helpers/api-util";
import BackButton from "../../components/ui/Buttons/BackButton";
import { localize } from "../../helpers/localize";

const ProductDetailPage = ({ selectedProduct, featuredProducts, currentPage }) => {
  const product = selectedProduct;
  const router = useRouter();
  const t = useTranslations("Products");
  const name = localize(product, "name", router.locale);
  const description = localize(product, "description", router.locale);

  return (
    <Fragment>
      <Head>
        {product ? (
          <title>{`Angelina's Art Gallery - ${name}`}</title>
        ) : null}
        {product ? (
          <meta name="title" property="og:title" content={name} />
        ) : null}
        {product ? (
          <meta
            name="description"
            property="og:description"
            content={description}
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
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
      </Head>
      <Section>
        <div className="pb-10">
          <BackButton link={`/products?page=${router.query.page}`} />
        </div>
        <Product product={product} />
        <motion.div
          className="mt-20 flex flex-col items-center gap-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1 className="text-2xl">{t("alsoLike")}</h1>
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

export async function getStaticPaths({ locales = ["bg"] }) {
  const allProducts = await getProducts();

  // Pre-render every product in every language (/products/x and /en/products/x)
  const paths = allProducts.flatMap((product) =>
    locales.map((locale) => ({
      params: { slug: product.id },
      locale,
    }))
  );

  return {
    paths: paths,
    fallback: true,
  };
}

export default ProductDetailPage;
