import { StaticImageData } from "next/image";
import ClassicRoom from "/public/img/classic-room.jpg";
import MinimalismRoom from "/public/img/minimalism-room.jpg";
import ModernRoom from "/public/img/modern-room.jpg";
import RetroRoom from "/public/img/retro-room.webp";
import TraditionalRoom from "/public/img/traditional-room.webp";

export const businessName = "Rijschool Newway";
export const businessContactPerson = "Victor Mulders";
export const businessEmail = "vhgmulders@gmail.com";
export const businessTel = "+31613110490";
export const businessReadable = "+31 6 1311 0490";
export const businessAddress = "Kerkendijk 57 01";
export const businessZipcode = "5482KG";
export const businessCity = "Schijndel";
export const businessKVK = "91649161";

interface Service {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export interface CarouselCard {
  url: StaticImageData | string;
  title: string;
  id: number;
  pageUrl?: string;
}

const homeCards: CarouselCard[] = [
  {
    url: ClassicRoom,
    title: "Classic",
    id: 1,
  },
  {
    url: ModernRoom,
    title: "Modernism",
    id: 2,
  },
  {
    url: TraditionalRoom,
    title: "Traditionalism",
    id: 3,
  },
  {
    url: MinimalismRoom,
    title: "Minimalism",
    id: 4,
  },
  {
    url: RetroRoom,
    title: "Retro",
    id: 5,
  },
];

const servicesData: Service[] = [
  {
    id: 1,
    title: "Full Home Interior Design",
    description:
      "Our comprehensive full-home interior design service is perfect for those looking to reimagine their entire living space. From concept development to final execution, we’ll work closely with you to design a home that reflects your personality and lifestyle.",
    image: RetroRoom,
  },
  {
    id: 2,
    title: "Room-by-Room Design",
    description:
      "If you're focusing on a specific space, our room-by-room design service is for you. Whether it’s a kitchen, living room, or bedroom, we create cohesive designs that enhance functionality and aesthetic appeal.",
    image: ClassicRoom,
  },
  {
    id: 3,
    title: "Interior Styling",
    description:
      "Looking to add the finishing touches? Our interior styling service helps to select furnishings, decor, and accessories that breathe life into your space. We specialize in sourcing unique items that reflect your individual style.",

    image: MinimalismRoom,
  },
  {
    id: 4,
    title: "Renovation Consulting",
    description:
      "Planning a home renovation? Our expert consultants will guide you through the design and planning process, ensuring that every detail aligns with your vision while maintaining practicality.",

    image: ModernRoom,
  },
  {
    id: 5,
    title: "Custom Furniture & Lighting",
    description:
      "At Archilux, we believe that the right furniture and lighting can elevate a space. We offer custom design solutions for furniture and lighting, ensuring that every element fits seamlessly into your home’s design.",
    image: TraditionalRoom,
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Do you offer eco-friendly furniture options?",
    answer:
      "Yes, we prioritize sustainability in our designs. We offer a wide range of eco-friendly furniture and materials, ensuring that your space is both beautiful and environmentally conscious.",
  },
  {
    question: "How do you incorporate natural light effectively?",
    answer:
      "We strategically use light-enhancing elements such as mirrors, light colors, and thoughtful window treatments to maximize natural light in your space. This not only enhances the aesthetics but also improves energy efficiency.",
  },
  {
    question: "How many consultations does someone typically need?",
    answer:
      "On average, a client requires between 3 to 5 design consultations before we finalize a design plan for their space. This ensures that all elements are tailored to their vision and requirements.",
  },
  {
    question: "What happens during the first design consultation?",
    answer:
      "During the initial consultation, we discuss your goals, preferences, and any specific design challenges. Our designer will assess the space, take measurements, and explore ideas that match your style. By the end of the session, we will have a clear direction for the next steps.",
  },
  {
    question: "Can I book multiple design consultations back-to-back?",
    answer:
      "Yes, you can schedule two consultations consecutively, or spread them out over the week. We offer flexible scheduling to meet your needs, with up to 4 consultations available per week.",
  },
  {
    question: "Is the initial consultation always free?",
    answer:
      "The first consultation is complimentary when you purchase one of our design packages. Otherwise, there is a one-time fee of $100 for the initial consultation.",
  },
];

export interface NavigationItem {
  name: string;
  slug: string;
  hasExtraPages?: boolean;
}

export { faqData, servicesData, homeCards };
