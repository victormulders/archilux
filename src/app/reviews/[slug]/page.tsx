import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug, getReviewBySlug } from "@/api/page.query";
import { PageContent } from "@/app/projects/[slug]/PageContent";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: { template: `%s | ${"Archilux"}`, default: "Archilux" },
};
const ReviewPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { review } = await getReviewBySlug(slug);
  if (!review) return notFound();

  return (
    <>
      <section className="h-screen">
        <div className="relative w-full h-full lg:[clip-path:inset(0_0_0_0)]">
          <div className="relative lg:fixed h-full w-full left-0 top-0">
            <Image
              fill
              className="object-center object-cover pointer-events-none brightness-75"
              src={review.image?.url || ""}
              alt={"Living room"}
              priority
            />
          </div>
          <div className="absolute lg:relative top-0 z-1 container flex flex-col gap-4 md:gap-6 items-center justify-center h-full text-center">
            <h1 className="text-4xl md:text-7xl font-medium text-white mt-0">
              {review.title}
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

      <section className="relative container py-12 md:py-16 flex flex-col md:flex-row gap-12">
        <PageContent contentHtml={review?.description?.html || ""} />
        <div className="sticky top-20 flex h-full border-l p-4 border-gray-200 items-center w-full gap-8">
          <div className="relative h-40 w-40">
            <Image
              fill
              className="object-center object-cover rounded-full"
              src={review.authorAvatar?.url || ""}
              alt={"Living room"}
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="text-3xl text-gray-800">{review.authorName}</div>
            <div className="text-xl text-gray-600">{review.authorFunction}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewPage;
