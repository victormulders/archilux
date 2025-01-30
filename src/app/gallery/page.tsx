import { ContactForm } from "@/app/contact/ContactForm";
import PageTitle from "@/app/components/PageTitle";
import Image from "next/image";
import { homeCards } from "@/common/static/Constants";

const GalleryPage = () => {
  return (
    <>
      <PageTitle title={"A Showcase of Inspired Interiors."}>
        Explore our curated collection of thoughtfully designed spaces, where
        every detail reflects a balance of style and purpose. From elegant
        living areas to dynamic workspaces, our gallery highlights the artistry
        and craftsmanship behind each project. Let these interiors spark
        inspiration and offer a glimpse into the transformative power of design.
      </PageTitle>

      <section className="py-20 md:py-28">
        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 px-6">
          {homeCards.map((homeCard, index) => (
            <div key={index} className="relative pb-6">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
                className="rounded-lg"
                src={homeCard.url}
                alt="Gallery image"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
