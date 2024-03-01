import React from "react";

const ProductDescription = ({product, navigationHandler, Button}) => {
  return (
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
  );
};

export default ProductDescription;
