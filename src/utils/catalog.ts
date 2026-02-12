import type { Poster } from "../data/posters";

export function searchPosters(items: Poster[], query: string): Poster[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter((p) => p.title.toLowerCase().includes(q));
}

export function filterByCategory(
  items: Poster[],
  category?: Poster["category"],
): Poster[] {
  if (!category) return items;
  return items.filter((p) => p.category === category);
}

export function mapPosters<T>(items: Poster[], mapper: (p: Poster) => T): T[] {
  return items.map(mapper);
}
