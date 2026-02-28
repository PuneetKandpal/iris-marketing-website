import { Button, ContainerFluid, Section } from "@/app/components/ui";
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
    <section className="pt-24 pb-24 bg-white font-sans">
      <ContainerFluid>
        <div className="flex justify-between items-end mb-12 pt-4">
          <div className="">
              <div className="inline-block border-b-2 border-orange-500 pb-1 mb-8 "> 
                  <span className="text-sm font-semibold uppercase relative inline-block text-[#0B363C]">
                  LATEST NEWS
                  </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#112225] font-serif max-w-xl mx-auto">
                  Keep up to date on the <br /> latest from Iriscale
              </h2>
          </div>
          <a href="#" className="hidden text-[#063F2E] md:block text-sm font-semibold underline underline-offset-4 decoration-[#063F2E] ">
            Read all articles
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs font-medium text-slate-500 mb-3 uppercase">
                {item.category}
              </p>
              <h3 className="text-2xl font-normal font-serif text-[#112225] mb-6 ">
                {item.title}
              </h3>
              <a href="#" className="text-sm font-bold text-[#063F2E] underline underline-offset-4 decoration-[#063F2E]">
                Read more
              </a>
            </div>
          ))}
        </div>
      </ContainerFluid>
    </section>
  );
}