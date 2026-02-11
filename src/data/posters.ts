export type Poster = {
  id: number;
  title: string;
  price: number;
  category: "fantasy" | "cyberpunk" | "nature";
};

export const posters: Poster[] = [
  { id: 1, title: "Dark Castle", price: 25, category: "fantasy" },
  { id: 2, title: "Neon City", price: 18, category: "cyberpunk" },
  { id: 3, title: "Old Woods", price: 15, category: "nature" },
  // { id: 4, title: "Old Woods", price: 15, category: "nature" },
  // { id: 5, title: "Old Woods", price: 15, category: "nature" },
  // { id: 6, title: "Old Woods", price: 15, category: "nature" },
  // { id: 7, title: "Old Woods", price: 15, category: "nature" },
  // { id: 8, title: "Old Woods", price: 15, category: "nature" },
  // { id: 9, title: "Old Woods", price: 15, category: "nature" },
];
