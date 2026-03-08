"use client"; 

import { ContainerFluid, Section } from "@/app/components/ui";
import Image from "next/image";
import React, { useState } from 'react';


const features = [
  {
    id: "discovery",
    title: "Discovery Stage Content",
    description: "Educational articles for customers identifying problems. Builds awareness and trust before they're ready to buy.",
    image: "/images/platform/platform_cmc_strategy.svg",
    backgroundImage: "/images/platform/background_strategy.png",
    mockupText: "DASHBOARD VISUAL [Mockup showing Content Architecture dashboard with:]",
    points: ["Content tree with three main branches (Discovery, Evaluation, Decision)", "Article titles under each stage", "Persona tags on each piece", "Pain points addressed","Keyword connections visible","Priority indicators"]
  },
  {
    id: "evaluation",
    title: "Evaluation Stage Content",
    image: "/images/platform/platform_cmc_strategy.svg",
    backgroundImage: "/images/platform/background_strategy.png",
    description: "Framework articles and comparisons for customers researching solutions. Positions your approach as superior.",
    mockupText: "Detailed persona cards with demographic data and psychographic insights.",
    points: ["Persona cards displaying pain points", "Buying behavior patterns", "Content needs mapping", "Customer journey stages"]
  },
  {
    id: "decision",
    title: "Decision Stage Content",
    description: "Product-focused content and case studies for customers ready to choose. Directly drives conversions.",
    image: "/images/platform/platform_cmc_strategy.svg",
    backgroundImage: "/images/platform/background_strategy.png",
    mockupText: "Keyword opportunity dashboard with difficulty and business value scores.",
    points: ["Keyword list with opportunity scores", "Search volume trends", "Product-to-keyword mapping", "CPC estimates"]
  },
  {
    id: "planning",
    title: "Strategic Planning",
    description: "Each piece includes target persona, keywords, buying stage, internal links, and success metrics to track.",
    image: "/images/platform/platform_cmc_strategy.svg",
    backgroundImage: "/images/platform/background_strategy.png",
    mockupText: "Brand guidelines dashboard showing voice, tone, and messaging pillars.",
    points: ["Brand voice documentation", "Messaging pillars", "Positioning statements", "Content style guide"]
  }
];

export function StrategicPlanning() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section className="pt-24 bg-white">
      <ContainerFluid>
        <div className="mb-16">
            <p className="text-sm leading-[25px] font-semibold text-iris-teal uppercase mb-4 border-b-2 border-iris-orange inline-block">
                Strategic Planning
            </p>
            <h2 className="max-w-2xl md:text-5xl text-[40px] md:text-4xl lg:text-[56px] font-normal font-serif text-iris-dark mt-6 mb-4 tracking-tight leading-tight">
                Content mapped to customer needs and business goals
            </h2>
            <p className="max-w-2xl text-base text-iris-teal leading-relaxed">
                Strategy agents analyze your marketing intelligence and create complete content plans addressing customer needs at every buying stage.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="w-full lg:w-1/2 border-l-2 border-iris-border">
                {features.map((feature, index) => (
                <button
                    key={feature.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left relative pl-5 py-5 lg:pl-8 -ml-[2px] border-l-4 transition-all duration-300 outline-none block
                    ${activeTab === index 
                        ? 'border-iris-orange opacity-100' 
                        : 'border-iris-cream hover:opacity-70 hover:border-iris-orange'
                    }`}
                >
                    <h3 className="text-3xl font-serif text-iris-dark mb-3">
                    {feature.title}
                    </h3>
                    <p className="text-iris-dark text-base leading-relaxed lg:max-w-md">
                    {feature.description}
                    </p>
                </button>
                ))}
            </div>

            <div className="w-full lg:w-1/2 sticky top-24">
                <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center">
                    <Image
                        src={features[activeTab].backgroundImage ?? "/images/img-16.png"}
                        alt=""
                        fill
                        className="object-cover"
                    />

                    <div className="relative z-10 flex h-full w-full items-center justify-center p-8 md:p-10 lg:p-12">
                        {features[activeTab].image ? (
                            <div className="w-full max-w-[520px]">
                                <Image
                                    src={features[activeTab].image}
                                    alt={features[activeTab].title}
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
      </ContainerFluid>
    </Section>
  );
}