export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

export const productsData: Product[] = [
  {
    id: "p1",
    name: "Custom Spotify Keychain",
    description: "Scan to play your favorite song. High quality dual-color print.",
    price: "12 TND",
    category: "Keychains",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600",
    featured: true,
  },
  {
    id: "p2",
    name: "Personalized Desk Name Plate",
    description: "Modern geometric design name plate for your office desk.",
    price: "25-35 TND",
    category: "Name Plates",
    imageUrl: "https://images.unsplash.com/photo-1544281146-271ba6a31de1?auto=format&fit=crop&q=80&w=600",
    featured: true,
  },
  {
    id: "p3",
    name: "Articulated Dragon",
    description: "Fully articulated 3D printed dragon toy. Available in silk colors.",
    price: "45 TND",
    category: "Gifts",
    imageUrl: "https://images.unsplash.com/photo-1587834160408-01140026e64c?auto=format&fit=crop&q=80&w=600",
    featured: true,
  },
  {
    id: "p4",
    name: "Minimalist Phone Stand",
    description: "Sturdy, foldable phone stand. Perfect for reading or watching videos.",
    price: "15 TND",
    category: "Gifts",
    imageUrl: "https://images.unsplash.com/photo-1586942548234-dd07ef5aa51c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "p5",
    name: "Replacement Blender Gear",
    description: "Custom modeled replacement gear for standard kitchen blenders.",
    price: "20 TND",
    category: "Spare Parts",
    imageUrl: "https://images.unsplash.com/photo-1590835032599-4674fedbafed?auto=format&fit=crop&q=80&w=600",
    featured: true,
  },
  {
    id: "p6",
    name: "Custom Car Logo Keychain",
    description: "Your favorite car brand logo as a durable keychain.",
    price: "10 TND",
    category: "Keychains",
    imageUrl: "https://images.unsplash.com/photo-1511216113906-8f56bb1c2517?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "p7",
    name: "Drone Camera Mount",
    description: "Lightweight and strong TPU mount for action cameras.",
    price: "30 TND",
    category: "Custom Parts",
    imageUrl: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "p8",
    name: "Infinity Cube Fidget",
    description: "Endless folding fidget toy, printed in place without assembly.",
    price: "18 TND",
    category: "Gifts",
    imageUrl: "https://images.unsplash.com/photo-1601646700547-4f51950e50fd?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "p9",
    name: "Parametric Wall Planter",
    description: "Geometric indoor wall planter for succulents or small plants.",
    price: "35 TND",
    category: "Custom Parts",
    imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "p10",
    name: "Washing Machine Knob",
    description: "Durable replacement knob for older appliances.",
    price: "15 TND",
    category: "Spare Parts",
    imageUrl: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=600",
  }
];

export const getCategories = () => {
  const categories = ["All", ...new Set(productsData.map(p => p.category))];
  return categories;
};
