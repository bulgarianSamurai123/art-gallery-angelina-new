import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CustomLink = (props) => {
  const { dest, isActive, children, className, onClick } = props;

  return (
    <motion.li
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`list-none ${className}`}
    >
      <Link
        href={`${dest}`}
        className={`${isActive ? "font-bold" : "undefined"}`}
        onClick={onClick}
        passHref
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default CustomLink;
