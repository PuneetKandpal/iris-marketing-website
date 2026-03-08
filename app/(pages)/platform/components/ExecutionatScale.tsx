"use client"; // Required for useState in Next.js App Router

import { ContainerFluid, Section } from "@/app/components/ui";
import Image from "next/image";
import React, { useState } from 'react';

const features = [
    {
        id: "articles",
        title: "Blog Articles",
        description: "Long-form content optimized for SEO and AI search. Includes keywords, proper structure, and CTAs addressing persona pain points.",
        image: "/images/platform/platform_ocp_execution.svg",
        backgroundImage: "/images/platform/background_execution.png",
        mockupText: "[Mockup showing Content Editor with:]",
        points: [
            { text: "Article preview on left side" },
            { 
            text: "Quality metrics sidebar on right showing:", 
            subPoints: [
                "Persona targeted",
                "Pain point addressed",
                "SEO optimization score (92/100)",
                "Keywords included (5/5)",
                "Brand voice match (Excellent)",
                "CTA present (Yes)"
            ] 
            },
            { text: "Edit and Publish buttons" },
            { text: "Highlighted sections showing optimizations" }
        ]
    },

  {
    id: "content",
    title: "Social Content",
    description: "Long-form content optimized for SEO and AI search. Includes keywords, proper structure, and CTAs addressing persona pain points.",
    image: "/images/platform/platform_ocp_execution.svg",
    backgroundImage: "/images/platform/background_execution.png",
    mockupText: "[Mockup showing Content Editor with:]",
    points: [
        { text: "Article preview on left side" },
        { 
        text: "Quality metrics sidebar on right showing:", 
        subPoints: [
            "Persona targeted",
            "Pain point addressed",
            "SEO optimization score (92/100)",
            "Keywords included (5/5)",
            "Brand voice match (Excellent)",
            "CTA present (Yes)"
        ] 
        },
        { text: "Edit and Publish buttons" },
        { text: "Highlighted sections showing optimizations" }
    ]
  },
  {
    id: "campaigns",
    title: "Email Campaigns",
    description: "Long-form content optimized for SEO and AI search. Includes keywords, proper structure, and CTAs addressing persona pain points.",
    image: "/images/platform/platform_ocp_execution.svg",
    backgroundImage: "/images/platform/background_execution.png",
    mockupText: "[Mockup showing Content Editor with:]",
    points: [
        { text: "Article preview on left side" },
        { 
        text: "Quality metrics sidebar on right showing:", 
        subPoints: [
            "Persona targeted",
            "Pain point addressed",
            "SEO optimization score (92/100)",
            "Keywords included (5/5)",
            "Brand voice match (Excellent)",
            "CTA present (Yes)"
        ] 
        },
        { text: "Edit and Publish buttons" },
        { text: "Highlighted sections showing optimizations" }
    ]
  },
  {
    id: "responses",
    title: "Forum Responses",
    description: "Long-form content optimized for SEO and AI search. Includes keywords, proper structure, and CTAs addressing persona pain points.",
    image: "/images/platform/platform_ocp_execution.svg",
    backgroundImage: "/images/platform/background_execution.png",
    mockupText: "[Mockup showing Content Editor with:]",
    points: [
        { text: "Article preview on left side" },
        { 
        text: "Quality metrics sidebar on right showing:", 
        subPoints: [
            "Persona targeted",
            "Pain point addressed",
            "SEO optimization score (92/100)",
            "Keywords included (5/5)",
            "Brand voice match (Excellent)",
            "CTA present (Yes)"
        ] 
        },
        { text: "Edit and Publish buttons" },
        { text: "Highlighted sections showing optimizations" }
    ]
  }
];

export function ExecutionatScale() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section className="pt-24 bg-white">
      <ContainerFluid>
        <div className="mb-16">
            <p className="text-sm leading-[25px] font-semibold text-iris-teal uppercase mb-4 border-b-2 border-iris-orange inline-block">
                Execution at Scale
            </p>
            <h2 className="max-w-2xl md:text-5xl text-[40px] md:text-4xl lg:text-[56px] font-normal font-serif text-iris-dark mt-6 mb-4 tracking-tight leading-tight">
                Optimized content for every platform
            </h2>
            <p className="max-w-2xl text-base text-iris-teal leading-relaxed">
                Generate content that maintains your brand voice, addresses customer pain points, and optimizes for search engines and AI platforms.
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
                  src={features[activeTab].backgroundImage ?? "/images/img-18.png"}
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