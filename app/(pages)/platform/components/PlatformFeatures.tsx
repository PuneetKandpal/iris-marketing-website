"use client";

import { ContainerFluid, Section } from "@/app/components/ui";
import React from 'react';


  const features = [
    {
      title: "Find customer conversations",
      description: "Monitor Reddit and forums where customers discuss problems you solve. Get scored opportunities and response suggestions."
    },
    {
      title: "Track AI search rankings",
      description: "See rankings in ChatGPT, Perplexity, and Claude. Compare against competitors and get improvement recommendations."
    },
    {
      title: "Automatic content updates",
      description: "Change positioning or add products once. Updates flow through all content automatically."
    },
    {
      title: "Collaborate with your team",
      description: "Multiple users can assign content, review work, and track who created what."
    },
    {
      title: "Performance analytics",
      description: "Track what drives traffic and conversions. Filter and export to create more of what works."
    },
    {
      title: "Publish anywhere",
      description: "Export to your website, and social platforms or publish directly from Iriscale."
    }
  ];

  export function PlatformFeatures() {

  return (
    <Section className="pt-24 pb-24 bg-white ">
      <ContainerFluid>
        <div className=" text-center">
            <div className="text-center mb-16 max-w-4xl mx-auto text-center">
              <p className="text-sm leading-[25px] font-medium text-iris-teal uppercase mb-4 border-b-2 border-iris-orange inline-block">
                  Platform Features
              </p>
              <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-serif leading-[1.1] text-iris-dark">
                  Everything you need to scale marketing systematically
              </h2>
              <p className="text-iris-teal text-base text-center px-0 lg:px-55 leading-relaxed">
                  Monitor opportunities, track performance, and maintain consistency as your business evolves.
              </p>
            </div>
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <h3 className="text-3xl lg:text-3xl text-iris-dark mb-4 font-serif">
                  {feature.title}
                </h3>
                <p className="text-iris-teal font-sans text-base leading-relaxed max-w-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}

