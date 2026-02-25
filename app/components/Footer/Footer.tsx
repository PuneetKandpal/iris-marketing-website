import Link from "next/link";
import { Container } from "@/app/components/ui";

const navLinks = ["Platform", "Pricing", "Blog", "About"];

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background mt-auto">
      <Container className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-serif text-2xl font-medium tracking-tight">
            Iriscale
          </Link>
          <p className="text-sm text-muted text-center md:text-left max-w-sm">
            The next generation platform for scaling your business operations.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </Container>

      <div className="border-t border-border">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Iriscale Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
