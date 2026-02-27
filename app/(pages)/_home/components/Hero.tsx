"use client";

import { Button, Container, Section } from "@/app/components/ui";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const [open, setOpen] = useState(null);

  const accordionItems = [
    { title: "Industries", items: "7 items" },
    { title: "Buyer Personas", items: "10 items" },
    { title: "Products & Services", items: "4 items" },
    { title: "Target Markets", items: "11 items" },
    { title: "Competitor Analysis", items: "32 items" },
    { title: "AI Search & SEO Strategy", items: "" },
  ];

  return (
    <Section variant="lightCream" className="pt-24 pb-24">
      <Container className="text-center">
        <p className="text-sm text-[#0B363C] font-semibold uppercase relative inline-block mb-8">
          Marketing Intelligence Platform
          <Image
            src="/images/lines.png"
            width={100}
            height={100}
            alt="img"
            className="size-full mt-[3px]"
          />
        </p>

        <h1 className="mx-auto max-w-4xl font-flecha-s-regular text-7xl font-normal tracking-tight sm:text-7xl">
          Scale your marketing <br className="hidden sm:block" /> without
          scaling your team.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl tracking-tight text-foreground sm:text-xl font-text-camera-plain-regular">
          <span>One platform replaces your entire marketing stack. Expert</span> 
          <br/>
          <span>strategy built in. Your brand voice locked in. Content that</span> 
          <br/>
          <span>converts, created in minutes instead of days.</span> 
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="accent" size="lg" className="w-full sm:w-auto font-camera-plain-regular">
            Try for Free
          </Button>
          <Button
            variant="outline_black"
            size="lg"
            className="w-full sm:w-auto group font-camera-plain-regular"
          >
            Book Demo
          </Button>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-8 text-left items-start">
          {/* ACCORDION BOX */}
          <div className="bg-white rounded-md border border-[#DDDACB]">
            <div className="flex justify-between items-center p-6">
              <h4 className="font-medium font-flecha-s-regular">Company Marketing Strategy</h4>
              <span className="text-sm text-muted">81 total items</span>
            </div>

            <div className="space-y-3 bg-[#fcfbf7] p-6 rounded-md">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg  bg-[#ffffff]"
                >
                  <button
                    onClick={() =>
                      setOpen(open === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.title}</span>
                      {item.items && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {item.items}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`transition ${
                        open === index ? "rotate-180" : ""
                      }`}
                      size={18}
                    />
                  </button>

                  {open === index && (
                    <div className="px-4 pb-4 text-sm text-muted">
                      Coming Soon
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full h-[250px] ">
              <Image
                src="/images/img-5.png"
                fill
                alt="img"
                className="object-contain rounded-md border border-[#DDDACB] bg-white"
              />
            </div>
            </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full h-[250px]">
              <Image
                src="/images/img-5.png"
                fill
                alt="img"
                className="object-contain rounded-md border border-[#DDDACB] bg-white"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}