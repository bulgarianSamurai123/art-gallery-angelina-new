import React from "react";
import { useRouter } from "next/router";

import Button from "../../ui/Button";

const Product = ({ product }) => {
  const router = useRouter()

  const navigationHandler = () => {
    router.push('/contact-us') 
  }

  return (
    <div className="flex flex-col md:flex-row gap-14 overflow-y-hidden">
      <img
        // w-[56em] h-[30em]
        className="w-[56em] h-[30em] md:h-[36em] object-cover object-center"
        src={product ? product.coverImage : null}
        alt={product ? product.name : null}
      />

      <div>
        <h1 className="text-3xl">{product ? product.name : null}</h1>
        {product ? (
          <span className="text-xl font-light">
            {product.price === new RegExp("^[1-9]", "g")
              ? `${product.price}лв.`
              : product.price}
          </span>
        ) : null}
        <p className="text-base font-light text-gray-250">
          {product ? product.description : null}
        </p>
        <Button onClick={navigationHandler}>Поръчай</Button>
      </div>
    </div>
  );
};

export default Product;
