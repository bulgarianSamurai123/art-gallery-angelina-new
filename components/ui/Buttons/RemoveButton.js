import React from "react";
import { motion } from "framer-motion";

const RemoveButton = ({ buttonType, handlerDeleteItem, productID, t }) => {
  return (
    <motion.button
      className="flex flex-row gap-1 items-center border-red-rosso-corsa border-2 px-5 py-2 rounded-xl text-red-rosso-corsa"
      onClick={() => handlerDeleteItem(productID)}
      whileHover={{ backgroundColor: "#D10000", color: "#FFF" }}
    >
      <svg
        className="w-10 h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.106 2.553A1 1 0 0 1 9 2h6a1 1 0 0 1 .894.553L17.618 6H20a1 1 0 1 1 0 2h-1v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8H4a1 1 0 0 1 0-2h2.382l1.724-3.447ZM14.382 4l1 2H8.618l1-2h4.764ZM11 11a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Z"
          clipRule="evenodd"
        />
      </svg>
      {buttonType === "gallery" && t("admin.edit-gallery.table.col-2.delete-gallery")}
      {buttonType === "product" && t("admin.edit-products.table.col-6.buttons.delete-product")}
    </motion.button>
  );
};

export default RemoveButton;
