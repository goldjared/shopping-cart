import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CartCounter from "./CartCounter";
import { shoppingCart } from "../cartStorage";

describe("CartCounter", () => {
  it("renders CartCounter component is 0", () => {
    render(<CartCounter />)

    expect(screen.getByText('0'));
  });
  
  it("renders CartCounter component is 1", () => {
    // shopProducts();
    shoppingCart.push({quantity: 1});
    render(<CartCounter />)

    expect(screen.getByText('1'));
  });
});


