import { IconType } from "react-icons/lib";
import { bread, cake, chicken, client1, desserts, drinks, main1, main2, pastas, pizza, pizzas, salad, salmon, sides, smoothie, spaghetti, stars } from "../assets";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

export interface NavType {
  id: string;
  title: string;
}

export const navItems: NavType[] = [
  { id: "menu", title: "Menu" },
  { id: "gallery", title: "gallery" },
  { id: "testimonials", title: "testimonials" },
  { id: "reservation", title: "reservation" },
  { id: "contact", title: "contact" },
];

export interface menuType {
  img: string;
  title: string;
  description: string;
  price: number;
}

// ************** menu data
export const menu: menuType[] = [
  {
    img: salmon,
    title: "Grilled Salmon",
    description: "Freshly grilled with lemon sauce.",
    price: 18.99
  },
  {
    img: chicken,
    title: "BBQ Chicken",
    description: "Smoky and juicy with BBQ glaze.",
    price: 16.99
  },
  {
    img: pizza,
    title: "Margherita Pizza",
    description: "Tomato, mozzarella, and fresh basil.",
    price: 14.99
  },
  {
    img: spaghetti,
    title: "Spaghetti Alfredo",
    description: "Creamy white sauce with parmesan.",
    price: 15.99
  },
  {
    img: salad,
    title: "Greek Salad",
    description: "Feta, olives, and crisp veggies.",
    price: 9.99
  },
  {
    img: bread,
    title: "Garlic Bread",
    description: "Toasted with butter and herbs.",
    price: 5.99
  },
  {
    img: cake,
    title: "Lava Cake",
    description: "Warm chocolate with a gooey center.",
    price: 8.99
  },
  {
    img: smoothie,
    title: "Berry Smoothie",
    description: "Fresh mixed berries and yogurt.",
    price: 6.99
  }
];

// ************** gallery data
export interface galleryType {
  img: string;
  alt: string;
}

export const gallery: galleryType[] = [
  {
    img: main1,
    alt: "Main Dishes"
  },
  {
    img: main2,
    alt: "Main Dishes"
  },
  {
    img: pizzas,
    alt: "Pizzas"
  },
  {
    img: pastas,
    alt: "Pastas"
  },
  {
    img: salad,
    alt: "Salads"
  },
  {
    img: sides,
    alt: "Sides"
  },
  {
    img: desserts,
    alt: "Desserts"
  },
  {
    img: drinks,
    alt: "Drinks"
  }
];

// testimonials
export interface testimonialsType {
  authImg: string;
  authName: string;
  authJob: string;
  stars: string;
  text: string;
}

export const testimonials: testimonialsType[] = [
  {
    stars: stars,
    authImg: client1,
    authName: "Emily R.",
    authJob: "Food Blogger",
    text: "“ An absolute delight! The ambiance is perfect, and the food is simply outstanding. Every dish is crafted with perfection, and the service is top-notch. Highly recommended! ”"
  },
  {
    stars: stars,
    authImg: client1,
    authName: "James M.",
    authJob: "Frequent Diner",
    text: "“ From the warm welcome to the last bite, everything was exceptional. The flavors, presentation, and atmosphere make this my go-to restaurant! ”"
  },
  {
    stars: stars,
    authImg: client1,
    authName: "Sophia L.",
    authJob: "First-Time Visitor",
    text: "“ I was blown away by the quality and taste of the dishes! The staff was incredibly friendly, and the experience was unforgettable. I’ll definitely be back! ”"
  }
]

// contact info
export interface contactType {
  icon: IconType;
  text: string;
}

export const contact: contactType[] = [
  {icon: FaPhone, text: "+123-456-7890"},
  {icon: IoMdMail, text: "alamenmohamed@gmail.com"},
  {icon: IoLocationOutline, text: "Sudan, WNS st, Rabak"},
  {icon: CiGlobe, text: "mohamed-alamen.vercel.app"}
]