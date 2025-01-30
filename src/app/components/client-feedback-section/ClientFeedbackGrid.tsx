"use client";
import { useQuery } from "@tanstack/react-query";
import { getReviews } from "@/api/page.query";
import Link from "next/link";
import Image from "next/image";

export const ClientFeedbackGrid = () => {
  const { isLoading, isRefetching, data, refetch } = useQuery({
    queryKey: ["getReviews"],
    queryFn: async () => {
      const { reviews } = await getReviews();
      return { reviews };
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="py-12 pb-20 md:pb-28 flex md:grid md:grid-cols-3 w-full overflow-x-auto scroll-x snap-x md:container md:snap-none pr-8 md:px-0 gap-8 md:gap-y-16">
      {data?.reviews.map((review, index) => (
        <Link
          href={`/reviews/${review.slug}`}
          key={index}
          className="group flex flex-col justify-between gap-4 w-80 md:w-full snap-center shrink-0 px-4 md:px-0"
        >
          <div className="flex flex-col gap-4">
            <div className="relative h-80 w-80 md:w-full">
              <Image
                alt={""}
                fill
                className="rounded-lg transition-all brightness-75 group-hover:brightness-100 object-cover object-center"
                src={review.image?.url || ""}
              />
            </div>
            <p>&quot;{review.descriptionPreview}&quot;</p>
          </div>
          <div className="flex flex-col gap-4">
            <hr />
            <div className="relative flex items-center gap-4">
              <div className="relative w-16 h-16 ">
                <Image
                  fill
                  className="rounded-full object-cover object-center"
                  src={review.authorAvatar?.url || ""}
                  alt={""}
                />
              </div>
              <div className="font-bold text-gray-700">{review.authorName}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
