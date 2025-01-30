import { ClientFeedbackGrid } from "@/app/components/client-feedback-section/ClientFeedbackGrid";

const ClientFeedbackSection = () => {
  return (
    <section>
      <div className="container pt-20 md:pt-28">
        <h2 className="max-w-xl mb-4">
          Explore client feedback on our latest project.
        </h2>
        <hr />
      </div>
      <ClientFeedbackGrid />
    </section>
  );
};

export default ClientFeedbackSection;
