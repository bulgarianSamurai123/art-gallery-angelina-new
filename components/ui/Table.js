import React from "react";

import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";

const Table = ({ products }) => {
  return (
    <table>
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
            <td className="w-auto">{product.description}</td>
            <td className="flex flex-row">
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
