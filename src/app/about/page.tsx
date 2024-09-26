import PageIntroSection from "@/app/components/PageIntroSection";
import RoomFive from "/public/img/living-room-5.jpg";
import { servicesData } from "@/common/static/Constants";
import Image from "next/image";
import VideoScroll from "@/app/components/video-scroll/VideoScroll";

export default function About() {
  return (
    <>
      <PageIntroSection
        title={"The Heart Behind Every Design"}
        image={RoomFive}
      />

      <section className="relative flex flex-col-reverse lg:flex-row container py-20 md:py-28 gap-20 xl:gap-32">
        <div className="flex flex-col gap-16 md:gap-32 lg:gap-40 xl:gap-80">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col-reverse md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-2 md:gap-20`}
            >
              <div className="flex flex-1 flex-col gap-4">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl sticky top-0 right-0 lg:h-screen pt-4 lg:pt-0 flex flex-col flex-shrink-0 justify-center items-center">
          <VideoScroll />
        </div>
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
    </>
  );
}
