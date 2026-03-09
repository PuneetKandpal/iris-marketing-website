"use client";

import { useState } from "react";
import { ContainerFluid, Section } from "@/app/components/ui";
import { SlantSeparator } from "./SlantSeparator";
import Image from "next/image";

const differences = [
  {
    title: "Strategy before execution",
    description: "Know what to create and why before generating content.",
    highlighted: true,
    image: "/images/about/about.svg",
    backgroundImage: "/images/img-17.png",
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
        image: "/images/about/about.svg",
    backgroundImage: "/images/img-17.png",
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
       image: "/images/about/about.svg",
    backgroundImage: "/images/img-17.png",
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
       image: "/images/about/about.svg",
    backgroundImage: "/images/img-17.png",
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

            <div className="mt-10 flex flex-col lg:flex-row gap-16 items-start lg:items-stretch -ml-8">
              
              {/* LEFT SIDE */}
              <div className="w-full lg:w-1/2 border-l-2 border-iris-border flex flex-col">
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
              <div className="w-full lg:w-1/2 lg:self-stretch overflow-hidden">
                <div className="relative w-full h-full min-h-[360px] overflow-hidden">
                  <Image
                    src={differences[activeIndex].backgroundImage ?? "/images/img-17.png"}
                    alt=""
                    fill
                    className="object-cover"
                  />

                  <div className="relative z-10 flex h-full w-full items-start justify-center px-8 pt-10 pb-6 md:px-12 lg:px-16">
                    {differences[activeIndex].image ? (
                      <div className="w-full max-w-[620px] overflow-hidden rounded-[28px] drop-shadow-2xl">
                        <Image
                          src={differences[activeIndex].image}
                          alt={differences[activeIndex].title}
                          width={900}
                          height={700}
                          className="h-auto w-full"
                        />
                      </div>
                    ) : null}
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