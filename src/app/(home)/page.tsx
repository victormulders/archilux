import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import SectionTitle from "@/app/components/SectionTitle";
import HorizontalScroll from "@/app/components/horizontal-scrolling/HorizontalScrollSection";
import ZoomParallax from "@/app/components/ZoomParallax";
import ClientFeedbackSection from "@/app/components/client-feedback-section/ClientFeedbackSection";
import Faq from "@/app/components/Faq";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Input } from "@headlessui/react";
import LivingRoom from "/public/img/living-room.jpg";
import RoomFive from "/public/img/living-room-5.jpg";
import RoomTwo from "/public/img/room-image-2.jpeg";

export default function Home() {
  return (
    <>
      <section className="h-screen lg:h-[85svh]">
        <div className="relative w-full h-full lg:[clip-path:inset(0_0_0_0)]">
          <div className="relative lg:fixed h-full w-full left-0 top-0">
            <Image
              fill
              className="object-center object-cover pointer-events-none brightness-75"
              src={LivingRoom}
              alt={"Living room"}
              priority
            />
          </div>
          <div className="absolute lg:relative top-0 z-1 container flex flex-col gap-4 md:gap-8 items-center justify-center h-full text-center">
            <h1 className="text-4xl md:text-7xl font-medium text-white mt-0">
              Turning Houses into Homes, One Design at a Time
            </h1>
            <p className="text-xl leading-normal text-gray-200 lg:text-xl xl:text-2xl">
              With every project we undertake, we are committed to turning
              houses into homes, one design at a time.
            </p>
            {/*<HeroContent />*/}
            <div className="flex flex-col items-start gap-4 sm:gap-2 sm:items-center sm:flex-row">
              <Link
                href={"/contact"}
                className="primary-button arrow-button flex w-fit items-center"
              >
                Explore Our Projects{" "}
                <ArrowUpRightIcon className="ml-2 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container flex flex-col md:flex-row gap-8 py-20 md:py-28">
        <SectionTitle
          title={"Architecture Interior."}
          pretitle={"Categories"}
        />

        <p>
          Designing an architectural interior involves integrating
          functionality, aesthetics, and user experience to create spaces that
          are both visually appealing and practical. Here is a step-by-step
          guide to designing an architectural interior.
        </p>
      </section>

      {/*//TODO hier sideways scroll op zetten?*/}
      {/*<div className="flex w-full overflow-x-auto scroll-x snap-x">*/}
      {/*  <div className="flex flex-col items-center gap-2 w-80 snap-center shrink-0 px-4">*/}
      {/*    <Image*/}
      {/*      alt={""}*/}
      {/*      className="rounded-lg h-[30rem] w-80 object-cover"*/}
      {/*      src={RoomOne}*/}
      {/*    />*/}
      {/*    <div className="text-xl uppercase font-semibold text-gray-500">*/}
      {/*      Classic*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="flex flex-col items-center gap-2 w-80 snap-center shrink-0 px-4">*/}
      {/*    <Image*/}
      {/*      src={RoomTwo}*/}
      {/*      alt={""}*/}
      {/*      className="rounded-lg h-[30rem] w-80 object-cover"*/}
      {/*    />*/}
      {/*    <div className="text-xl uppercase font-semibold text-gray-500">*/}
      {/*      Modern*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="flex flex-col items-center gap-2 w-80 snap-center shrink-0 px-4">*/}
      {/*    <Image*/}
      {/*      alt={""}*/}
      {/*      className="rounded-lg h-[30rem] w-80 object-cover"*/}
      {/*      src={LivingRoom}*/}
      {/*    />*/}
      {/*    <div className="text-xl uppercase font-semibold text-gray-500">*/}
      {/*      Minimalism*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <HorizontalScroll />

      <section className="container py-20 md:py-28 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-6">
          <div className="text-6xl text-primary-500 font-semibold">8K</div>
          <div className="flex flex-col gap-2">
            <div className="text-primary-500 text-xl font-bold">
              Interior Projects
            </div>
            <div className="text-gray-500 font-semibold">
              Designing spaces that inspire, delight
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-6xl text-primary-500 font-semibold">30</div>
          <div className="flex flex-col gap-2">
            <div className="text-primary-500 text-xl font-bold">
              Years of Work
            </div>
            <div className="text-gray-500 font-semibold">
              Designing spaces that inspire, delight
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-6xl text-primary-500 font-semibold">16K</div>
          <div className="flex flex-col gap-2">
            <div className="text-primary-500 text-xl font-bold">
              Satisfied Clients
            </div>
            <div className="text-gray-500 font-semibold">
              Designing spaces that inspire, delight
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-6xl text-primary-500 font-semibold">99%</div>
          <div className="flex flex-col gap-2">
            <div className="text-primary-500 text-xl font-bold">Happy rate</div>
            <div className="text-gray-500 font-semibold">
              Designing spaces that inspire, delight
            </div>
          </div>
        </div>
      </section>

      <section className="container flex flex-col md:flex-row py-20 md:py-28 gap-8 md:gap-16 items-center">
        <Image
          className="flex-1 rounded-lg h-56 md:h-96 object-cover"
          src={RoomTwo}
          alt={""}
        />
        <div className="flex-1 flex flex-col gap-4">
          <SectionTitle
            title={"Turning Houses into Homes, One Design at a Time"}
            pretitle="About Us"
          />
          <p>
            With every project we undertake, we are committed to turning houses
            into homes, one design at a time.
          </p>
          <Link
            href={"/contact"}
            className="primary-button arrow-button flex w-fit items-center"
          >
            Explore Our Projects <ArrowUpRightIcon className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>

      <section className="container flex flex-col md:flex-row gap-8 py-20 md:py-28">
        <SectionTitle title={"Interior Design Gallery"} pretitle="Gallery" />
        <p>
          Develop a concept or theme that will guide the design process. This
          could be inspired by the clients preferences, the buildings
          architecture, or a specific design style.
        </p>
      </section>
      <ZoomParallax />

      <section className="h-screen lg:h-full">
        <div className="relative w-full h-full lg:[clip-path:inset(0_0_0_0)]">
          <div className="relative lg:fixed h-full w-full left-0 top-0">
            <Image
              fill
              className="rounded-none object-center object-cover pointer-events-none brightness-50"
              src={RoomFive}
              alt={"Lesauto interieur"}
              priority
            />
          </div>
          <div className="absolute lg:relative top-0 z-1 container flex flex-col md:flex-row gap-8 py-20 z-1 md:pb-[30rem]">
            <h2 className="text-4xl font-semibold text-white mt-0">
              Turning Houses into Homes, One Design at a Time
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-xl leading-normal text-gray-200 lg:text-xl xl:text-2xl">
                With every project we undertake, we are committed to turning
                houses into homes, one design at a time.
              </p>
              {/*<HeroContent />*/}
              <div className="flex gap-4 flex-wrap">
                <Link
                  href={"/contact"}
                  className="primary-button arrow-button flex w-fit items-center"
                >
                  Get in touch <ArrowUpRightIcon className="ml-2 h-6 w-6" />
                </Link>
                <Link
                  href={"/contact"}
                  className="secondary-button arrow-button flex w-fit items-center"
                >
                  Call us +31 6 1311 0490{" "}
                  <ArrowUpRightIcon className="ml-2 h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-20 md:pt-28">
          <h2 className="max-w-xl mb-4">
            Explore client feedback on our latest project.
          </h2>
          <hr />
        </div>

        <ClientFeedbackSection />
      </section>

      <section className="flex flex-col md:flex-row container gap-16 md:gap-32 py-20 md:py-28">
        <div className="flex flex-col gap-8">
          <SectionTitle title={"Still Have Any Questions?"} pretitle="FAQ's" />
          <Link
            href={"/contact"}
            className="primary-button arrow-button flex w-fit items-center"
          >
            Ask Any Question <ArrowUpRightIcon className="ml-2 h-6 w-6" />
          </Link>
        </div>
        <div className="w-full">
          <Faq />
        </div>
      </section>
    </>
  );
}
