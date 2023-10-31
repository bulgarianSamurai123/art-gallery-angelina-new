import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { getProducts } from "../../helpers/api-util";

const ProductPage = ({ products }) => {
  return (
    <section className="mx-8 lg:mx-20 xl:mx-32">
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Products Page
      </h1>

      <motion.ul
        className="grid grid-cols-5 gap-6 items-top justify-center"
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.li
            key={product.id}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <Link className="flex flex-col" href={`/products/${product.id}`}>
              <img
                className="w-[16.25em] h-[18.125em] object-cover object-center"
                src={`/product-images/${product.image}.jpg`}
                alt={product.name}
              />
              <h1 className="text-2xl font-normal">{product.name}</h1>
              <p className="text-xl font-light">{`${product.price}лв.`}</p>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
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
