import type { Poster } from "../../data/posters";

export function makePoster(override: Partial<Poster> = {}): Poster {
  return {
    id: 999,
    title: "Untitled",
    slug: "untitled",
    price: 10,
    discountPercentage: undefined,

    category: "fantasy",
    tags: [],

    shortDescription: "Short description",
    fullDescription: "Full description",

    availableSizes: ["A4"],
    material: "matte",
    weightGrams: 250,

    stock: 10,
    rating: 4.5,
    reviewsCount: 10,

    thumbnail: "/images/placeholder-thumb.jpg",
    images: ["/images/placeholder-1.jpg"],

    createdAt: "2024-01-01",
    isFeatured: false,

    ...override,
  };
}
