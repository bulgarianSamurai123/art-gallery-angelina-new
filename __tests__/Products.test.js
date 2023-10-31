import { render, screen } from "@testing-library/react";

import ProductPage from "../pages/products";
import { getProducts } from "../helpers/api-util";

describe("Products page", () => {
  it("should fetch products", async () => {
    // ARRANGE
    const products = await getProducts();

    // ACT

    // ASSERT
    await expect(products.length).toBeGreaterThan()(1)
  });
});
