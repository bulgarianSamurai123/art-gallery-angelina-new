import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const ErrorPage404 = () => {
  const router = useRouter();
  const t = useTranslations("NotFound");

  return (
    <div className="w-full text-center my-32">
      <span className="text-9xl font-bold">404</span>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 justify-center items-center mt-5">
        <p className="font-bold text-lg">{t("message")}</p>
        <motion.button
          className="flex flex-row gap-1 border-gray-380 border-2 px-5 py-2 rounded-xl text-gray-380"
          onClick={() => router.push("/")}
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
          {t("backHome")}
        </motion.button>
      </div>
    </div>
  );
};

export default ErrorPage404;
