import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/api/page.query";
import { PageContent } from "@/app/projects/[slug]/PageContent";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: { template: `%s | ${"Archilux"}`, default: "Archilux" },
};
const DynamicPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { project } = await getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <>
      <section className="h-screen">
        <div className="relative w-full h-full lg:[clip-path:inset(0_0_0_0)]">
          <div className="relative lg:fixed h-full w-full left-0 top-0">
            <Image
              fill
              className="object-center object-cover pointer-events-none brightness-75"
              src={project.image?.url || ""}
              alt={"Living room"}
              priority
            />
          </div>
          <div className="absolute lg:relative top-0 z-1 container flex flex-col gap-4 md:gap-6 items-center justify-center h-full text-center">
            <div className="text-2xl md:text-4xl text-gray-100">
              {project.subtitle}
            </div>
            <h1 className="text-4xl md:text-7xl font-medium text-white mt-0">
              {project.title}
            </h1>
            <p className="text-xl leading-normal text-gray-200 lg:text-xl xl:text-2xl">
              With every project we undertake, we are committed to turning
              houses into homes, one design at a time.
            </p>
            <div className="flex flex-col items-start gap-4 sm:gap-2 sm:items-center sm:flex-row">
              <Link
                href={"/contact"}
                className="primary-button arrow-button flex w-fit items-center"
              >
                Read more <ArrowDownIcon className="ml-2 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*<div className="relative w-full h-screen">*/}
      {/*  <Image*/}
      {/*    fill*/}
      {/*    className="w-full h-full object-cover object-center"*/}
      {/*    src={project?.image?.url || ""}*/}
      {/*    alt={project.title || ""}*/}
      {/*  />*/}
      {/*  <div className="flex flex-col gap-4 items-center justify-center">*/}
      {/*    <h1 className="absolute top-0 text-4xl xl:text-7xl">*/}
      {/*      {project.title}*/}
      {/*    </h1>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <section className="container py-12 md:py-16">
        <PageContent contentHtml={project?.content?.html || ""} />
      </section>
    </>
  );
};

export default DynamicPage;
