"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "primary" | "accent" | "success" | "warning" | "beginner" | "intermediate" | "advanced";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
}

const variants: Record<BadgeVariant, string> = {
  default:      "bg-[#f8fafc] text-[#6b7280] border border-gray-200",
  primary:      "bg-[#eef4fb] text-[#1e3a5f] border border-[#d9e6f5]",
  accent:       "bg-[#fef0eb] text-[#c4552d] border border-[#fde3d9]",
  success:      "bg-emerald-50 text-emerald-700 border border-emerald-100",
  warning:      "bg-amber-50 text-amber-700 border border-amber-100",
  beginner:     "bg-emerald-50 text-emerald-700 border border-emerald-100",
  intermediate: "bg-amber-50 text-amber-700 border border-amber-100",
  advanced:     "bg-red-50 text-red-700 border border-red-100",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", dot, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-full whitespace-nowrap",
          variants[variant],
          className
        )}
        {...props}
      >
        {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";
export default Badge;
