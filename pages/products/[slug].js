import React from "react";
import { motion } from "framer-motion";

import { getProductById, getProducts } from "/helpers/api-util";
import Image from "next/image";
import Button from "/components/ui/Button";
import FeaturedProducts from "../../components/products/FeaturedProducts";
import { DUMMY_PRODUCTS_HOMEPAGE } from "../../dummy-products";

const ProductDetailPage = ({ selectedProduct }) => {
  const product = selectedProduct;

  return (
    <section className="mx-8 lg:mx-20 xl:mx-32 mt-20 mb-20">
      <div className="flex flex-row gap-14">
        <Image
          className="w-[900px] h-[600px] object-none object-center"
          src={`/product-images/${product.image}.jpg`}
          width={500}
          height={500}
          alt={product.name}
        />
        <div>
          <h1 className="text-3xl">{product.name}</h1>
          <span className="text-xl font-light">{product.price}лв.</span>
          <p className="text-base font-light text-gray-250">
            {product.description}
          </p>
          <Button>Поръчай</Button>
        </div>
      </div>
      <motion.div
        className="mt-20 flex flex-col items-center gap-10"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <h1 className="text-2xl">Може също така да харесате</h1>
        <FeaturedProducts products={DUMMY_PRODUCTS_HOMEPAGE} motion={motion} />
      </motion.div>
    </section>
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
