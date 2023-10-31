import React from "react";
import { motion } from "framer-motion";

import { DUMMY_PRODUCTS_HOMEPAGE } from "/dummy-products";

const GalleryList = () => {
  return (
    <motion.ul
      className="flex flex-col md:flex-row gap-10"
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
      {DUMMY_PRODUCTS_HOMEPAGE.map((product) => (
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
          <img
            className="w-1/3 md:w-full md:h-full aspect-3/4"
            src={product.img}
            alt={product.name}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default GalleryList;
