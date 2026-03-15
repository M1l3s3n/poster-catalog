import { describe, it, expect } from "vitest";
import { getDiscountedPrice } from "./pricing";

describe("broken test example", () => {
  it("should fail intentionally", () => {
    expect(getDiscountedPrice(25, 10)).toBe(25);
  });
});
