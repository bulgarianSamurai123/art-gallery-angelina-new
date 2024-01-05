import React from "react";
import Link from "next/link";

const FeaturedProducts = ({ products, motion }) => {
  return (
    <motion.ul
      className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 justify-center"
      variants={{
        offscreen: { opacity: 1 },
        onscreen: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {products
        ? products.map((product) => (
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
              <Link className="flex flex-col" href={`/products/${product.id}`}>
                <img
                  className="w-[16.25em] h-[18.125em] object-cover object-center"
                  src={product.coverImage}
                  alt={product.name}
                />
                <div className="pt-4">
                  <p className="text-base md:text-2xl font-bold">
                    {product.name}
                  </p>
                  <span className="text-sm md:text-xl font-light">
                    {`${product.price}лв.`}
                  </span>
                </div>
              </Link>
            </motion.li>
          ))
        : []}
    </motion.ul>
  );
};

export default FeaturedProducts;
