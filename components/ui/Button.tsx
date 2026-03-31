"use client";

import { forwardRef, ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "disabled" | "onClick"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:   "bg-[#1e3a5f] text-white shadow-sm border border-[#1e3a5f] hover:bg-[#162d4a] hover:shadow-md",
  secondary: "bg-[#e8eef4] text-[#1e3a5f] border border-[#e8eef4] hover:bg-[#dce5ef] hover:border-[#c5d3e3]",
  outline:   "bg-white text-[#44403c] border border-gray-200 shadow-sm hover:border-[#1e3a5f] hover:text-[#1e3a5f] hover:bg-[#f8fafc] hover:shadow-md",
  ghost:     "bg-transparent text-[#78716c] hover:text-[#1c1917] hover:bg-[#f5f3ee]",
  accent:    "bg-[#c4552d] text-white shadow-sm border border-[#c4552d] hover:bg-[#a8461f] hover:shadow-md hover:-translate-y-0.5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-12 px-7 text-base gap-2",
  xl: "h-14 px-9 text-lg gap-3",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon, iconPosition = "right", isLoading, fullWidth, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold",
          "rounded-full",
          "transition-all duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/40 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-[0.97]",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : (
          <>
            {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
