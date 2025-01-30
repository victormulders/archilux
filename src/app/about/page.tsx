import PageIntroSection from "@/app/components/PageIntroSection";
import RoomFive from "/public/img/living-room-5.jpg";
import { servicesData } from "@/common/static/Constants";
import Image from "next/image";
import dynamic from "next/dynamic";
import PageTitle from "@/app/components/PageTitle";

const VideoScroll = dynamic(
  () => import("@/app/components/video-scroll/VideoScroll"),
  {
    ssr: false,
  },
);

export default function About() {
  return (
    <div className="bg-darkTheme">
      {/*<PageIntroSection*/}
      {/*  title={"The Heart Behind Every Design"}*/}
      {/*  image={RoomFive}*/}
      {/*/>*/}
      <PageTitle
        title={"Transforming Spaces & Enriching Lives."}
        isLight={false}
      >
        Our mission is to create interiors that go beyond aesthetics, crafting
        spaces where design meets purpose. Whether it’s a cozy home or a dynamic
        workspace, we blend creativity with functionality to deliver
        environments that inspire and enhance daily life. With every project, we
        strive to bring your vision to life, creating a space that feels
        uniquely yours.
      </PageTitle>

      <div className=" brightness-75 pt-10 p-10 md:p-20 sticky top-0 right-0 lg:h-screen lg:pt-0 flex flex-col flex-shrink-0 justify-center items-center">
        <VideoScroll />
      </div>

      <section className="relative flex flex-col-reverse lg:flex-row container py-20 md:py-28 gap-20 xl:gap-32">
        <div className="flex flex-col py-32 lg:py-64 gap-16 md:gap-32 lg:gap-80 xl:gap-[40rem]">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col-reverse md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-2 md:gap-20`}
            >
              <div className="flex flex-1 flex-col gap-4">
                <h2 className="text-white mix-blend-plus-lighter">
                  {service.title}
                </h2>
                <p className="text-gray-200 mix-blend-plus-lighter">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*//TODO make video background instead of right of text??? of bij een andere doen*/}
      </section>

      {/*<section className="container py-20 md:py-28 flex flex-col gap-20 md:gap-56">*/}
      {/*  {servicesData.map((service, index) => (*/}
      {/*    <div*/}
      {/*      key={service.id}*/}
      {/*      className={`flex flex-col-reverse md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-2 md:gap-20`}*/}
      {/*    >*/}
      {/*      <div className="flex flex-1 flex-col gap-4">*/}
      {/*        <h2>{service.title}</h2>*/}
      {/*        <p>{service.description}</p>*/}
      {/*      </div>*/}
      {/*      <div className="flex flex-1">*/}
      {/*        <Image*/}
      {/*          className="w-full h-full rounded-lg"*/}
      {/*          src={service.image}*/}
      {/*          alt={service.title}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</section>*/}
    </div>
  );
}
