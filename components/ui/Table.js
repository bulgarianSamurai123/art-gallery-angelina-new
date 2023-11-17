import React from "react";

import RemoveButton from "./Buttons/RemoveButton";
import EditButton from "./Buttons/EditButton";

const Table = ({ products, productID }) => {
  return (
    <table className="table-auto border-separate border-spacing-y-3 border-spacing-x-5">
      <thead>
        <tr>
          <th>Снимка</th>
          <th>Име на продукт</th>
          <th>Цена</th>
          <th>Описание</th>
          <th>Други опций</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.name}>
            <td className="w-28">
              <img src={product.coverImage} alt={product.name} />
            </td>
            <td>{product.name}</td>
            <td>{product.price}лв.</td>
            <td>{product.description}</td>
            <td className="flex flex-row gap-2">
              <RemoveButton />
              <EditButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
