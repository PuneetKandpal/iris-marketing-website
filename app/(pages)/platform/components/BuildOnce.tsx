"use client";

import { Button, Container, Section } from "@/app/components/ui";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import WomenLookingAtLaptop from "../../../../public/images/common/women-looking-at-computer.svg"

export function BuildOnce() {
  return (
    <Section variant="blue" className="w-full pb-10 md:pb-0 md:pt-0 lg:pb-24 lg:pt-0 text-white">
        <div className="flex">
            <div className="w-[65vw] flex flex-col justify-center px-10 md:px-10 lg:px-24 py-15 md:py-0 lg:py-26 order-2 md:order-1 lg:order-1">
                <div className="mb-10">
                    <div className="relative w-12 h-12 ">
                        <Image src="/images/vector-2.png" alt="Iriscale Icon" fill className="object-contain"/>
                    </div>
                </div>

                <h1 className="text-[44px] md:text-4xl lg:text-[64px] font-serif leading-[1.1] mb-10 max-w-lg">
                    Build once.<br className="hidden sm:block" />
                    Execute forever,<br className="hidden sm:block" />
                    with Iriscale.
                </h1>

                <Button variant="white" className="w-fit px-8 py-3 text-lg font-normal rounded-lg">
                    Get Started
                </Button>
            </div>

                                  <div className="relative w-full lg:h-auto order-1 lg:order-2 overflow-hidden">
                <Image src={WomenLookingAtLaptop} alt="Hero portrait" className=" w-full h-full translate-x-[0%] object-cover" width={600}/>
            </div>
        </div>
    </Section>
  );
}