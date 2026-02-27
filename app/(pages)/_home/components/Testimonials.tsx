"use client";

import { Container, Section } from "@/app/components/ui";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const testimonialContent = [
  {
    logo: "/images/amazon.png",
    quote: "We stopped spending hours briefing freelancers. Iriscale knows our products, customers, and voice. Every output is on-brand automatically.",
    clientName: "Client Name",
    clientRole: "Marketing Director, B2B SaaS",
  },
  {
    logo: "/images/amazon.png",
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    clientName: "Jane Doe",
    clientRole: "Head of Growth",
  },
];

export function Testimonials() {
  return (
    <Section className="pt-24 bg-white">
      <Container>
       
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-stretch rounded-sm overflow-hidden">
          <div className="md:col-span-4 relative bg-white">
            <Image
                src="/images/union.png" 
                alt="Static Profile"
                fill
                className="object-contain" // Maintains aspect ratio without stretching
                priority
            />
            </div>

          <div className="md:col-span-8 relative">
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              fadeEffect={{ crossFade: true }} // Ensures the old slide disappears completely
              loop={true}
              watchSlidesProgress={true} // Helps Swiper track which slide is truly visible
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              className="h-full testimonial-swiper"
            >
              {testimonialContent.map((item, index) => (
                <SwiperSlide key={index} className="bg-[#F3F2EC]">
                  <div className="p-10 md:p-20 lg:p-10 flex flex-col justify-between h-full">
                    <div className="space-y-12">
                      <div className="relative w-24 h-8">
                        <Image 
                          src={item.logo} 
                          alt="Logo" 
                          fill 
                          className="object-contain object-left grayscale hover:grayscale-0 transition-all" 
                        />
                      </div>
                      
                      <div className="text-2xl md:text-4xl lg:text-4xl font-serif text-[#112225] leading-tight tracking-tight mb-20">
                        “{item.quote}”
                      </div>
                    </div>

                    <div className="mt-16 flex items-end justify-between">
                      <div className="space-y-1">
                        <p className="text-base font-bold text-[#0F1E19]">{item.clientName}</p>
                        <p className="text-base text-[#41655A] tracking-wider font-medium">
                          {item.clientRole}
                        </p>
                      </div>

                      {/* Controls Area */}
                      <div className="flex gap-px shadow-sm">
                        <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center bg-[#d9dcd5] transition-colors z-10">
                          <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center bg-[#d9dcd5] transition-colors z-10">
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </Section>
  );
}