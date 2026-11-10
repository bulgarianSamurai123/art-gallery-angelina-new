import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import FeaturedProducts from "../../pages/products/FeaturedProducts";

const SpecialProducts = ({ products }) => {
  const t = useTranslations("Home");

  return (
    <div
      className="flex flex-col"
    >
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        {t("highlights")}
      </h1>

      {products.length < 1 && <p>{t("noProducts")}</p>}
      {products.length > 0 && <FeaturedProducts products={products} motion={motion} />}
    </div>
  );
};

export default SpecialProducts;
