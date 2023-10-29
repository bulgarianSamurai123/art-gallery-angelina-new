import React from "react";
import Link from "next/link";

import { getProducts } from "../../helpers/api-util";

const ProductPage = ({ products }) => {
  return (
    <section className="mx-8 lg:mx-20 xl:mx-32">
      <h1 className="pb-10 text-xl md:text-3xl font-normal text-center">
        Products Page
      </h1>

      <ul className="grid grid-cols-5 gap-6 items-top justify-center">
        {products.map((product) => (
          <li key={product.id}>
            <Link className="flex flex-col" href={`/products/${product.id}`}>
              <img
                className="w-full max-h-80 overflow-hidden"
                src={`/product-images/${product.image}.jpg`}
                alt={product.name}
              />
              <h1 className="text-2xl font-normal">{product.name}</h1>
              <p className="text-xl font-light">{`${product.price}лв.`}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();

  return {
    props: {
      products: products,
    },
  };
}

export default ProductPage;
