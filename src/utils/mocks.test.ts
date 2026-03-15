import { describe, it, expect, vi } from "vitest";
import { mapPosters } from "./catalog";
import { makePoster } from "./__testUtils__/makePoster";

const posters = [
  makePoster({ id: 1, title: "Dark Castle", slug: "dark-castle" }),
  makePoster({ id: 2, title: "Neon City", slug: "neon-city" }),
];

describe("mapPosters (mock example)", () => {
  it("calls mapper for each poster and returns mapped values", () => {
    const mapper = vi.fn((p: { slug: string }) => p.slug);

    const res = mapPosters(posters, mapper);

    expect(mapper).toHaveBeenCalledTimes(2);
    expect(mapper).toHaveBeenNthCalledWith(1, posters[0], 0, posters);
    expect(mapper).toHaveBeenNthCalledWith(2, posters[1], 1, posters);
    expect(res).toEqual(["dark-castle", "neon-city"]);
  });

  it("returns empty array and does not call mapper for empty input", () => {
    const mapper = vi.fn((p: { slug: string }) => p.slug);

    const res = mapPosters([], mapper);

    expect(res).toEqual([]);
    expect(mapper).not.toHaveBeenCalled();
  });

  it("can map posters to uppercase slugs", () => {
    const mapper = vi.fn((p: { slug: string }) => p.slug.toUpperCase());

    const res = mapPosters(posters, mapper);

    expect(res).toEqual(["DARK-CASTLE", "NEON-CITY"]);
    expect(mapper).toHaveBeenCalledTimes(2);
  });
});
