import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const EditButton = ({ buttonType, link, t }) => {
  const router = useRouter();

  function navigateHandler(url) {
    router.push(url);
  }

  return (
    <motion.button
      className="flex flex-row gap-1 items-center border-orange-tiger border-2 px-5 py-2 rounded-xl text-orange-tiger"
      onClick={() => navigateHandler(link)}
      whileHover={{ backgroundColor: "#FC6A03", color: "#FFF" }}
    >
      <svg
        className="w-10 h-auto"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575V19Zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.138.763t-.437.662L7.25 21H3ZM19 6.4L17.6 5L19 6.4Zm-3.525 2.125l-.7-.725L16.2 9.225l-.725-.7Z"
        />
      </svg>
      {buttonType === "gallery" && ''}
      {buttonType === "product" && t("admin.edit-products.table.col-6.buttons.edit-product")}
    </motion.button>
  );
};

export default EditButton;
