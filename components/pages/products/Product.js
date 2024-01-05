import React from "react";

import Button from "/components/ui/Button";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-14 overflow-y-hidden ">
      <img
        className="w-[56em] h-[30em] md:h-[36em] object-none object-center"
        src={product ? product.coverImage : null}
        alt={product ? product.name : null}
      />

      <div>
        <h1 className="text-3xl">{product ? product.name : null}</h1>
        <span className="text-xl font-light">{product ? product.price : null}лв.</span>
        <p className="text-base font-light text-gray-250">
          {product ? product.description : null}
        </p>
        <Button>Поръчай</Button>
      </div>
    </div>
  );
};

export default Product;
