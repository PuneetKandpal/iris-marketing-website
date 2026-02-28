"use client";

import { Button, Container, Section } from "@/app/components/ui";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function BuildOnce() {
  return (
    <section className="w-full min-h-[600px] bg-[#0B1D1D] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            <div className="flex flex-col justify-center px-16 md:px-16 lg:px-24 py-26 lg:py-0 order-2 lg:order-1">
                <div className="mb-10">
                        <div className="relative w-12 h-12 ">
                            <Image src="/images/vector-2.png" alt="Iriscale Icon" fill className="object-contain"/>
                        </div>
                </div>

            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-serif leading-[1.1] mb-10 max-w-lg">
                Build once.<br />
                Execute forever,<br />
                with Iriscale.
            </h1>

            <Button variant="white" className="w-fit px-8 py-3 text-lg font-normal rounded-lg">
                Get Started
            </Button>
            </div>

            <div className="relative w-full h-[400px] lg:h-auto order-1 lg:order-2">
                <img src="/images/img-12.png" alt="Hero portrait" className="absolute inset-0 top-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>
            </div>
        </div>
    </section>
  );
}