import Image from "next/image";
import SectionTitle from "@/app/components/SectionTitle";
import LivingRoom from "/public/img/living-room.png";
import RoomTwo from "/public/img/room-image-2.jpeg";
import RoomFive from "/public/img/living-room-5.jpg";
import Link from "next/link";
import ZoomParallax from "@/app/components/ZoomParallax";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Faq from "@/app/components/Faq";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Input } from "@headlessui/react";
import HorizontalScroll from "@/app/components/horizontal-scrolling/HorizontalScrollSection";
import VideoScroll from "@/app/components/video-scroll/VideoScroll";
import ClientFeedbackSection from "@/app/components/client-feedback-section/ClientFeedbackSection";

//TODO scroll paralax thingy within room with text like 'More than just a room' bla bla

export default function Home() {
  return (
    <div>
      <main>
        <section className="h-[85svh]">
          <div
            className="relative w-full h-full"
            style={{
              clipPath: "inset(0 0 0 0)",
            }}
          >
            <div className="fixed h-full w-full left-0 top-0">
              <Image
                fill
                className="object-center object-cover pointer-events-none brightness-75"
                src={LivingRoom}
                alt={"Living room"}
                priority
              />
            </div>
            <div className="relative z-1 container flex flex-col gap-4 md:gap-8 items-center justify-center h-full text-center">
              <h1 className="text-4xl md:text-7xl font-medium text-white mt-0">
                Turning Houses into Homes, One Design at a Time
              </h1>
              <p className="text-xl leading-normal text-gray-100 lg:text-xl xl:text-2xl">
                With every project we undertake, we are committed to turning
                houses into homes, one design at a time.
              </p>
              {/*<HeroContent />*/}
              <div className="flex flex-col items-start gap-4 sm:gap-2 sm:items-center sm:flex-row">
                <Link
                  href={"/contact"}
                  className="primary-button arrow-button flex w-fit items-center"
                >
                  Explore Our Projects <ArrowUpRightIcon className="ml-2 h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-20">
          <SectionTitle
            className="pb-12"
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

        <section className="container py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div className="text-primary-500 text-xl font-bold">
                Happy rate
              </div>
              <div className="text-gray-500 font-semibold">
                Designing spaces that inspire, delight
              </div>
            </div>
          </div>
        </section>

        <section className="container flex flex-col md:flex-row py-20 gap-8 md:gap-24 items-center">
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
              With every project we undertake, we are committed to turning
              houses into homes, one design at a time.
            </p>
            <Link
              href={"/contact"}
              className="primary-button arrow-button flex w-fit items-center"
            >
              Explore Our Projects <ArrowUpRightIcon className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </section>

        <section className="container flex flex-col py-20 gap-8">
          <SectionTitle title={"Interior Design Gallery"} pretitle="Gallery" />
          <p>
            Develop a concept or theme that will guide the design process. This
            could be inspired by the clients preferences, the buildings
            architecture, or a specific design style.
          </p>
        </section>
        <ZoomParallax />

        <section>
          <div
            className="relative w-full h-full"
            style={{
              clipPath: "inset(0 0 0 0)",
            }}
          >
            <div className="fixed h-full w-full left-0 top-0">
              <Image
                fill
                className="rounded-none object-center object-cover pointer-events-none brightness-50"
                src={RoomFive}
                alt={"Lesauto interieur"}
                priority
              />
            </div>
            <div className="relative z-1 flex flex-wrap flex-row-reverse py-32">
              <div className="p-0 md:p-12 rounded-3xl flex items-center w-full lg:w-1/2">
                <div className="container max-w-2xl flex flex-col gap-4">
                  <h1 className="text-4xl font-semibold text-white mt-0">
                    Turning Houses into Homes, One Design at a Time.
                  </h1>
                  <p className="py-4 text-xl leading-normal text-gray-100 lg:text-xl xl:text-2xl">
                    With every project we undertake, we are committed to turning
                    houses into homes, one design at a time.
                  </p>
                  {/*<HeroContent />*/}
                  <div className="flex flex-col items-start gap-4 sm:gap-2 sm:items-center sm:flex-row">
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
          </div>
        </section>

        <section>
          <div className="container py-20">
            <h2 className="max-w-xl">
              Explore client feedback on our latest project.
            </h2>
          </div>

          <ClientFeedbackSection />
        </section>

        <section className="flex flex-col md:flex-row container gap-16 md:gap-32 py-20">
          <div className="flex flex-col gap-8">
            <SectionTitle
              title={"Still Have Any Questions?"}
              pretitle="FAQ's"
            />
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

        {/*<section>*/}
        {/*  <VideoScroll />*/}
        {/*</section>*/}
      </main>

      <footer className="bg-darkTheme">
        <div className="container py-20 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <SectionTitle
              title={"Ready to build your dream home?"}
              pretitle={"Free Consultation"}
              isLight={false}
            />
            <Link
              href={"/contact"}
              className="primary-button arrow-button flex items-center w-fit md:shrink-0 h-fit"
            >
              Book An Appointment <ArrowUpRightIcon className="ml-2 h-6 w-6" />
            </Link>
          </div>

          <div className="flex w-full flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex w-full md:w-auto flex-col gap-4">
              <div className="text-gray-100 flex items-center font-semibold text-2xl">
                <HomeIcon className="mr-2 h-8 w-8" />
                Archilux
              </div>
              <p className="text-gray-300 max-w-sm">
                Our team creating personalized designs that transform houses
                into cherished homes
              </p>
              <a
                className="text-primary-200 hover:text-primary-100"
                href="mailto:hello@archilux.com"
              >
                hello@archilux.com
              </a>
            </div>

            <div className="flex w-full shrink-0 md:w-auto  flex-col gap-4">
              <div className="text-gray-100 text-xl">Contact</div>
              <a
                className="text-primary-200 hover:text-primary-100"
                href="tel:+31 6 1311 0490"
              >
                +31 6 1311 0490
              </a>
              <a
                className="text-primary-200 hover:text-primary-100"
                href="mailto:hello@archilux.com"
              >
                hello@archilux.com
              </a>
            </div>

            <div className="flex w-full shrink-0 md:w-auto  flex-col gap-4">
              <div className="text-gray-100 text-xl">Quick links</div>
              <a className="text-primary-200 hover:text-primary-100" href="/">
                Home
              </a>
              <a className="text-primary-200 hover:text-primary-100" href="/">
                About
              </a>
              <a className="text-primary-200 hover:text-primary-100" href="/">
                Services
              </a>
              <a className="text-primary-200 hover:text-primary-100" href="/">
                Gallery
              </a>
            </div>

            <div className="flex w-full md:w-auto flex-col gap-4">
              <div className="text-gray-100 text-2xl font-medium">
                Subscribe Now
              </div>
              <p className="text-gray-300">
                Enter your email and click subscribe to get our latest news and
                updates.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  className="block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
                />
                <Link
                  href={"/contact"}
                  className="primary-button arrow-button flex w-fit items-center"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
