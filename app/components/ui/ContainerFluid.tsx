import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

interface ContainerFluidProps extends ComponentPropsWithoutRef<"div"> {
  as?: "div" | "section" | "article" | "header" | "footer" | "nav";
}

export function ContainerFluid({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerFluidProps) {
  return (
    <Tag
      className={clsx("mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-24", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
