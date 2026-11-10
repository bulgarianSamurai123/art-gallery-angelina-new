import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const FilterButton = ({ toggleHandler }) => {
  const t = useTranslations("Products");

  return (
    <motion.button
      className="flex flex-row gap-3 border-gray-300 border-2 px-5 py-2 rounded-xl text-gray-300"
      onClick={toggleHandler}
      whileHover={{ backgroundColor: "#505050", color: "#FFF" }}
    >
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48m-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48m-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48"
        />
      </svg>
      {t("filter")}
    </motion.button>
  );
};

export default FilterButton;
