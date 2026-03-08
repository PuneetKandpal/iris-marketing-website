"use client";

import { Button, Container, Section } from "@/app/components/ui";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const [open, setOpen] = useState<number | null>(null);

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
        <p className="text-sm text-iris-teal font-semibold uppercase relative inline-block mb-8">
          Marketing Intelligence Platform
          <Image
            src="/images/lines.png"
            width={100}
            height={100}
            alt="img"
            className="size-full mt-[3px]"
          />
        </p>

        <h1 className="mx-auto max-w-4xl font-flecha-s-regular text-[56px] leading-none lg:text-7xl font-normal tracking-tight ">
          Scale your marketing <br className="hidden sm:block" /> without
          scaling your team.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-iris-body sm:text-xl">
          One platform replaces your entire marketing stack. Expert strategy
          built in. Your brand voice locked in. Content that converts, created
          in minutes instead of days.
        </p>

        <div className="mt-10 flex flex-row items-center justify-center gap-4">
          <Button variant="accent" size="md" className="w-full sm:w-auto">
            Try for Free
          </Button>
          <Button
            variant="outline_black"
            size="md"
            className="w-full sm:w-auto group"
          >
            Book Demo
          </Button>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-8 text-left items-stretch">
          {/* ACCORDION BOX */}
          <div className="bg-white rounded-md border border-iris-border flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-iris-border/70">
              <h4 className="font-medium text-base font-flecha-s-regular">Company Marketing Strategy</h4>
              <span className="text-sm text-iris-body">81 total items</span>
            </div>

            <div className="space-y-3 bg-iris-light-two p-6 rounded-b-md flex-1">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-iris-border rounded-lg bg-white"
                >
                  <button
                    // onClick={() =>
                    //   setOpen(open === index ? null : index)
                    // }
                    className="w-full flex items-center justify-between p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{item.title}</span>
                      {item.items && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {item.items}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`transition ${open === index ? "rotate-180" : ""
                        }`}
                      size={18}
                    />
                  </button>

                  {open === index && (
                    <div className="px-4 pb-4 text-sm text-iris-body">
                      Coming Soon
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex flex-col rounded-md border border-iris-border bg-white h-full">
            <div className="flex justify-between items-center p-6 border-b border-iris-border/70">
              <h4 className="font-medium text-base font-flecha-s-regular">Key Connections</h4>
              <span className="text-sm text-iris-body">Flow</span>
            </div>
            <div className="relative w-full h-full min-h-[360px]">
              <Image
                src="/images/home/home_hero_2.svg"
                fill
                alt="img"
                className="object-cover border border-iris-border bg-white"
              />
            </div>
          </div>

          <div className="hidden sm:flex flex-col rounded-md border border-iris-border h-full">
            <div className="flex justify-between items-center p-6 border-b border-iris-border/70 bg-white">
              <h4 className="font-medium text-base font-flecha-s-regular">Output</h4>
              <span className="text-sm text-iris-body">13 total assets</span>
            </div>
            <div className="relative w-full h-full min-h-[360px] bg-iris-light-two">
              <Image
                src="/images/home/home_hero_3.svg"
                fill
                alt="img"
                className="object-contain rounded-md border border-iris-border"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}