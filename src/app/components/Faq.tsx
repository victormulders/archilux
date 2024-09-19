'use client';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { faqData } from '@/common/static/Constants';

const FaqItem = ({
                     question,
                     answer,
                 }: {
    question: string;
    answer: string;
}) => {
    return (
        <AnimatePresence>
            <div className="mb-5">
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex gap-4 items-center border border-solid border-gray-300 justify-between w-full px-4 py-4 font-semibold text-left text-gray-800 rounded-lg bg-white hover:bg-gray-50">
                                <div>{question}</div>
                                <div><ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-primary-500`}
                                /></div>
                            </Disclosure.Button>
                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        key="answer"
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: 'auto', opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{duration: 0.2}}
                                    >
                                        <div className="px-4 pt-4 pb-2">
                                            <p className="py-0">{answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </>
                    )}
                </Disclosure>
            </div>
        </AnimatePresence>
    );
};

const Faq = () => {
    return (<>
            {faqData.map((item) => (
                <FaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                />
            ))}</>
    );
};

export default Faq;
