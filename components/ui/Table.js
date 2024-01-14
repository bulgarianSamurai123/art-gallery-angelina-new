import React, { useEffect, useState } from "react";
import { deleteObject, ref } from "firebase/storage";

import { storage } from "../../helpers/firebase";
import RemoveButton from "./Buttons/RemoveButton";
import EditButton from "./Buttons/EditButton";

const Table = ({ products, setRequestStatus, setRequestError }) => {
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  async function handleDeleteItem(itemId) {
    setRequestStatus("pending");

    try {
      const response = await fetch(
        `https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/products/${itemId}.json`
      );

      if (!response.ok) {
        setRequestStatus("error");
        setRequestError(error);
      }

      const data = await response.json();
      const imageUrl = data.coverImage;

      const deleteResponse = await fetch(
        `https://art-gallery-angelina-default-rtdb.europe-west1.firebasedatabase.app/products/${itemId}.json`,
        {
          method: "DELETE",
        }
      );

      if (!deleteResponse.ok) {
        setRequestStatus("error");
        setRequestError(error);
      }

      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);

      setProductList((prevProducts) =>
        prevProducts.filter((product) => product.id !== itemId)
      );

      setRequestStatus("success");
      console.log("User deleted successfully");
    } catch (error) {
      setRequestStatus("error");
      setRequestError(error);
    }
  }

  return (
    <table className="table-auto border-separate border-spacing-y-3 border-spacing-x-5">
      <thead>
        <tr>
          <th>Снимка</th>
          <th>Име на продукт</th>
          <th>Цена</th>
          <th>Описание</th>
          <th>Специален продукт</th>
          <th>Други опций</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((product) => (
          <tr key={product.id}>
            <td className="w-28">
              <img src={product.coverImage} alt={product.name} />
            </td>
            <td>{product.name}</td>
            <td>
              {product.price === new RegExp("^[1-9]", "g")
                ? `${product.price}лв.`
                : product.price}
            </td>
            <td>{product.description}</td>
            <td className="text-sm">
              {product.isFeatured ? "Специален" : "Не е специален"}
            </td>
            <td className="flex flex-row gap-2">
              <RemoveButton
                buttonType="product"
                handlerDeleteItem={() => {
                  handleDeleteItem(product.id);
                }}
                productID={product.id}
              />
              <EditButton
                buttonType="product"
                link={`/admin/edit-product/${product.id}`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
