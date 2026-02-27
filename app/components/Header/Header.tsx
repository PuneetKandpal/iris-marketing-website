import Link from "next/link";
import { Button, Container } from "@/app/components/ui";
import Image from "next/image";
import LogoBlack from "@/public/images/website/logo-black.png";

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      <Container className="h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={LogoBlack} alt="Iriscale" width={100} height={100} />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {["Platform", "Pricing", "Blog", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-camera-plain-regular text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="secondary" className="hidden sm:inline-flex font-camera-plain-regular">
            Login
          </Button>
          <Button variant="accent" className="font-camera-plain-regular">Schedule Demo</Button>
        </div>
      </Container>
    </header>
  );
}
