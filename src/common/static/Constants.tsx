import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  ForwardIcon,
  IdentificationIcon,
} from "@heroicons/react/16/solid";
import React, { ReactElement } from "react";

interface InformationCard {
  title: string;
  icon: ReactElement;
  description: string;
}

const informationCards: InformationCard[] = [
  {
    title: "Jouw rijbewijs",
    icon: <IdentificationIcon className="h-16 w-16 text-primary-500" />,
    description:
      "Bereid je voor op zelfverzekerd rijden met Autorijschool. Onze toegewijde instructeurs staan klaar om je te begeleiden op de weg naar het behalen van je rijbewijs.",
  },
  {
    title: "Direct contact",
    icon: <ChatBubbleLeftRightIcon className="h-16 w-16 text-primary-500" />,
    description:
      "Neem direct contact met ons op bij Autorijschool. We staan paraat om al je vragen te beantwoorden en je te ondersteunen op je reis naar zelfverzekerd rijden.",
  },
  {
    title: "Spoedcursus",
    icon: <ForwardIcon className="h-16 w-16 text-primary-500" />,
    description:
      "Kies voor de spoedcursus bij Autorijschool en versnel je weg naar het behalen van je rijbewijs. Onze intensieve training is ontworpen om snel en effectief resultaten te behalen.",
  },
  {
    title: "Theorie",
    icon: <ClipboardDocumentCheckIcon className="h-16 w-16 text-primary-500" />,
    description:
      "Begrijp de essentiële theoretische aspecten van autorijden met Autorijschool. Onze focus op theorie zal je helpen om zelfverzekerd en goed geïnformeerd de weg op te gaan.",
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

export { faqData, informationCards };
