import { Button as HeadlessButton } from "@headlessui/react";
import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent" | "outline_black" | "white";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:opacity-90",
  secondary:
    "bg-surface text-foreground hover:bg-surface/80",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface",
  ghost:
    "bg-transparent text-foreground hover:bg-surface",
  accent:
    "bg-accent text-accent-foreground hover:opacity-90",
  outline_black:
    "border border-[#0B363C] bg-transparent text-foreground hover:bg-surface",
  white:
    "bg-white text-[#112225] hover:bg-surface",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <HeadlessButton
      className={clsx(
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </HeadlessButton>
  );
}
