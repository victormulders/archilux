import Image, { StaticImageData } from "next/image";
import LivingRoom from "/public/img/living-room.jpg";
import RoomOne from "/public/img/room-image-1.webp";
import RoomTwo from "/public/img/room-image-2.jpeg";
import RoomFive from "/public/img/living-room-5.jpg";
import Link from 'next/link';

interface ClientFeedback {
  image: StaticImageData;
  author: FeedbackAuthor;
  text: string;
}

interface FeedbackAuthor {
  name: string;
  image: StaticImageData;
}

// FeedbackAuthor interface
const feedbackAuthors: FeedbackAuthor[] = [
  {
    name: "John Doe",
    image: LivingRoom, // Static image reference
  },
  {
    name: "Jane Smith",
    image: RoomOne,
  },
];

// ClientFeedback array with mock data
const clientFeedback: ClientFeedback[] = [
  {
    image: RoomOne, // Static image reference
    author: feedbackAuthors[0],
    text: "This company really exceeded my expectations. The team was professional, and the final product was top-notch!",
  },
  {
    image: RoomTwo,
    author: feedbackAuthors[1],
    text: "I had a wonderful experience. Their attention to detail is remarkable, and the customer support was really excellent!",
  },
  {
    image: RoomFive, // Static image reference
    author: feedbackAuthors[0],
    text: "This company really exceeded my expectations. The team was professional, and the final product was top-notch!",
  },
];

const ClientFeedbackSection = () => {
  return (
    <Link href={'/'} className="py-12 flex md:grid md:grid-cols-3 w-full overflow-x-auto scroll-x snap-x md:container md:snap-none md:gap-8">
      {clientFeedback.map((clientFeedback, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 md:gap-6 w-80 md:w-full snap-center shrink-0 px-4 md:px-0"
        >
          <Image
            alt={""}
            className="rounded-lg h-80 w-80 md:w-full object-cover"
            src={clientFeedback.image}
          />
          <p>&quot;{clientFeedback.text}&quot;</p>
          <hr />
          <div className="flex items-center gap-4">
            <Image
              className="w-16 h-16 rounded-full"
              src={clientFeedback.author.image}
              alt={""}
            />
            <div className="font-bold text-gray-700">
              {clientFeedback.author.name}
            </div>
          </div>
        </div>
      ))}
    </Link>
  );
};

export default ClientFeedbackSection;
