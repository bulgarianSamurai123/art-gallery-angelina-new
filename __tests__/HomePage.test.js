import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import userEvent from "@testing-library/user-event";

import Hero from "../components/pages/home/Hero";
import SpecialProducts from "../components/pages/home/SpecialProducts";
import FeaturedProducts from "../components/pages/products/FeaturedProducts";

jest.mock("next/router", () => require("next-router-mock"));

describe("Home Page", () => {
  describe("Hero Section", () => {
    describe("Rendering", () => {
      test("should display Angelina Art Gallery", () => {
        render(<Hero />);
        expect(screen.getByText(/Angelina's Art Gallery/i)).toBeInTheDocument();
      });
    });
    describe("Behavior", () => {
      test("should redirect to the Products pages", async () => {
        render(<Hero />);
        expect(mockRouter.asPath).toEqual("/");

        const button = screen.getByRole("button", { name: /Пазарувай/i });
        await userEvent.click(button);

        expect(mockRouter.asPath).toEqual("/products");
      });
    });
  });
  describe("Special Products Section", () => {
    describe("Rendering", () => {
      test("should contain at least 1 product", () => {
        render(
          <SpecialProducts
            products={[
              { id: 1, name: "Test Product", price: 100, description: "Test" },
            ]}
          />
        );
        expect(screen.getByText(/test/i)).toBeInTheDocument();
      });
    });
    describe("Behavior", () => {
      test("should redirect to the product detail page", async () => {
        render(
          <SpecialProducts
            products={[
              {
                id: "test",
                name: "Test Product",
                price: 100,
                description: "Test",
              },
            ]}
          />
        );
        expect(mockRouter.asPath).toEqual("/");

        const product = screen.findByRole("link");
        await userEvent.click(product);

        expect(mockRouter.asPath).toEqual("test");
      });
    });
  });
});
