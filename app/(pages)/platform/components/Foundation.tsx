"use client";

import { ContainerFluid, Section } from "@/app/components/ui";
import React, { useState } from 'react';

const features = [
  {
    id: "competitive",
    title: "Competitive Intelligence",
    description: "Analyzes competitor websites, content strategies, and positioning to reveal gaps where you can win.",
    mockupText: "Mockup showing Company Intelligence dashboard with:",
    points: ["Persona cards displaying pain points", "Keyword list with opportunity scores", "Competitor analysis summary", "Connected data showing how intelligence flows to content"]
  },
  {
    id: "personas",
    title: "Buyer Personas",
    description: "Creates detailed customer profiles with pain points, buying behaviors, and content needs mapped to journey stages.",
    mockupText: "Detailed persona cards with demographic data and psychographic insights.",
    points: ["Persona cards displaying pain points", "Buying behavior patterns", "Content needs mapping", "Customer journey stages"]
  },
  {
    id: "keywords",
    title: "Keyword Intelligence",
    description: "Researches what customers search, connects keywords to products, and prioritizes by business value.",
    mockupText: "Keyword opportunity dashboard with difficulty and business value scores.",
    points: ["Keyword list with opportunity scores", "Search volume trends", "Product-to-keyword mapping", "CPC estimates"]
  },
  {
    id: "brand",
    title: "Brand Foundation",
    description: "Documents your voice, messaging, and positioning to ensure consistent output across all content.",
    mockupText: "Brand guidelines dashboard showing voice, tone, and messaging pillars.",
    points: ["Brand voice documentation", "Messaging pillars", "Positioning statements", "Content style guide"]
  }
];

export function Foundation() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section className="pt-24 bg-white">
      <ContainerFluid>
        <div className="mb-16">
            <p className="text-sm leading-[25px] font-semibold text-iris-teal uppercase mb-4 border-b-2 border-iris-orange inline-block">
                Foundation
            </p>
            <h2 className="max-w-2xl md:text-5xl text-[40px] md:text-4xl lg:text-[56px] font-normal font-serif text-iris-dark mt-6 mb-4 tracking-tight leading-tight">
                Complete marketing intelligence
            </h2>
            <p className="max-w-2xl text-base text-iris-teal leading-relaxed">
                Connect your website and provide business information. Iriscale analyzes your market and builds the strategic foundation expert teams spend months creating.
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
                <div className="relative aspect-[4/3] w-full flex items-center justify-center px-6 py-30 lg:py-0 md:px-12 lg:px-26 bg-[url('/images/img-17.png')] bg-cover bg-center bg-auto ">
                    <div className="relative bg-iris-cream w-full px-6 py-15 md:px-10 lg:px-35 lg:py-35 flex flex-col justify-center transition-all duration-500">
                        
                        <p className="text-[14.27px] lg:text-[12.73px] font-normal text-iris-dark mb-1 ">
                            [{features[activeTab].mockupText}]
                        </p>

                        <ul className="space-y-2 sm:space-y-2 text-[14.27px] lg:text-[12.73px] font-normal text-iris-dark">
                            {features[activeTab].points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-iris-dark mt-2 h-1.5 w-1.5 rounded-full bg-iris-dark shrink-0" />
                                <span className="leading-relaxed">
                                {point}
                                </span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
      </ContainerFluid>
    </Section>
  );
}