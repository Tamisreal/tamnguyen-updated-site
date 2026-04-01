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
          "rounded-2xl transition-all duration-200 h-full",
          variant === "default" && "bg-white border border-gray-200/80 shadow-sm",
          variant === "warm" && "bg-[#f5f3ee] border border-[#e7e5e4]",
          variant === "bordered" && "bg-transparent border border-[#d6d3d1]",
          variant === "flat" && "bg-[#f0ede8] border border-transparent",
          paddings[padding],
          hover && "cursor-pointer hover:shadow-md hover:-translate-y-[2px] hover:border-gray-200",
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
  ({ className, ...props }, ref) => <div ref={ref} className={cn("mb-4", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-lg lg:text-xl font-extrabold text-[#1c1917] leading-tight tracking-tight", className)} style={{ fontFamily: "var(--font-display)" }} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-[0.95rem] lg:text-base text-[#6b7280] leading-relaxed mt-2", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-6 pt-5 border-t border-gray-100", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export default Card;
