import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CustomLink = (props) => {
  const { dest, isActive, children } = props;

  return (
    <motion.li
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      className="list-none"
    >
      <Link
        href={`${dest}`}
        className={`${isActive ? "font-bold" : "undefined"}`}
        passHref
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default CustomLink;
