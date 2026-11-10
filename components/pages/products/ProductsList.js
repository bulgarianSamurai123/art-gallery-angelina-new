import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocalize } from "../../../helpers/localize";

const ProductsList = ({ products, currentPage }) => {
  const l = useLocalize();

  return (
    <motion.ul
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-top justify-center overflow-hidden"
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
          <Link
            className="flex flex-col"
            href={{
              pathname: `/products/${product.id}`,
              query: { page: currentPage },
            }}
          >
            <img
              className="w-[16.25em] h-[18.125em] object-cover object-center"
              src={product.coverImage}
              alt={l(product, "name")}
            />
            <h1 className="text-2xl font-normal">{l(product, "name")}</h1>
            <p className="text-xl font-light">
              {product.price === new RegExp("^[1-9]", "g")
                ? `${product.price}лв.`
                : product.price}
            </p>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ProductsList;
