import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type SectionVariant = "default" | "surface" | "dark" | "cream";

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  dark: "bg-surface-dark text-background",
  cream: "bg-cream text-foreground",
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
