import React from "react";
import { motion } from "framer-motion";

const ToHomeButton = ({ router }) => {
  return (
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
      Към начало
    </motion.button>
  );
};

export default ToHomeButton;
