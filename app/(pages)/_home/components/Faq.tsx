"use client";

import { useState } from "react";
import { Container, Section } from "@/app/components/ui";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "This is a temporary question about Iriscale.",
    answer:
      "Rhetorich helps legal professionals communicate with more clarity, confidence, and impact. Through a mix of expert human coaching, AI-powered feedback, and peer learning, teams improve everything from client interactions to internal collaboration.",
  },
  {
    question: "How does this work?",
    answer:
      "Rhetorich helps legal professionals communicate with more clarity, confidence, and impact. Through a mix of expert human coaching, AI-powered feedback, and peer learning, teams improve everything from client interactions to internal collaboration.",
  },
  {
    question: "Who is Iriscale for?",
    answer:
      "Rhetorich helps legal professionals communicate with more clarity, confidence, and impact. Through a mix of expert human coaching, AI-powered feedback, and peer learning, teams improve everything from client interactions to internal collaboration.",
  },
  {
    question: "This is a temporary question.",
    answer:
      "Rhetorich helps legal professionals communicate with more clarity, confidence, and impact. Through a mix of expert human coaching, AI-powered feedback, and peer learning, teams improve everything from client interactions to internal collaboration.",
  },
  {
    question: "What exactly does Iriscale do?",
    answer:
      "Rhetorich helps legal professionals communicate with more clarity, confidence, and impact. Through a mix of expert human coaching, AI-powered feedback, and peer learning, teams improve everything from client interactions to internal collaboration.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="pt-24 pb-24 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[40px] lg:text-[40px] font-serif text-iris-dark leading-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="border-t border-iris-border">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-iris-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group transition-all"
              >
                <span className="text-2xl md:text-2xl lg:text-2xl font-serif text-iris-dark pr-8 ">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-iris-dark transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expandable Content */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] pb-10" : "max-h-0"
                }`}
              >
                <p className="text-base md:text-base lg:text-base text-iris-teal leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}