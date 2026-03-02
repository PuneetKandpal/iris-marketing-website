import { ContainerFluid, Section } from "@/app/components/ui";
import Image from "next/image";
import React from 'react';

const articles = [
  {
    category: 'case study',
    title: 'This is a headline about a case study from a company that had great success',
    image: '/images/img-9.png',
  },
  {
    category: 'TIPS',
    title: 'A tip for how to use Iriscale and why somebody should care',
    image: '/images/img-10.jpg',
  },
  {
    category: 'ARTICLE',
    title: 'How Iriscale turns nothing into something useful',
    image: '/images/img-11.jpg',
  },
];

export function LatestNews() {
  return (
    <Section className="pb-24 bg-white font-sans">
      <ContainerFluid>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pt-4">
          <div className="">
              <div className="inline-block border-b-2 border-iris-orange pb-1 mb-8 "> 
                  <span className="text-sm font-semibold uppercase relative inline-block text-iris-teal">
                  LATEST NEWS
                  </span>
              </div>
              <h2 className="text-[40px] sm:text-4xl md:text-5xl lg:text-[56px] text-iris-dark font-serif max-w-xl mx-auto leading-tight">
                  Keep up to date on the <br className="hidden sm:block" /> latest from Iriscale
              </h2>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="#" className="text-iris-teal md:block text-sm font-semibold underline underline-offset-4 decoration-iris-teal ">
              Read all articles
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 mb-6 relative">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs font-medium text-slate-500 mb-3 uppercase">
                {item.category}
              </p>
              <h3 className="text-2xl font-normal font-serif text-iris-dark mb-6 ">
                {item.title}
              </h3>
              <a href="#" className="text-sm font-bold text-iris-teal underline underline-offset-4 decoration-iris-teal">
                Read more
              </a>
            </div>
          ))}
        </div>
      </ContainerFluid>
    </Section>
  );
}