import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  as?: "div" | "section" | "article" | "header" | "footer" | "nav";
}

export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={clsx("w-full  px-[5vw]", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
