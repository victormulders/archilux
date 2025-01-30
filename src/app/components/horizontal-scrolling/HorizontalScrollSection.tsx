"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { CarouselCard, homeCards } from "@/common/static/Constants";
import Link from "next/link";

const HorizontalScrollCarousel = ({
  cards,
  isLarge = false,
}: {
  cards: CarouselCard[];
  isLarge?: boolean;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="w-auto md:w-full flex gap-0 px-4 md:px-8"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} isLarge={isLarge} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, isLarge }: { card: CarouselCard; isLarge: boolean }) => {
  return (
    <Link
      href={card.pageUrl || ""}
      key={card.id}
      target="_top"
      className="relative group cursor-pointer flex flex-col items-center gap-2 w-80 md:w-1/3 shrink-0 px-2 hover:brightness-100 brightness-75 transition-all"
    >
      <div
        className={`${isLarge ? "xl:h-[50rem]" : "xl:h-[30rem]"} relative h-[30rem] w-full`}
      >
        <Image
          fill
          alt={card.title}
          className="rounded-lg object-cover"
          src={card.url}
        />
      </div>
      <div className="text-xl uppercase font-semibold text-gray-700">
        {card.title}
      </div>
      {/*<div className="flex absolute top-0 invisible group-hover:visible">*/}
      {/*  <p>hallo</p>*/}
      {/*</div>*/}
    </Link>
  );
};

export default HorizontalScrollCarousel;
