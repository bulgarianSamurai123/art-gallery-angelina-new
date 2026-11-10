import React from "react";
import Link from "next/link";
import { useLocalize } from "../../../helpers/localize";

const FeaturedProducts = ({ products }) => {
  const l = useLocalize();

  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 justify-center">
      {products
        ? products.map((product) => (
            <li key={product.id}>
              <Link className="flex flex-col" href={`/products/${product.id}`}>
                <img
                  className="w-[16.25em] h-[18.125em] object-cover object-center"
                  src={product.coverImage}
                  alt={l(product, "name")}
                />
                <div className="pt-4">
                  <p className="text-base md:text-2xl font-bold">
                    {l(product, "name")}
                  </p>
                  <span className="text-sm md:text-xl font-light">
                    {product.price === new RegExp("^[1-9]", "g")
                      ? `${product.price}лв.`
                      : product.price}
                  </span>
                </div>
              </Link>
            </li>
          ))
        : []}
    </ul>
  );
};

export default FeaturedProducts;
