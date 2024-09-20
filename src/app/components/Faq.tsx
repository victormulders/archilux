"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { faqData } from "@/common/static/Constants";

const FaqItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  return (
    <AnimatePresence>
      <div className="mb-5 border border-solid border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex gap-4 w-full px-4 py-4 font-semibold text-left text-gray-800">
                <div className="font-medium text-gray-400">
                  0{(index + 1).toString()}
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <div>{question}</div>
                  <AnimatePresence>
                    {open && (
                        <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <p className="text-gray-500 font-medium">{answer}</p>
                        </motion.div>
                    )}
                  </AnimatePresence>

                </div>
                <div>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-primary-500`}
                  />
                </div>

              </Disclosure.Button>
            </>
          )}
        </Disclosure>
      </div>
    </AnimatePresence>
  );
};

const Faq = () => {
  return (
    <>
      {faqData.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          index={index}
        />
      ))}
    </>
  );
};

export default Faq;
