import { ContactForm } from "@/app/contact/ContactForm";
import {
  DocumentIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import {
  businessAddress,
  businessCity,
  businessEmail,
  businessKVK,
  businessReadable,
  businessTel,
  businessZipcode,
} from "@/common/static/Constants";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <section className="container py-20 md:py-28">
        <ContactForm />
        <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-12 justify-between py-20 md:py-28">
          <div className="flex gap-4">
            <MapPinIcon className="text-primary-500 h-6 w-6 mt-0.5" />
            <div>
              <div className="pb-2 font-semibold text-xl">Address</div>
              <div>
                <div>{businessAddress}</div>
                <div>
                  {businessZipcode} {businessCity}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <EnvelopeIcon className="text-primary-500 h-6 w-6 mt-0.5" />

            <div>
              <div className="pb-2 font-semibold text-xl">Email</div>
              <Link href={`mailto:${businessEmail}`}>{businessEmail}</Link>
            </div>
          </div>

          <div className="flex gap-4">
            <PhoneIcon className="text-primary-500 h-6 w-6 mt-0.5" />

            <div>
              <div className="pb-2 font-semibold text-xl">Phone number</div>
              <Link href={`tel:${businessTel}`}>{businessReadable}</Link>
            </div>
          </div>

          <div className="flex gap-4">
            <DocumentTextIcon className="text-primary-500 h-6 w-6 mt-0.5" />

            <div>
              <div className="pb-2 font-semibold text-xl">KVK number</div>
              <div>{businessKVK}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
