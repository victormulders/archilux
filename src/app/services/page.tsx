import Image from "next/image";
import PageIntroSection from "@/app/components/PageIntroSection";
import RoomFive from "/public/img/living-room-6.jpg";
import { Paintbrush, Ruler, Home, Lightbulb, Quote } from "lucide-react";
import ClientFeedbackSection from "@/app/components/client-feedback-section/ClientFeedbackSection";
import { CheckIcon } from "@heroicons/react/20/solid";
import RoomSix from "/public/img/living-room-6.jpg";
import RoomOne from "/public/img/room-image-1.webp";

const services = [
  {
    title: "Residential Interior Design",
    description:
      "Transform your home into a stylish and functional living space tailored to your lifestyle.",
    icon: <Home className="w-10 h-10 text-primary" />,
  },
  {
    title: "Commercial Interior Design",
    description:
      "Create an inspiring and efficient workspace that enhances productivity and reflects your brand identity.",
    icon: <Ruler className="w-10 h-10 text-primary" />,
  },
  {
    title: "Custom Furniture & Styling",
    description:
      "Handpicked furniture and décor solutions that bring personality and cohesion to your interiors.",
    icon: <Paintbrush className="w-10 h-10 text-primary" />,
  },
  {
    title: "Lighting & Ambiance",
    description:
      "Strategic lighting design to enhance mood, functionality, and the overall aesthetic of your space.",
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageIntroSection title={"Services we provide"} image={RoomFive} />

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We blend creativity with functionality to craft spaces that reflect
          your personality and needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full h-96 md:w-1/2">
            <Image
              src={RoomOne}
              alt="Luxury Interior Design"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              With a keen eye for detail and a passion for design, we create
              spaces that blend elegance, comfort, and practicality.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-2 items-center">
                <CheckIcon className="h-6 md:h-8 w-6 md:w-8" />
                Tailored designs to match your style
              </li>
              <li className="flex gap-2 items-center">
                <CheckIcon className="h-6 md:h-8 w-6 md:w-8" />
                Expert team with years of experience
              </li>
              <li className="flex gap-2 items-center">
                <CheckIcon className="h-6 md:h-8 w-6 md:w-8" />
                High-quality materials & craftsmanship
              </li>
              <li className="flex gap-2 items-center">
                <CheckIcon className="h-6 md:h-8 w-6 md:w-8" />
                Seamless process from concept to completion
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ClientFeedbackSection />
    </div>
  );
}
