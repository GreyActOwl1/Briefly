"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
            {({ open }: { open: boolean }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is Briefly and how does it work?",
    answer: "Briefly is a platform designed to help professionals capture, organize, and annotate notes and voice recordings. Using Briefly, you can easily record important conversations, add annotations, and share summaries with your team to streamline communication and enhance productivity.",
  },
  {
    question: "Can I share my notes and recordings with others?",
    answer: "Yes, Briefly allows you to share your notes and voice recordings with your team. You can also collaborate in real-time, making it easy to work together and stay aligned on projects.",
  },
  {
    question: "Does Briefly offer automatic transcription or summarization?",
    answer: "Absolutely! Briefly provides automatic transcription and summarization features. This means you can quickly generate text versions of your voice recordings and get concise summaries of key points, saving you time and effort.",
  },
  {
    question: "Is my data secure on Briefly?",
    answer: "We take security very seriously at Briefly. All your notes, recordings, and personal data are encrypted and stored securely. We follow industry best practices to ensure your information is always protected.",
  },
];

