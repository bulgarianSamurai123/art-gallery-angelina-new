import React from "react";
import { motion } from "framer-motion";

const AddButton = ({ navigate, buttonType }) => {
  let link

  if (buttonType === 'gallery') {
    link = "/admin/edit-gallery/add-gallery"
  }

  if (buttonType === 'product') {
    link = "/admin/edit-product/add-product"
  }

  if (buttonType === 'projects') {
    link = "/admin/edit-projects/add-projects"
  }

  return (
    <motion.button
      className="flex flex-row gap-1 border-forest-green border-2 px-5 py-2 rounded-xl text-forest-green"
      onClick={() => navigate(link)}
      whileHover={{ backgroundColor: '#228B22', color: '#FFF' }}
    >
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
      </svg>
      {buttonType === 'gallery' && 'Добави галерна снимка'}
      {buttonType === 'product' && 'Добави продукт'}
      {buttonType === 'projects' && 'Добави проект'}
    </motion.button>
  );
};

export default AddButton;
