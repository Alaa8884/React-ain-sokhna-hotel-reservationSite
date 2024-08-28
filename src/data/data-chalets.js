import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/CabinImages/`;

 export const chalets = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 6500,
    discount: 900,
    image: imageUrl + "chalet-1.png",
    description:
      "Discover the ultimate luxury getaway for couples in the cozy wooden chalet 001. Nestled in a picturesque forest, this stunning chalet offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 3500,
    discount: 250,
    image: imageUrl + "chalet-2.png",
    description:
      "Escape to the serenity of nature and indulge in luxury in our cozy chalet 002. Perfect for couples, this chalet offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 3000,
    discount: 400,
    image: imageUrl + "chalet-3.png",
    description:
      "Experience luxury family living in our medium-sized wooden chalet 003. Perfect for families of up to 4 people, this chalet offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The chalet has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 5000,
    discount: 500,
    image: imageUrl + "chalet-4.png",
    description:
      "Indulge in the ultimate luxury family vacation in this medium-sized chalet 004. Designed for families of up to 4, this chalet offers a sumptuous retreat for the discerning traveler. Inside, the chalet boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 3850,
    discount: 0,
    image: imageUrl + "chalet-5.png",
    description:
      "Enjoy a comfortable and cozy getaway with your group or family in our spacious chalet 005. Designed to accommodate up to 6 people, this chalet offers a secluded retreat in the heart of nature. Inside, the chalet features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 9000,
    discount: 800,
    image: imageUrl + "chalet-6.webp",
    description:
      "Experience the epitome of luxury with your group or family in our spacious wooden chalet 006. Designed to comfortably accommodate up to 6 people, this chalet offers a lavish retreat in the heart of nature. Inside, the chalet features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 6000,
    discount: 600,
    image: imageUrl + "chalet-7.jfif",
    description:
      "Accommodate your large group or multiple families in the spacious and grand wooden chalet 007. Designed to comfortably fit up to 8 people, this chalet offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the chalet features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The chalet has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 14000,
    discount: 0,
    image: imageUrl + "chalet-8.jfif",
    description:
      "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand chalet 008. This chalet offers a lavish retreat that caters to all your needs and desires. The chalet features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the chalet features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
  },
];
