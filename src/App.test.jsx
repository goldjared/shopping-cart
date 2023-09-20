import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./routes/Home";
import ShopItem from "./components/ShopItem";
describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("Home component", () => {
  it("renders correct p", () => {
    render(<Home />);
    expect(screen.getByText("this HOME PAGE")).toBeInTheDocument();
  });
});

describe("ShopItem component", () => {
  it("accepts price as prop", () => {
    render(<ShopItem></ShopItem>);
    expect(screen.getByLabelText("test"));
  });
});
