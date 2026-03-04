"use client";

import { useState } from "react";
import { ContainerFluid, Section } from "@/app/components/ui";
import { SlantSeparator } from "./SlantSeparator";

const differences = [
  {
    title: "Strategy before execution",
    description: "Know what to create and why before generating content.",
    highlighted: true,
  },
  {
    title: "Quality at scale",
    description: "AI speed with expert-level thinking built in.",
  },
  {
    title: "Intelligence that compounds",
    description: "Marketing gets easier over time, not harder.",
  },
  {
    title: "Accessible expertise",
    description: "Strategic capabilities without the strategic salary.",
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

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,640px)]">
              
              {/* LEFT SIDE */}
              <div className="relative w-full pl-8">
                <span
                  aria-hidden
                  className="absolute left-2 top-0 w-px bg-iris-cream"
                  style={{ height: "calc(100% + 60px)" }}
                />
                <span
                  aria-hidden
                  className="absolute left-2 top-0 w-1 rounded-full bg-iris-orange"
                  style={{ height: "96px" }}
                />

                <div className="space-y-6">
                  {differences.map((item, index) => {
                    const isActive = activeIndex === index;

                    return (
                      <div
                        key={item.title}
                        onClick={() => setActiveIndex(index)}
                        className="cursor-pointer"
                      >
                        <p
                          className={`font-serif text-[28px] leading-tight tracking-tight md:text-[32px] ${
                            isActive
                              ? "text-iris-dark"
                              : "text-iris-dark/50"
                          }`}
                        >
                          {item.title}
                        </p>

                        <p
                          className={`mt-2 text-sm leading-relaxed md:text-base ${
                            isActive
                              ? "text-iris-teal"
                              : "text-iris-teal/50"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full justify-self-end">
                <div className="relative aspect-4/3 w-full max-w-[640px] overflow-hidden bg-[url('/images/img-17.png')] bg-cover bg-center">
                  <div className="absolute inset-0 flex items-center justify-center px-6 py-10 md:px-12">
                    <div className="w-full max-w-[360px] border border-iris-cream bg-iris-light px-6 py-8 md:px-10 md:py-12 shadow-sm">
                      <p className="text-sm font-semibold text-iris-teal">
                        [Mockup showing Company Intelligence dashboard with:]
                      </p>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-iris-teal">
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-teal" />
                          <span>Persona cards displaying pain points</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-teal" />
                          <span>Keyword list with opportunity scores</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-teal" />
                          <span>Competitor analysis summary</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-teal" />
                          <span>
                            Connected data showing how intelligence flows to content
                          </span>
                        </li>
                      </ul>
                    </div>
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