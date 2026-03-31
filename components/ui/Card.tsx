"use client";

import { forwardRef, ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  variant?: "default" | "warm" | "bordered" | "flat";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
}

const paddings = {
  none: "",
  sm: "p-5",
  md: "p-6",
  lg: "p-7",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, padding = "md", children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-200",
          variant === "default" && "bg-white border border-[#eeece9] shadow-[0_1px_3px_rgba(0,0,0,.04)]",
          variant === "warm" && "bg-[#f5f3ee] border border-[#e7e5e4]",
          variant === "bordered" && "bg-transparent border border-[#d6d3d1]",
          variant === "flat" && "bg-[#f0ede8] border border-transparent",
          paddings[padding],
          hover && "cursor-pointer hover:border-[#c9c5bf] hover:shadow-[0_8px_24px_rgba(0,0,0,.06)] hover:-translate-y-[2px]",
          className
        )}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mb-3", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-lg font-bold text-[#1c1917] leading-snug", className)} style={{ fontFamily: "var(--font-display)" }} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-[0.9375rem] text-[#78716c] leading-relaxed mt-2", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-5 pt-4 border-t border-[#f0ede8]", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export default Card;
