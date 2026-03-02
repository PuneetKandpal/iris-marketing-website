"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Container, Section } from "@/app/components/ui";

const faqs = [
  {
    question: "How accurate is the competitive analysis?",
    answer:
      "Agents analyze publicly available competitor information including websites, published content, and market positioning. Most customers report discovering insights they missed in manual research. Accuracy depends on what competitors make public.",
  },
  {
    question: "Can I edit strategies before generating content?",
    answer:
      "You can review and refine your strategy artifacts before generating content. Iriscale is designed so strategy guides execution, not the other way around.",
  },
  {
    question: "Who is Iriscale for?",
    answer:
      "Teams that want strategy-first marketing execution: founders, marketers, and operators who need consistent quality without adding headcount.",
  },
  {
    question: "What exactly does Iriscale do?",
    answer:
      "Iriscale builds your foundations (positioning, personas, journeys, competitive analysis) and then generates content that matches your strategy and brand voice.",
  },
];

export function AboutFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="pt-24 pb-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[40px] lg:text-[40px] font-serif text-iris-dark leading-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="border-t border-iris-border">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-iris-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group transition-all"
              >
                <span className="text-2xl md:text-2xl lg:text-2xl font-serif text-iris-dark pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-iris-dark transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
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
