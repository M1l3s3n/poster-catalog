import { describe, it, expect } from "vitest";
import { getDiscountedPrice } from "./pricing";

describe("getDiscountedPrice", () => {
  it("returns same price when discount is undefined", () => {
    expect(getDiscountedPrice(18)).toBe(18);
  });

  it("applies percentage discount and rounds to 2 decimals", () => {
    expect(getDiscountedPrice(25, 10)).toBe(22.5);
    expect(getDiscountedPrice(19.99, 15)).toBe(16.99);
  });

  it("returns same price when discount <= 0", () => {
    expect(getDiscountedPrice(25, 0)).toBe(25);
    expect(getDiscountedPrice(25, -10)).toBe(25);
  });
});
