import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const BackButton = ({ link }) => {
  const router = useRouter();
  const t = useTranslations("Products");

  const navigateHandler = (url) => {
    router.push(url);
  };

  return (
    <motion.button
      className="flex flex-row gap-1 border-gray-380 border-2 px-5 py-2 rounded-xl text-gray-380"
      onClick={() => navigateHandler(link)}
      whileHover={{ backgroundColor: "#626262", color: "#FFF" }}
    >
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m5 12l6-6m-6 6l6 6m-6-6h14"
        />
      </svg>
      {t("back")}
    </motion.button>
  );
};

export default BackButton;
