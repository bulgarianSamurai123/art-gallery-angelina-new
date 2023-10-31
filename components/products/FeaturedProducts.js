import React from 'react'
import Link from 'next/link'

const FeaturedProducts = ({products, motion}) => {
  return (
    <motion.ul
        className="flex flex-col md:flex-row gap-10"
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
        {products.map((product) => (
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
            <Link className="flex flex-col" href={product.id}>
              <img
                className="w-1/3 md:w-full md:h-full aspect-3/4"
                src={product.img}
                alt={product.name}
              />
              <div className="pt-4">
                <p className="text-base md:text-2xl font-bold">
                  {product.name}
                </p>
                <span className="text-sm md:text-xl font-light">
                  {product.price}
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
  )
}

export default FeaturedProducts
