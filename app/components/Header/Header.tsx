import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-serif text-3xl font-medium tracking-tight">
            Iriscale
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/platform"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Platform
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Auth & Demo Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="secondary" className="hidden sm:inline-flex">
            Login
          </Button>
          <Button variant="brand">Schedule Demo</Button>
        </div>
      </div>
    </header>
  );
}
