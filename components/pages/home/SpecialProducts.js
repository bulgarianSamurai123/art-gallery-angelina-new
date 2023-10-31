import React from "react";
import { motion } from "framer-motion";

import { DUMMY_PRODUCTS_HOMEPAGE } from "/dummy-products";
import FeaturedProducts from "../../pages/products/FeaturedProducts";

const SpecialProducts = () => {
  return (
    <motion.div
      className="flex flex-col"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Специални Продукти
      </h1>
      <FeaturedProducts products={DUMMY_PRODUCTS_HOMEPAGE} motion={motion} />
    </motion.div>
  );
};

export default SpecialProducts;
