import Image from "next/image";

const logos = [
  { name: "Acme Corp", url: "https://placehold.co/120x40/png?text=Acme+Corp" },
  { name: "GlobalTech", url: "https://placehold.co/120x40/png?text=GlobalTech" },
  { name: "Nexus", url: "https://placehold.co/120x40/png?text=Nexus" },
  { name: "Apex", url: "https://placehold.co/120x40/png?text=Apex" },
  { name: "Quantum", url: "https://placehold.co/120x40/png?text=Quantum" },
];

export function LogoTicker() {
  return (
    <section className="border-y bg-muted/30 py-10">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="relative h-10 w-[120px]">
              <Image
                src={logo.url}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
