"use client";

import { useState } from "react";
import { ContainerFluid, Section } from "@/app/components/ui";
import { SlantSeparator } from "./SlantSeparator";

const differences = [
  {
    title: "Strategy before execution",
    description: "Know what to create and why before generating content.",
    highlighted: true,
    mockupText: "Mockup showing Company Intelligence dashboard with:",
    points: [
      "Persona cards displaying pain points",
      "Keyword list with opportunity scores",
      "Competitor analysis summary",
      "Connected data showing how intelligence flows to content",
    ],
  },
  {
    title: "Quality at scale",
    description: "AI speed with expert-level thinking built in.",
    mockupText: "Mockup showing scale controls with:",
    points: [
      "Editorial guardrails",
      "Approval workflows",
      "Quality checks before publish",
      "Consistency across channels",
    ],
  },
  {
    title: "Intelligence that compounds",
    description: "Marketing gets easier over time, not harder.",
    mockupText: "Mockup showing compounding intelligence with:",
    points: [
      "Reusable insights",
      "Connected datasets",
      "Learning over time",
      "Faster planning cycles",
    ],
  },
  {
    title: "Accessible expertise",
    description: "Strategic capabilities without the strategic salary.",
    mockupText: "Mockup showing built-in expertise with:",
    points: [
      "Best-practice templates",
      "Guided setup",
      "Strategy prompts",
      "Clear next steps",
    ],
  },
];

const initialHighlightedIndex = Math.max(
  differences.findIndex((item) => item.highlighted),
  0,
);

export function DifferencesSection() {
  const [activeIndex, setActiveIndex] = useState(initialHighlightedIndex);

  return (
    <Section className="bg-white border-b border-iris-cream">
      <ContainerFluid className="px-6 sm:px-10">
        <div className="border-x border-iris-cream">
          <div className="px-8 pt-20 pb-8 md:pt-24 md:pb-10">
            <h2 className="font-serif text-[40px] leading-none tracking-tight text-iris-dark md:text-[56px]">
              How we&apos;re different
            </h2>

            <div className="mt-10 flex flex-col lg:flex-row gap-16 items-start -ml-8">
              
              {/* LEFT SIDE */}
              <div className="w-full lg:w-1/2 border-l-2 border-iris-border">
                {differences.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left relative pl-5 py-5 lg:pl-8 -ml-[2px] border-l-4 transition-all duration-300 outline-none block ${
                      activeIndex === index
                        ? "border-iris-orange opacity-100"
                        : "border-iris-cream hover:opacity-70 hover:border-iris-orange"
                    }`}
                  >
                    <h3 className="text-3xl font-serif text-iris-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-iris-teal text-base leading-relaxed lg:max-w-md">
                      {item.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full lg:w-1/2 sticky top-24">
                <div className="relative aspect-4/3 w-full flex items-center justify-center px-6 py-30 lg:py-0 md:px-12 lg:px-26 bg-[url('/images/img-17.png')] bg-cover bg-center">
                  <div className="relative bg-iris-cream w-full px-6 py-15 md:px-10 lg:px-35 lg:py-35 flex flex-col justify-center transition-all duration-500">
                    <p className="text-[14.27px] lg:text-[12.73px] font-normal text-iris-dark mb-1">
                      [{differences[activeIndex].mockupText}]
                    </p>

                    <ul className="space-y-2 sm:space-y-2 text-[14.27px] lg:text-[12.73px] font-normal text-iris-dark">
                      {differences[activeIndex].points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-iris-dark mt-2 h-1.5 w-1.5 rounded-full bg-iris-dark shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </ContainerFluid>
      <SlantSeparator />
    </Section>
  );
}