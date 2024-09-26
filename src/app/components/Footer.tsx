import SectionTitle from "@/app/components/SectionTitle";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Input } from "@headlessui/react";

export default function Footer() {
  return (
    <footer className="bg-darkTheme">
      <div className="container py-20 md:py-28 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionTitle
            className="max-w-sm"
            title={"Ready to build your dream home?"}
            pretitle={"Free Consultation"}
            isLight={false}
          />
          <Link
            href={"/contact"}
            className="primary-button arrow-button flex items-center w-fit md:shrink-0 h-fit"
          >
            Book An Appointment <ArrowUpRightIcon className="ml-2 h-6 w-6" />
          </Link>
        </div>

        <div className="flex w-full flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex w-full md:w-auto flex-col gap-4">
            <div className="text-gray-100 flex items-center font-semibold text-2xl">
              <HomeIcon className="mr-2 h-8 w-8" />
              Archilux
            </div>
            <p className="text-gray-300 max-w-sm">
              Our team creating personalized designs that transform houses into
              cherished homes
            </p>
            <a
              className="text-primary-200 hover:text-primary-100"
              href="mailto:hello@archilux.com"
            >
              hello@archilux.com
            </a>
          </div>

          <div className="flex w-full shrink-0 md:w-auto  flex-col gap-4">
            <div className="text-gray-100 text-xl">Contact</div>
            <a
              className="text-primary-200 hover:text-primary-100"
              href="tel:+31 6 1311 0490"
            >
              +31 6 1311 0490
            </a>
            <a
              className="text-primary-200 hover:text-primary-100"
              href="mailto:hello@archilux.com"
            >
              hello@archilux.com
            </a>
          </div>

          <div className="flex w-full shrink-0 md:w-auto  flex-col gap-4">
            <div className="text-gray-100 text-xl">Quick links</div>
            <a className="text-primary-200 hover:text-primary-100" href="/">
              Home
            </a>
            <a className="text-primary-200 hover:text-primary-100" href="/">
              About
            </a>
            <a className="text-primary-200 hover:text-primary-100" href="/">
              Services
            </a>
            <a className="text-primary-200 hover:text-primary-100" href="/">
              Gallery
            </a>
          </div>

          <div className="flex w-full md:w-auto flex-col gap-4">
            <div className="text-gray-100 text-2xl font-medium">
              Subscribe Now
            </div>
            <p className="text-gray-300">
              Enter your email and click subscribe to get our latest news and
              updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                className="block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
              />
              <Link
                href={"/contact"}
                className="primary-button arrow-button flex w-fit items-center"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
