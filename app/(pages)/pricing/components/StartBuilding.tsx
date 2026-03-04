"use client";

import { Button, Container, Section } from "@/app/components/ui";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function StartBuilding() {
  return (
    <Section variant="blue" className="w-full pb-10 md:pb-0 md:pt-0 lg:pb-24 lg:pt-0 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col justify-center px-10 md:px-10 lg:px-24 py-15 md:py-0 lg:py-26 order-2 md:order-1 lg:order-1">
                <div className="mb-10">
                    <div className="relative w-12 h-12 ">
                        <Image src="/images/common/tower-white.png"  alt="Iriscale Icon" fill className="object-contain"/>
                    </div>
                </div>

                <h1 className="text-[44px] md:text-4xl lg:text-[64px] font-flecha-s-regular leading-[1.1] mb-5 max-w-lg">
                    Start building your <br className="hidden sm:block" />
                    marketing strategy<br className="hidden sm:block" />
                </h1>
                
                <p className="text-xl font-camera-plain-regular font-normal mb-7">See how Iriscale creates your competitive analysis, persona research, and content strategy in the first hour.</p>

                <Button variant="white" size="md" className="w-fit mb-7 px-8 py-3 text-lg font-normal rounded-lg font-camera-plain-regular">
                    Try Iriscale free for 14 days
                </Button>

                <p className="text-base font-normal">No credit card • 1-hour setup • Full access • Cancel anytime</p>
            </div>

            <div className="relative w-full h-[450px] lg:h-auto order-1 lg:order-2">
                <Image src="/images/img-12.png" alt="Hero portrait" className="absolute inset-0 top-0 w-full h-full object-cover object-right md:object-cover lg:object-top" />
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>
            </div>
        </div>
    </Section>
  );
}