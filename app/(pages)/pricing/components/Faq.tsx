"use client";

import { useState } from "react";
import { Container, Section } from "@/app/components/ui";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    question: "What happens after the trial?",
    answer:
      "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    question: "Do you offer annual discounts?",
    answer:
      "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    question: "What if I need more than Scale offers?",
    answer:
      "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    question: "Can I add team members?",
    answer:
      "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
   {
    question: "What payment methods do you accept?",
    answer:
      "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="pt-24 pb-24 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[40px] lg:text-[40px] font-serif text-[#112225] leading-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group transition-all"
              >
                <span className="text-2xl md:text-2xl lg:text-2xl font-serif text-[#112225] pr-8 ">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#112225] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expandable Content */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] pb-10" : "max-h-0"
                }`}
              >
                <p className="text-base md:text-base lg:text-base text-[#0B363C] leading-relaxed">
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