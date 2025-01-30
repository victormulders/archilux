"use client";
import { useQuery } from "@tanstack/react-query";
import { getProjectsTitles } from "@/api/page.query";
import Link from "next/link";
import Image from "next/image";
import HorizontalScrollSection from "@/app/components/horizontal-scrolling/HorizontalScrollSection";
import { CarouselCard } from "@/common/static/Constants";
import { useEffect, useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Faq from "@/app/components/Faq";
import PageTitle from "@/app/components/PageTitle";
import ClientFeedbackSection from "@/app/components/client-feedback-section/ClientFeedbackSection";

//TODO make page not use client
export default function Projects() {
  const highlightedProjectsAmount = 5;
  const [projectCards, setProjectCards] = useState<CarouselCard[]>([]);

  const { isLoading, isRefetching, data, refetch } = useQuery({
    queryKey: ["getPagesTitles"],
    queryFn: async () => {
      const { projects } = await getProjectsTitles();
      return { projects };
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data?.projects) {
      const cards = data.projects.map((project, index) => ({
        url: project.image?.url || "",
        title: project.title || "",
        id: index,
        pageUrl: `/projects/${project.slug}`,
      }));
      setProjectCards(cards);
    }
  }, [data]);

  return (
    <>
      <PageTitle title={"Architecture which makes us proud."}>
        Every interior we design reflects our dedication to beauty, function,
        and individuality. From serene homes to inspiring workplaces, our
        projects transform spaces into environments that spark pride and
        connection.
      </PageTitle>

      {/*TODO change image to thumbnailImage*/}
      <HorizontalScrollSection
        cards={projectCards.slice(0, highlightedProjectsAmount)}
        isLarge
      />

      {projectCards.length > highlightedProjectsAmount && (
        <section className="pt-20 md:pt-28">
          <div className="container">
            <h2 className="max-w-xl mb-4">Discover more of our projects.</h2>
            <hr />
          </div>
          <div className="px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-12">
            {projectCards
              .slice(highlightedProjectsAmount)
              .map((card, index) => (
                <Link
                  className="group flex flex-col justify-between gap-4"
                  href={card.pageUrl || ""}
                  key={card.id}
                  target="_top"
                >
                  <div className="relative h-60 w-full">
                    <Image
                      fill
                      alt={card.title}
                      className="rounded-lg object-cover transition-all brightness-75 group-hover:brightness-100"
                      src={card.url}
                    />
                  </div>
                  <div className="text-xl font-semibold">{card.title}</div>
                </Link>
              ))}
          </div>
        </section>
      )}

      <ClientFeedbackSection />

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

      {/*<section className="p-20 md:p-28 flex flex-col gap-20">*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">*/}
      {/*    {data?.projects.map((project) => (*/}

      {/*      <Link*/}
      {/*        href={`/projects/${project.slug}`}*/}
      {/*        key={project.slug}*/}
      {/*        className="relative h-96"*/}
      {/*      >*/}
      {/*        <Image*/}
      {/*          fill*/}
      {/*          className="object-cover object-center rounded-lg"*/}
      {/*          src={project.image?.url || ""}*/}
      {/*          alt={project.title || ""}*/}
      {/*        />*/}
      {/*        {project.title}*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
}
