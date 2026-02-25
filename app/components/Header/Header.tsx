import Link from "next/link";
import { Button, Container } from "@/app/components/ui";

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <Container className="h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-serif text-3xl font-medium tracking-tight">
            Iriscale
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {["Platform", "Pricing", "Blog", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="secondary" className="hidden sm:inline-flex">
            Login
          </Button>
          <Button variant="accent">Schedule Demo</Button>
        </div>
      </Container>
    </header>
  );
}
