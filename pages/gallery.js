import React from "react";

import { DUMMY_PRODUCTS_HOMEPAGE } from "/dummy-products";

const GalleryPage = () => {
  return (
    <section className="mx-8 lg:mx-20 xl:mx-32">
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Gallery Page
      </h1>

      <motion.ul
        className="flex flex-col md:flex-row gap-10"
        variants={{
          offscreen: { opacity: 1, scale: 0 },
          onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {DUMMY_PRODUCTS_HOMEPAGE.map((product) => (
          <motion.li
            key={product.id}
            variants={{
              offscreen: { y: 20, opacity: 0 },
              onscreen: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <img
              className="w-1/3 md:w-full md:h-full aspect-3/4"
              src={product.img}
              alt={product.name}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default GalleryPage;
