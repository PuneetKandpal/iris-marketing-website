"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button, Container, ContainerFluid, Section } from "@/app/components/ui";

export function AboutHero() {
  return (
    <Section variant="lightCream" className="border-b border-iris-cream">
      <ContainerFluid className="pt-14 pb-14 md:pt-20 md:pb-16">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-none text-iris-dark">
            Marketing expertise built into software
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-snug text-iris-dark max-w-xl">
            20 years of proven strategy, systematized for growing companies.
          </p>

          <div className="mt-10 flex flex-row items-start justify-start gap-4">
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              Try for Free
            </Button>
            <Button
              variant="outline_black"
              size="lg"
              className="w-full sm:w-auto group"
            >
              Book Demo
            </Button>
          </div>
        </div>

        <div className="mt-14 md:mt-24">
          <div className="relative h-4 w-full overflow-hidden">
            <Image
              src="/images/lines.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}

export function ProblemSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="pt-20 pb-14 md:pt-24 md:pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex flex-col items-start gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-iris-teal">
              FOUNDATION
            </p>
            <div className="h-0.5 w-full bg-iris-orange" />
          </div>

          <h2 className="mt-6 font-serif text-[40px] md:text-[56px] leading-none tracking-tight text-iris-dark">
            The problem we solve
          </h2>

          <div className="mt-6 max-w-xl text-base leading-relaxed text-iris-teal">
            <p>Marketing tools handle tactics. None handle strategy.</p>
            <p className="mt-6">
              Teams spend weeks on competitive analysis, persona research, and
              content planning before executing anything. Small companies cannot
              afford strategic expertise. Large teams drown in disconnected tools.
            </p>
            <p className="mt-6">
              AI made content creation fast but strategy harder. Now teams
              produce mediocre content at scale.
            </p>
            <p className="mt-6">
              Iriscale solves strategy first. Expert-level thinking, accessible to
              any company.
            </p>
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}

export function TextureDivider() {
  return (
    <div className="w-full border-y border-iris-cream bg-white">
      <div className="h-16 w-full overflow-hidden">
        <Image
          src="/images/lines.png"
          alt=""
          width={1440}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

const results = [
  {
    title: "$0 to $1B in 4 years",
    description: "Amazon Business growth team experience",
  },
  {
    title: "10x customer growth",
    description: "Fortune 100 B2B scaling",
  },
  {
    title: "Zero to millions",
    description: "Multiple websites grown from launch to massive organic traffic",
  },
  {
    title: "20 years systematized",
    description: "Every strategy in Iriscale comes from proven methods, not theory",
  },
];

export function ResultsSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="pt-20 md:pt-24">
        <div className="text-center">
          <h2 className="font-serif text-[40px] md:text-[56px] leading-none tracking-tight text-iris-dark">
            Built on real results
          </h2>
        </div>

        <div className="mt-12 border-b border-iris-cream pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {results.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <p className="font-serif text-2xl md:text-[30px] leading-tight tracking-tight text-iris-dark">
                  {item.title}
                </p>
                <p className="text-sm md:text-base text-iris-teal leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}

const differences = [
  {
    title: "Strategy before execution",
    description: "Know what to create and why before generating content.",
    highlighted: true,
  },
  {
    title: "Quality at scale",
    description: "AI speed with expert-level thinking built in.",
  },
  {
    title: "Intelligence that compounds",
    description: "Marketing gets easier over time, not harder.",
  },
  {
    title: "Accessible expertise",
    description: "Strategic capabilities without the strategic salary.",
  },
];

export function DifferencesSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="pt-20 pb-20 md:pt-24 md:pb-24">
        <h2 className="font-serif text-[40px] md:text-[56px] leading-none tracking-tight text-iris-dark">
          How we&apos;re different
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          <div className="flex flex-col">
            {differences.map((item) => (
              <div
                key={item.title}
                className={
                  "border-l-4 pl-6 py-4 " +
                  (item.highlighted ? "border-iris-orange" : "border-iris-cream")
                }
              >
                <p className="font-serif text-2xl md:text-[30px] leading-tight tracking-tight text-iris-dark">
                  {item.title}
                </p>
                <p className="mt-2 text-base text-iris-teal leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-md min-h-[320px] bg-iris-dark">
            <Image
              src="/images/img-18.png"
              alt=""
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}

const updates = [
  {
    title: "A strategic approach",
    description:
      "A system for building marketing foundations and executing with precision.",
    image: "/images/img-16.png",
  },
  {
    title: "How AI changes marketing",
    description:
      "What actually matters now that content creation is cheap.",
    image: "/images/img-15.png",
  },
  {
    title: "The work behind results",
    description:
      "How teams operationalize strategy into consistent execution.",
    image: "/images/img-14.png",
  },
];

export function UpdatesSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-[40px] md:text-[56px] leading-none tracking-tight text-iris-dark">
              Keep up to date on the latest from Iriscale
            </h2>
            <p className="mt-4 text-base md:text-lg text-iris-teal max-w-2xl">
              Strategy, systems, and what we&apos;re learning building Iriscale.
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline_black" size="md">
              View all
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="relative aspect-16/10 overflow-hidden bg-iris-cream mb-6">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-normal font-serif text-iris-dark mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-iris-body leading-relaxed mb-4">
                {item.description}
              </p>
              <a
                href="#"
                className="text-sm font-bold text-iris-teal underline underline-offset-4 decoration-iris-teal"
              >
                Read more
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Button variant="outline_black" size="md" className="w-full">
            View all
          </Button>
        </div>
      </ContainerFluid>
    </Section>
  );
}

export function AboutCtaSection() {
  return (
    <Section className="bg-white">
      <ContainerFluid className="pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-iris-orange" />
              <div className="h-10 w-10 rounded-full bg-iris-teal" />
              <div className="h-10 w-10 rounded-full bg-iris-cream border border-iris-border" />
            </div>

            <h2 className="mt-10 font-serif text-[44px] md:text-[64px] leading-tight tracking-tight text-iris-teal">
              Start building your marketing strategy
            </h2>
            <p className="mt-4 text-lg md:text-xl text-iris-teal leading-snug">
              See how Iriscale creates your competitive analysis, persona
              research, and content strategy in the first hour.
            </p>

            <div className="mt-10">
              <Button variant="blackcustom" size="lg" className="w-full sm:w-auto">
                Try Iriscale free for 14 days
              </Button>
            </div>

            <p className="mt-4 text-sm text-iris-teal">
              No credit card • 1-hour setup • Full access • Cancel anytime
            </p>
          </div>

          <div className="relative min-h-[320px] md:min-h-[420px]">
            <div className="absolute right-0 top-0 h-48 w-48 md:h-56 md:w-56 overflow-hidden">
              <Image src="/images/img-10.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="absolute right-16 top-28 h-56 w-56 md:h-72 md:w-72 overflow-hidden">
              <Image src="/images/img-11.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </ContainerFluid>
    </Section>
  );
}

const faqs = [
  {
    question: "How accurate is the competitive analysis?",
    answer:
      "Agents analyze publicly available competitor information including websites, published content, and market positioning. Most customers report discovering insights they missed in manual research. Accuracy depends on what competitors make public.",
  },
  {
    question: "Can I edit strategies before generating content?",
    answer:
      "You can review and refine your strategy artifacts before generating content. Iriscale is designed so strategy guides execution, not the other way around.",
  },
  {
    question: "Who is Iriscale for?",
    answer:
      "Teams that want strategy-first marketing execution: founders, marketers, and operators who need consistent quality without adding headcount.",
  },
  {
    question: "What exactly does Iriscale do?",
    answer:
      "Iriscale builds your foundations (positioning, personas, journeys, competitive analysis) and then generates content that matches your strategy and brand voice.",
  },
];

export function AboutFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="pt-24 pb-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[40px] lg:text-[40px] font-serif text-iris-dark leading-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="border-t border-iris-border">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-iris-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group transition-all"
              >
                <span className="text-2xl md:text-2xl lg:text-2xl font-serif text-iris-dark pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-iris-dark transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] pb-10" : "max-h-0"
                }`}
              >
                <p className="text-base md:text-base lg:text-base text-iris-teal leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
