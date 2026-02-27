import { Container, Section } from "@/app/components/ui";
import Image from "next/image";

const comparison = [
  {
    label: "WITHOUT IRISCALE",
    title: "Every tool forgets your context. You're the human API.",
    description:
      "Brief ChatGPT. Again. Copy keywords from Semrush. Again. Explain your positioning. Again. Review for consistency. Again.",
    variant: "light",
    image: "/images/img-1.png",
  },
  {
    label: "WITH IRISCALE",
    title: (
      <>
        Build intelligence once.<br />
        Strategic agents execute.
      </>
    ),
    description:
      "Content knows your products. Keywords connect automatically. Brand voice stays consistent. Everything compounds.",
    variant: "dark",
    image: "/images/img-3.png",
  },
];

export function WithWithoutIriscle() {
  return (
    <Section className="pt-24">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-flecha-s-regular font-light tracking-tight">
            The broken loop you're stuck in
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {comparison.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden px-12 py-12 md:px-16 flex flex-col justify-between  ${
                item.variant === "dark"
                  ? "text-white"
                  : "text-foreground bg-white"
              }`}
            >
              {/* Background for dark card */}
              {item.variant === "dark" && (
                <div className="absolute inset-0">
                  <Image
                    src="/images/img-3.png"
                    alt="background"
                    fill
                    className=""
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              )}

              {/* Top Content */}
              <div className="relative z-10 text-center space-y-6">
                <p
                  className={`text-sm text-[#0B363C] font-semibold uppercase relative inline-block mb-8 ${
                    item.variant === "dark"
                      ? "text-white/70"
                      : "text-[#0B363C]"
                  }`}
                >
                  {item.label}
                </p>

                <h3 className="text-[40px] md:text-3xl font-flecha-s-regular font-{400} leading-tight">
                  {item.title}
                </h3>

                <p
                  className={`text-sm md:text-base text-[#0B363C] max-w-md ${
                    item.variant === "dark"
                      ? "text-white/80"
                      : "text-muted"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Bottom Design */}
              <div className="relative z-10 mt-10 flex flex-col items-center">
                {item.variant === "light" ? (
                  <div className="relative w-full h-[260px]">
                    <Image
                      src={item.image}
                      alt="preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <>
                    {/* Main card */}
                    <div className="relative w-[340px] h-[260px] ">
                      <Image src="/images/img-2.png" fill alt="img" />
                    </div>

                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}