import { describe, it, expect } from "vitest";
import { searchPosters, filterByCategory } from "./catalog";
import { makePoster } from "./__testUtils__/makePoster";
import type { Poster } from "../data/posters";

const posters: Poster[] = [
  makePoster({ id: 1, title: "Dark Castle", category: "fantasy", price: 25 }),
  makePoster({ id: 2, title: "Neon City", category: "cyberpunk", price: 18 }),
  makePoster({ id: 3, title: "Old Woods", category: "nature", price: 15 }),
];

describe("searchPosters", () => {
  it("returns original items when query is empty", () => {
    const res = searchPosters(posters, "");
    expect(res).toBe(posters);
  });

  it("returns original items when query is whitespace", () => {
    const res = searchPosters(posters, "   ");
    expect(res).toBe(posters);
  });

  it("matches case-insensitively", () => {
    const res = searchPosters(posters, "dark");
    expect(res.map((p) => p.id)).toEqual([1]);
  });

  it("trims query before searching", () => {
    const res = searchPosters(posters, "  neon  ");
    expect(res.map((p) => p.id)).toEqual([2]);
  });

  it("returns empty array when no matches", () => {
    const res = searchPosters(posters, "zzzz");
    expect(res).toEqual([]);
  });
});

describe("filterByCategory", () => {
  it("returns original items when category is undefined", () => {
    const res = filterByCategory(posters, undefined);
    expect(res).toBe(posters);
  });

  it("filters by category correctly", () => {
    const res = filterByCategory(posters, "nature");
    expect(res.map((p) => p.id)).toEqual([3]);
  });
});
