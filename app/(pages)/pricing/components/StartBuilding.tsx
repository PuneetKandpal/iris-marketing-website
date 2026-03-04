"use client";

import { Button, Section } from "@/app/components/ui";
import Image from "next/image";
import WomenLookingAtLaptop from "../../../../public/images/common/women-looking-at-computer.svg";

export function StartBuilding() {
  return (
    <Section variant="blue" className="w-full pb-10 md:pb-0 md:pt-0 lg:pb-24 lg:pt-0 text-white">
        <div className="flex ">
            <div className="flex flex-col w-[66vw] justify-center pl-10 md:pl-10 lg:pl-24 py-15 md:py-0 lg:py-26 order-2 md:order-1 lg:order-1">
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
                        <div className="relative w-full lg:h-auto order-1 lg:order-2 overflow-hidden">
                <Image src={WomenLookingAtLaptop} alt="Hero portrait" className=" w-full h-full translate-x-[0%] object-cover" width={600}/>
            </div>
        </div>
    </Section>
  );
}