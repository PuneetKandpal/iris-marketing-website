import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type SectionVariant = "default" | "surface" | "dark" | "cream" | "lightCream" | "blue";

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-white text-iris-dark",
  surface: "bg-iris-cream text-iris-dark",
  dark: "bg-iris-teal text-white",
  cream: "bg-iris-light text-iris-dark",
  lightCream: "bg-iris-cream text-iris-dark",
  blue: "bg-iris-dark text-white",
};

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  variant?: SectionVariant;
}

export function Section({
  variant = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={clsx(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}
