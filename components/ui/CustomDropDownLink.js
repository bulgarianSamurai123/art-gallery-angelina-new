import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CustomDropDownLink = (props) => {
  const { router, destination, children, closeDropDown } = props;
  const isActive = router.asPath === destination;

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        className={`text-xl hover:text-gray-570 ${
          isActive ? "font-bold" : "font-normal"
        }`}
        href={destination}
        passHref
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default CustomDropDownLink;
