import Link from "next/link";
import { Search } from "lucide-react";
import { Button, Container, Section } from "@/app/components/ui";

const sidebarItems = [
  { label: "Marketing Intelligence 101", href: "/blog" },
  { label: "SEO Strategy & Operations", href: "/blog" },
  { label: "Content Operations & Scale", href: "/blog" },
  { label: "Social Media Planning", href: "/blog" },
  { label: "Multi-Brand Governance", href: "/blog" },
  { label: "Marketing Analytics & ROI", href: "/blog" },
  { label: "Team Collaboration for Marketing", href: "/blog" },
  { label: "Workflow Automation", href: "/blog" },
  { label: "AI Search & Brand Visibility", href: "/blog" },
  { label: "Iriscale Intelligence Framework", href: "/blog" },
];

const cards = [
  {
    id: "single-source",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "Single Source of Truth Marketing",
    excerpt:
      "A single source of truth in marketing centralizes data from all channels and systems into one reliable, consistent view so teams make decisions from the same validated information.",
  },
  {
    id: "mi-vs-bi",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "Marketing Intelligence vs Business Intelligence",
    excerpt:
      "Marketing intelligence focuses specifically on unifying and analyzing marketing data to optimize growth, while business intelligence spans broader operational and strategic decisions.",
  },
  {
    id: "mi-stack",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "Building Marketing Intelligence Stack",
    excerpt:
      "How to design the systems and data layers that run marketing activity into predictable insight.",
  },
  {
    id: "mi-guide",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "What is Marketing Intelligence Guide",
    excerpt:
      "A practical overview of what marketing intelligence is and how to implement it.",
  },
  {
    id: "use-cases",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "Marketing Intelligence Use Cases",
    excerpt:
      "Real examples of how unified marketing data improves performance and decision making.",
  },
  {
    id: "stack-diagram",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "Marketing Intelligence Stack Diagram",
    excerpt:
      "A visual breakdown of the core components in a modern marketing intelligence stack.",
  },
  {
    id: "compound",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "Marketing should compound, not reset",
    excerpt:
      "Marketing systems should build long-term value instead of starting from zero each cycle.",
  },
  {
    id: "ai-without-memory",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "AI without memory is just automation",
    excerpt:
      "A truly becomes intelligent when it retains context and learns over time.",
  },
  {
    id: "dashboards",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "Why dashboards don’t equal intelligence",
    excerpt:
      "Reporting metrics is not the same as generating insight or direction.",
  },
  {
    id: "ai-content-brain",
    metaLeft: "MARKETING INTELLIGENCE 101",
    metaRight: "8 MIN READ",
    title: "Why AI content needs a brain",
    excerpt:
      "AI content performs best when guided by structure, strategy and context.",
  },
];

export function BlogGrid() {
  return (
    <Section className="py-10 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14">
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="font-serif text-2xl text-iris-dark">Skill Center</div>

            <div className="mt-5">
              <div className="flex items-center gap-2 rounded-md border border-iris-border bg-white px-3 py-2">
                <Search className="h-4 w-4 text-iris-muted" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full bg-transparent text-sm text-iris-dark placeholder:text-iris-muted focus:outline-none"
                />
              </div>
            </div>

            <nav className="mt-6">
              <div className="flex flex-col gap-1">
                {sidebarItems.map((item, idx) => {
                  const isActive = idx === 0;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={
                        isActive
                          ? "rounded-md bg-iris-light px-3 py-2 text-sm text-iris-dark"
                          : "rounded-md px-3 py-2 text-sm text-iris-body hover:bg-iris-light"
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </aside>

          <main>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="lg:col-span-2 rounded-md bg-iris-teal text-white px-6 py-7 md:px-8 md:py-8">
                <div className="inline-flex items-center rounded-sm bg-white/15 px-2 py-1 text-[10px] tracking-wide font-camera-plain-regular">
                  MARKETING INTELLIGENCE 101
                </div>

                <h1 className="mt-4 font-serif text-[32px] leading-tight tracking-tight md:text-[40px]">
                  What is Marketing Intelligence
                </h1>

                <p className="mt-3 max-w-2xl text-sm md:text-[15px] leading-relaxed text-white/80 font-camera-plain-regular">
                  Marketing intelligence is the structured process of collecting, analyzing, and
                  organizing marketing data across channels to drive better decisions. It turns
                  fragmented metrics into a single source of truth so teams can understand performance,
                  identify opportunities, and make durable choices based on evidence rather than
                  instinct.
                </p>

                <div className="mt-5">
                  <Button variant="accent" size="sm" className="rounded-sm">
                    Read More
                  </Button>
                </div>
              </div>

              {cards.map((card) => (
                <Link
                  key={card.id}
                  href={`/blog/${card.id}`}
                  className="rounded-md border border-iris-border bg-iris-light px-6 py-7 hover:bg-iris-cream transition-colors"
                >
                  <div className="flex items-center justify-between text-[10px] tracking-wide text-iris-muted">
                    <span className="font-camera-plain-regular">{card.metaLeft}</span>
                    <span className="font-camera-plain-regular">{card.metaRight}</span>
                  </div>

                  <h2 className="mt-4 font-serif text-[24px] leading-snug tracking-tight text-iris-dark">
                    {card.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-iris-body font-camera-plain-regular">
                    {card.excerpt}
                  </p>

                  <div className="mt-5">
                    <Button variant="accent" size="sm" className="rounded-sm">
                      Read More
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </Container>
    </Section>
  );
}
