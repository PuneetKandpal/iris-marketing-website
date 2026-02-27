import Link from "next/link";
import { Container, Section } from "@/app/components/ui";
import Image from "next/image";

const footerSections = [
  {
    title: "Overview",
    links: [
      { label: "Product", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Other", href: "/other" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email", href: "mailto:hello@iriscale.com" },
      { label: "LinkedIn", href: "#" },
      { label: "X / Twitter", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <Section variant="blue" className="w-full text-white pt-24 pb-12">
        <Container>
          <div className="flex justify-between items-center mb-10">
            <div className="relative w-[200px] h-[60px] md:w-[250px] md:h-[100px]">
              <Image
                src="/images/logowhite.png"
                alt="Iriscale Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="relative w-12 h-12 ">
                  <Image 
                      src="/images/vector-2.png" 
                      alt="Iriscale Icon" 
                      fill 
                      className="object-contain"
                  />
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-white/10 mb-16" />

          {/* Bottom Section: Copyright and Nav Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Copyright Info */}
            <div className="md:col-span-5">
              <p className="text-sm text-white">
                © 2025 Iriscale. All rights reserved.
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title} className="flex flex-col gap-4">
                  <h4 className="text-sm font-medium text-white">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link 
                          href={link.href}
                          className="text-sm text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}