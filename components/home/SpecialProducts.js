import React from "react";
import Link from "next/link";

import { DUMMY_PRODUCTS_HOMEPAGE } from "/dummy-products";

const SpecialProducts = () => {
  return (
    <div className="flex flex-col">
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Special Products
      </h1>
      <ul className="flex flex-col md:flex-row gap-10">
        {DUMMY_PRODUCTS_HOMEPAGE.map((product) => (
          <li key={product.id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialProducts;
