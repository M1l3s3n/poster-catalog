export type PosterCategory = "fantasy" | "cyberpunk" | "nature";

export type PosterSize = "A4" | "A3" | "A2" | "A1";

export type PosterMaterial = "matte" | "glossy" | "canvas";

export type Poster = {
  id: number;

  // основне
  title: string;
  slug: string;
  price: number;
  discountPercentage?: number;

  // категорія та теги
  category: PosterCategory;
  tags: string[];

  // опис
  shortDescription: string;
  fullDescription: string;

  // технічні характеристики
  availableSizes: PosterSize[];
  material: PosterMaterial;
  weightGrams: number;

  // наявність
  stock: number;
  rating: number; // 0–5
  reviewsCount: number;

  // зображення
  thumbnail: string;
  images: string[];

  // метадані
  createdAt: string;
  isFeatured: boolean;
};

export const posters: Poster[] = [
  {
    id: 1,
    title: "Dark Castle",
    slug: "dark-castle",
    price: 25,
    discountPercentage: 10,
    category: "fantasy",
    tags: ["dark", "castle", "gothic"],

    shortDescription: "A mysterious dark castle under stormy skies.",
    fullDescription:
      "High quality fantasy poster printed on premium matte paper. Perfect for dark fantasy lovers and gothic interiors.",

    availableSizes: ["A4", "A3", "A2"],
    material: "matte",
    weightGrams: 250,

    stock: 12,
    rating: 4.6,
    reviewsCount: 38,

    thumbnail: "/images/dark-castle-thumb.jpg",
    images: ["/images/dark-castle-1.jpg", "/images/dark-castle-2.jpg"],

    createdAt: "2024-01-12",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Neon City",
    slug: "neon-city",
    price: 18,
    category: "cyberpunk",
    tags: ["neon", "future", "city"],

    shortDescription: "Cyberpunk skyline with neon reflections.",
    fullDescription:
      "Futuristic cyberpunk city with vibrant neon lights. Printed on glossy high-resolution paper.",

    availableSizes: ["A4", "A3"],
    material: "glossy",
    weightGrams: 220,

    stock: 8,
    rating: 4.2,
    reviewsCount: 21,

    thumbnail: "/images/neon-city-thumb.jpg",
    images: ["/images/neon-city-1.jpg"],

    createdAt: "2024-03-02",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Old Woods",
    slug: "old-woods",
    price: 15,
    category: "nature",
    tags: ["forest", "mist", "nature"],

    shortDescription: "Misty forest at sunrise.",
    fullDescription:
      "Atmospheric nature poster with soft morning light. Ideal for calm interiors.",

    availableSizes: ["A4", "A3", "A2", "A1"],
    material: "canvas",
    weightGrams: 300,

    stock: 20,
    rating: 4.8,
    reviewsCount: 52,

    thumbnail: "/images/old-woods-thumb.jpg",
    images: ["/images/old-woods-1.jpg"],

    createdAt: "2024-02-10",
    isFeatured: true,
  },
];
