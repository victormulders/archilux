"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LivingRoom from "/public/img/living-room.jpg";
import RoomOne from "/public/img/room-image-1.webp";
import RoomTwo from "/public/img/room-image-2.jpeg";
import RoomFive from "/public/img/living-room-5.jpg";
import RoomFour from '/public/img/living-room-4.jpg';
import Image, { StaticImageData } from 'next/image';


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0">
          {cards.map((card) => {
            return <Card id={card.id} title={card.title} url={card.url} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  url,
  title,
  id,
}: {
  url: StaticImageData;
  title: string;
  id: number;
}) => {
  return (
    <div key={id} className="flex flex-col items-center gap-2 w-80 md:w-1/3 shrink-0 px-2">
      <Image
        alt={""}
        className="rounded-lg h-[30rem] object-cover"
        src={url}
      />
      <div className="text-xl uppercase font-semibold text-gray-700">
        {title}
      </div>
    </div>
  );
};

const cards = [
  {
    url: LivingRoom,
    title: "Classic",
    id: 1,
  },
  {
    url: RoomOne,
    title: "Modernism",
    id: 2,
  },
  {
    url: RoomTwo,
    title: "Traditionalism",
    id: 3,
  },
  {
    url: RoomFour,
    title: "Minimalism",
    id: 4,
  },
  {
    url: RoomFive,
    title: "Futuristic",
    id: 5,
  },
];

export default HorizontalScrollCarousel;
