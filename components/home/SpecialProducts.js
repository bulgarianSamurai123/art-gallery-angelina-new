import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { DUMMY_PRODUCTS_HOMEPAGE } from "/dummy-products";

const SpecialProducts = () => {
  return (
    <motion.div
      className="flex flex-col"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Special Products
      </h1>
      <motion.ul
        className="flex flex-col md:flex-row gap-10"
        variants={{
          offscreen: { opacity: 1, scale: 0 },
          onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {DUMMY_PRODUCTS_HOMEPAGE.map((product) => (
          <motion.li
            key={product.id}
            variants={{
              offscreen: { y: 20, opacity: 0 },
              onscreen: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <Link className="flex flex-col" href={product.id}>
              <img
                className="w-1/3 md:w-full md:h-full aspect-3/4"
                src={product.img}
                alt={product.name}
              />
              <div className="pt-4">
                <p className="text-base md:text-2xl font-bold">
                  {product.name}
                </p>
                <span className="text-sm md:text-xl font-light">
                  {product.price}
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default SpecialProducts;
