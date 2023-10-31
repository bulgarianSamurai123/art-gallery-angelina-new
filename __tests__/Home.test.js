import { render, screen } from "@testing-library/react";

import HomePage from "../pages";

describe("Home page", () => {
  test("should have 'Текстуриран. Минималистичен. Изкуство.' ", () => {
    // ARRANGE
    render(<HomePage />);

    // ACT

    // ASSERT
    const neededText = screen.getByText(
      "Текстуриран. Минималистичен. Изкуство."
    );
    expext(neededText).toBeInTheDocument();
  });
});
