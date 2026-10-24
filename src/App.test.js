
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders shopping cart heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /shopping cart/i })
  ).toBeInTheDocument();
});

test("renders product names", () => {
  render(<App />);
  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Headphones")).toBeInTheDocument();
  expect(screen.getByText("Keyboard")).toBeInTheDocument();
});
