import React from "react";
import { motion } from "framer-motion";

const GalleryList = ({galleryImages}) => {
  return (
    <motion.ul
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-top justify-center overflow-hidden"
      variants={{
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {galleryImages.map((image) => (
        <motion.li
          key={image.image}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
        >
          <img
            className="w-[16.25em] h-[18.125em] object-cover object-center"
            src={image.image}
            alt={image.image}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};



export default GalleryList;
