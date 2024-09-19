"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { NavigationItem } from "@/common/static/Constants";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const navigation: NavigationItem[] = [
    { name: "About", slug: "about-us" },
    { name: "Services", slug: "pricing" },
    { name: "Gallery", slug: "info", hasExtraPages: true },
    // { name: "Rijles", slug: "info", hasExtraPages: true },
    { name: "Pricing", slug: "gallery" },
    // { name: "Contact", slug: "contact" },
  ];

  const { scrollYProgress, scrollY } = useScroll();
  const [isScrollingUp, setScrollingUp] = useState(true);
  const header = useRef<HTMLInputElement>(null);
  const controls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (header && header.current) {
      if (latest === 0) {
        setScrollingUp(true);
      }

      if (latest > 100) {
        setScrollingUp(scrollY.getPrevious()! > latest);
      }
    }
  });

  useEffect(() => {
    controls.start({ y: isScrollingUp ? 0 : "-100%" });
  }, [isScrollingUp]);


  return (
    <motion.header
      ref={header}
      initial={{ y: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }} // Adjust the duration as needed
      className={`fixed top-0 w-full z-10`}
    >
      <div className="mx-4">
        <nav className="container shadow-2xl rounded-3xl md:rounded-full bg-white/70 backdrop-blur-md relative mt-2 flex flex-col lg:flex-row flex-wrap items-center justify-between py-2 px-2 mx-auto lg:justify-between">
          <Disclosure>
            {({ open, close }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <div className="flex gap-4">
                    <Link href="/">
                        <div className="text-darkTheme flex items-center font-semibold text-xl md:text-2xl">
                          <HomeIcon className="text-primary-500 mx-2 h-6 md:h-8 w-6 md:w-8" />
                          Archilux
                        </div>
                    </Link>
                  </div>

                  <Disclosure.Button
                      aria-label="Toggle Menu"
                      className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none "
                  >
                    <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                      {open && (
                          <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                          />
                      )}
                      {!open && (
                          <path
                              fillRule="evenodd"
                              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                          />
                      )}
                    </svg>
                  </Disclosure.Button>

                  {/*<div className="flex lg:hidden">*/}
                  {/*  <Link*/}
                  {/*    href={"/contact"}*/}
                  {/*    className="primary-button arrow-button flex w-fit items-center"*/}
                  {/*  >*/}
                  {/*    Get in touch <ArrowUpRightIcon className="ml-2 h-6 w-6" />*/}
                  {/*  </Link>*/}
                  {/*</div>*/}
                  <Disclosure.Panel className="flex flex-wrap flex-col md:flex-row w-full my-5 lg:hidden">
                    <AnimatePresence>
                      <motion.ul
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: "-20px" },
                        }}
                        className="flex flex-1 flex-col items-center justify-center gap-6 space-x-0 text-lg font-medium md:flex-row md:gap-0 md:space-x-4 md:text-sm"
                      >
                        {navigation.map((menu, index) => (
                          <li className="w-full" key={index}>
                            <Link
                              href={`/${menu.slug}`}
                              onClick={() => close()}
                              className="flex justify-center w-full px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md  hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none"
                            >
                              {menu.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center px-8">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href={`/${menu.slug}`}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md  hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden gap-4 lg:flex">
            <Link
              href={"/contact"}
              className="primary-button arrow-button flex w-fit items-center"
            >
              Get in touch <ArrowUpRightIcon className="ml-2 h-6 w-6" />
            </Link>
          </div>
          {/*<motion.div*/}
          {/*  className="absolute rounded-xl mx-1 h-1 lg:h-2 bottom-0 bg-primary-700 left-0 right-0"*/}
          {/*  style={{ scaleX }}*/}
          {/*/>*/}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
