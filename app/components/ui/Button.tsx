import { Button as HeadlessButton } from "@headlessui/react";
import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent" | "outline_black" | "white" | "blackcustom";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-iris-dark text-white hover:opacity-90",
  secondary:
    "bg-iris-cream text-iris-dark hover:bg-iris-border",
  outline:
    "border border-iris-border bg-transparent text-iris-dark hover:bg-iris-cream",
  ghost:
    "bg-transparent text-iris-dark hover:bg-iris-cream",
  accent:
    "bg-iris-orange text-white hover:bg-iris-orange-hover",
  outline_black:
    "border border-iris-teal bg-transparent text-iris-teal hover:bg-iris-teal hover:text-white",
  white:
    "bg-white text-iris-dark hover:bg-iris-cream",
  blackcustom:
  "bg-iris-teal text-white hover:bg-iris-cream hover:text-iris-dark",
    
};

const sizeStyles: Record<Size, string> = {
  sm: "h-10 px-[16px] py-[8px] text-[14px]",
  md: "h-10 px-[16px] py-[8px] text-[18px]",
  lg: "h-12 px-6 text-base",
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
        "inline-flex items-center font-camera-plain-regular justify-center font-medium rounded-sm transition-all duration-150 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
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
