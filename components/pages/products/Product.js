import React from "react";
import Image from "next/image";

import Button from "/components/ui/Button";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-14 overflow-y-hidden ">
      <Image
        className="w-[56em] h-[30em] md:h-[36em] object-none object-center"
        src={`/product-images/${product.image}.jpg`}
        width={500}
        height={500}
        alt={product.name}
      />
      <div>
        <h1 className="text-3xl">{product.name}</h1>
        <span className="text-xl font-light">{product.price}лв.</span>
        <p className="text-base font-light text-gray-250">
          {product.description}
        </p>
        <Button>Поръчай</Button>
      </div>
    </div>
  );
};

export default Product;
