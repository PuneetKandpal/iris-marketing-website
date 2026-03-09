"use client";

import { ContainerFluid, Section } from "@/app/components/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const testimonialContent = [
  {
    quote:
      "We published 40 pieces in 30 days. Each one was on-brand and optimized. Our conversion rate increased 3.2x.",
    clientName: "Tom Anderson",
    clientRole: "CMO, CloudScale",
  },
];

export function BlogTestimonials() {
  return (
    <Section className="pb-24 pt-24 bg-white">
      <ContainerFluid>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch rounded-sm overflow-hidden">
          <div className="md:col-span-3 relative bg-white h-[400px] md:h-full">
            <Image
              src="/images/union.png"
              alt=""
              fill
              className="object-cover object-top sm:object-contain"
              priority
            />
          </div>

          <div className="md:col-span-9 relative">
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              watchSlidesProgress={true}
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
                <SwiperSlide key={index} className="bg-iris-cream">
                  <div className="p-10 md:p-10 lg:p-10 flex flex-col justify-between h-full">
                    <div className="space-y-12">
                      <div className="text-2xl md:text-2xl lg:text-[40px] font-serif text-iris-dark leading-tight tracking-tight mb-5 md:mb-0 lg:mb-20">
                        “{item.quote}”
                      </div>
                    </div>

                    <div className="mt-16 flex items-end justify-between">
                      <div className="space-y-1">
                        <p className="text-base font-bold text-iris-dark">{item.clientName}</p>
                        <p className="text-base text-iris-body tracking-wider font-medium">
                          {item.clientRole}
                        </p>
                      </div>

                      <div className="flex gap-px shadow-sm">
                        <button
                          type="button"
                          className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center bg-iris-border transition-colors z-10"
                        >
                          <ChevronLeft className="w-5 h-5 text-iris-dark" />
                        </button>
                        <button
                          type="button"
                          className="swiper-button-next-custom w-12 h-12 flex items-center justify-center bg-iris-border transition-colors z-10"
                        >
                          <ChevronRight className="w-5 h-5 text-iris-dark" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}
