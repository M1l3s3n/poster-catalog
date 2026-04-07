export type PosterCategory = "fantasy" | "cyberpunk" | "nature";
export type PosterSize = "A4" | "A3" | "A2" | "A1";
export type PosterMaterial = "matte" | "glossy" | "canvas";

export type Poster = {
  id: number;
  title: string;
  slug: string;
  price: number;
  discountPercentage?: number;

  category: PosterCategory;
  tags: string[];

  shortDescription: string;
  fullDescription: string;

  availableSizes: PosterSize[];
  material: PosterMaterial;
  weightGrams: number;

  stock: number;
  rating: number;
  reviewsCount: number;

  thumbnail: string;
  images: string[];

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
    thumbnail:
      "https://i.etsystatic.com/39406221/r/il/744948/4610770583/il_1080xN.4610770583_4zdp.jpg",
    images: [
      "https://i.etsystatic.com/39406221/r/il/744948/4610770583/il_1080xN.4610770583_4zdp.jpg",
    ],
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
    thumbnail: "https://cdng.europosters.eu/pod_public/1300/148188.jpg",
    images: ["https://cdng.europosters.eu/pod_public/1300/148188.jpg"],
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
    thumbnail:
      "https://st2.depositphotos.com/33669834/42762/i/450/depositphotos_427624884-stock-photo-magical-old-tree-fog-amazing.jpg",
    images: [
      "https://st2.depositphotos.com/33669834/42762/i/450/depositphotos_427624884-stock-photo-magical-old-tree-fog-amazing.jpg",
    ],
    createdAt: "2024-02-10",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Dragon's Peak",
    slug: "dragons-peak",
    price: 30,
    discountPercentage: 15,
    category: "fantasy",
    tags: ["dragon", "mountain", "epic"],
    shortDescription: "A mighty dragon perched atop a volcanic mountain.",
    fullDescription:
      "Epic fantasy poster featuring a fire-breathing dragon dominating a stormy volcanic peak. Printed on premium matte paper with deep, rich colors.",
    availableSizes: ["A4", "A3", "A2", "A1"],
    material: "matte",
    weightGrams: 260,
    stock: 9,
    rating: 4.9,
    reviewsCount: 74,
    thumbnail:
      "https://i.pinimg.com/736x/a1/6a/02/a16a023c419d39015b8a2de0fb4c7508.jpg",
    images: [
      "https://i.pinimg.com/736x/a1/6a/02/a16a023c419d39015b8a2de0fb4c7508.jpg",
    ],
    createdAt: "2024-04-18",
    isFeatured: true,
  },
  {
    id: 5,
    title: "Cyber Rain",
    slug: "cyber-rain",
    price: 22,
    category: "cyberpunk",
    tags: ["rain", "hacker", "dystopia"],
    shortDescription: "A lone hacker in a rain-soaked neon alley.",
    fullDescription:
      "Dark cyberpunk atmosphere with a hooded figure standing in a glowing, rain-drenched urban corridor. High-contrast glossy print.",
    availableSizes: ["A4", "A3", "A2"],
    material: "glossy",
    weightGrams: 230,
    stock: 14,
    rating: 4.5,
    reviewsCount: 33,
    thumbnail:
      "https://images.unsplash.com/photo-1564836663277-c4aa761b9882?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1564836663277-c4aa761b9882?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    createdAt: "2024-05-07",
    isFeatured: false,
  },
  {
    id: 6,
    title: "Aurora Peaks",
    slug: "aurora-peaks",
    price: 28,
    discountPercentage: 5,
    category: "nature",
    tags: ["aurora", "mountains", "night"],
    shortDescription: "Northern lights dancing over snowy mountain peaks.",
    fullDescription:
      "Breathtaking nature poster capturing the aurora borealis above a frozen mountain range. Canvas print with vivid luminous tones.",
    availableSizes: ["A3", "A2", "A1"],
    material: "canvas",
    weightGrams: 310,
    stock: 6,
    rating: 4.7,
    reviewsCount: 61,
    thumbnail:
      "https://images.unsplash.com/photo-1715653561433-66643a4051c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1715653561433-66643a4051c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    createdAt: "2024-06-14",
    isFeatured: true,
  },
  {
    id: 7,
    title: "Mech Uprising",
    slug: "mech-uprising",
    price: 20,
    category: "cyberpunk",
    tags: ["mech", "robot", "war"],
    shortDescription: "Giant battle mech stomping through a ruined megacity.",
    fullDescription:
      "Intense cyberpunk poster depicting a towering war machine amid crumbling skyscrapers and electric storms. Glossy finish with metallic sheen.",
    availableSizes: ["A4", "A3"],
    material: "glossy",
    weightGrams: 215,
    stock: 11,
    rating: 4.3,
    reviewsCount: 28,
    thumbnail:
      "https://i.pinimg.com/736x/dc/2a/6b/dc2a6b28e6c440026dc9c163455749c7.jpg",
    images: [
      "https://i.pinimg.com/736x/dc/2a/6b/dc2a6b28e6c440026dc9c163455749c7.jpg",
    ],
    createdAt: "2024-07-03",
    isFeatured: false,
  },
  {
    id: 8,
    title: "Enchanted Grove",
    slug: "enchanted-grove",
    price: 24,
    discountPercentage: 20,
    category: "fantasy",
    tags: ["magic", "forest", "fairy"],
    shortDescription: "A glowing fairy grove hidden deep in an ancient forest.",
    fullDescription:
      "Magical fantasy poster showing a luminous enchanted grove with floating light sprites and ancient mossy trees. Matte print with soft pastel tones.",
    availableSizes: ["A4", "A3", "A2"],
    material: "matte",
    weightGrams: 250,
    stock: 17,
    rating: 4.6,
    reviewsCount: 45,
    thumbnail:
      "https://i.pinimg.com/736x/c6/a3/77/c6a3779f1768113de60d68c704b15049.jpg",
    images: [
      "https://i.pinimg.com/736x/c6/a3/77/c6a3779f1768113de60d68c704b15049.jpg",
    ],
    createdAt: "2024-08-22",
    isFeatured: false,
  },
  {
    id: 9,
    title: "Desert Dunes",
    slug: "desert-dunes",
    price: 19,
    category: "nature",
    tags: ["desert", "sand", "dunes"],
    shortDescription: "Golden sand dunes under a blazing sunset sky.",
    fullDescription:
      "Minimalist nature poster with sweeping desert dunes bathed in warm orange light. Canvas print ideal for bright, airy interiors.",
    availableSizes: ["A4", "A3", "A2"],
    material: "canvas",
    weightGrams: 295,
    stock: 23,
    rating: 4.4,
    reviewsCount: 39,
    thumbnail:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop",
    ],
    createdAt: "2024-09-05",
    isFeatured: false,
  },
  {
    id: 10,
    title: "Neon Samurai",
    slug: "neon-samurai",
    price: 26,
    discountPercentage: 10,
    category: "cyberpunk",
    tags: ["samurai", "neon", "japan"],
    shortDescription: "A cybernetic samurai illuminated by neon kanji signs.",
    fullDescription:
      "Striking fusion of ancient warrior culture and futuristic neon aesthetics. High-detail glossy print with vivid magenta and cyan contrasts.",
    availableSizes: ["A4", "A3", "A2", "A1"],
    material: "glossy",
    weightGrams: 235,
    stock: 10,
    rating: 4.8,
    reviewsCount: 57,
    thumbnail:
      "https://i.pinimg.com/736x/4b/a9/1a/4ba91a5fa0d6928ee4058d99e1ef9a91.jpg",
    images: [
      "https://i.pinimg.com/736x/4b/a9/1a/4ba91a5fa0d6928ee4058d99e1ef9a91.jpg",
    ],
    createdAt: "2024-10-11",
    isFeatured: true,
  },
  {
    id: 11,
    title: "Arcane Tower",
    slug: "arcane-tower",
    price: 32,
    category: "fantasy",
    tags: ["wizard", "tower", "magic"],
    shortDescription: "A lone wizard's tower crackling with arcane energy.",
    fullDescription:
      "Dramatic fantasy poster of a spell-wreathed tower rising from storm clouds, lightning coiling around its spire. Premium matte print with deep purples and electric blues.",
    availableSizes: ["A4", "A3", "A2"],
    material: "matte",
    weightGrams: 255,
    stock: 5,
    rating: 4.7,
    reviewsCount: 43,
    thumbnail:
      "https://i.pinimg.com/736x/00/c7/d9/00c7d977c730f6ea614984ca03a8c884.jpg",
    images: [
      "https://i.pinimg.com/736x/00/c7/d9/00c7d977c730f6ea614984ca03a8c884.jpg",
    ],
    createdAt: "2024-11-18",
    isFeatured: false,
  },
];
