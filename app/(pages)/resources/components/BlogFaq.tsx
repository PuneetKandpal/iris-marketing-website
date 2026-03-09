"use client";

import { Container, Section } from "@/app/components/ui";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    question: "What happens after the trial?",
    answer: "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    question: "Do you offer annual discounts?",
    answer: "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    question: "What if I need more than Scale offers?",
    answer: "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    question: "Can I add team members?",
    answer: "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Yes. Upgrade or downgrade anytime. Changes take effect immediately.",
  },
];

export function BlogFaq() {
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
                type="button"
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
