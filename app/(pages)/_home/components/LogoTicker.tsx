import Image from "next/image";
import { Container, Section } from "@/app/components/ui";

const logos = [
  { name: "Acme Corp", url: "/images/logos/acme.svg" },
  { name: "GlobalTech", url: "/images/logos/globaltech.svg" },
  { name: "Nexus", url: "/images/logos/nexus.svg" },
  { name: "Apex", url: "/images/logos/apex.svg" },
  { name: "Quantum", url: "/images/logos/quantum.svg" },
];

export function LogoTicker() {
  return (
    <Section variant="surface" className="border-y border-border py-10">
      <Container>
        <p className="text-center text-sm font-medium text-muted mb-8">
          TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
          {logos.map((logo) => (
            <div key={logo.name} className="relative h-10 w-[140px]">
              <Image
                src={logo.url}
                alt={logo.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
