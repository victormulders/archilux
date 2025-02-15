import Link from "next/link";
import SectionTitle from "@/app/components/SectionTitle";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Faq from "@/app/components/Faq";
import PageTitle from "@/app/components/PageTitle";
import ClientFeedbackSection from "@/app/components/client-feedback-section/ClientFeedbackSection";

export default function Feedback() {
  return (
    <>
      <PageTitle title={"What Our Clients Say."}>
        Our work speaks through the experiences of those we've designed for.
        Hear from our clients about how our interiors have transformed their
        spaces into places of comfort, inspiration, and pride.
      </PageTitle>

      <ClientFeedbackSection />

      <section className="flex flex-col md:flex-row container gap-16 md:gap-32 py-20 md:py-28">
        <div className="flex flex-col gap-8">
          <SectionTitle title={"Still Have Any Questions?"} pretitle="FAQ's" />
          <Link
            href={"/contact"}
            target="_top"
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
