"use client";

import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-md font-mono font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

    const variants: Record<string, string> = {
      primary:
        "bg-accent-lime text-[#121014] border-2 border-border shadow-ink hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-ink-lg active:translate-x-0 active:translate-y-0 active:shadow-none",
      secondary:
        "bg-accent-uv text-white border-2 border-border shadow-ink hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-ink-lg active:translate-x-0 active:translate-y-0 active:shadow-none",
      outline:
        "bg-surface-elevated text-primary border-2 border-border shadow-ink hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-ink-lg active:translate-x-0 active:translate-y-0 active:shadow-none",
      ghost:
        "bg-transparent text-primary hover:bg-surface border-2 border-transparent hover:border-border active:translate-y-0",
    };

    const sizes: Record<string, string> = {
      sm: "text-xs px-3.5 py-1.5",
      md: "text-xs sm:text-sm px-5 py-2.5",
      lg: "text-sm sm:text-base px-6 py-3",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-mono font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime cursor-pointer select-none";

  const variants: Record<string, string> = {
    primary:
      "bg-accent-lime text-[#121014] border-2 border-border shadow-ink hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-ink-lg active:translate-x-0 active:translate-y-0 active:shadow-none",
    secondary:
      "bg-accent-uv text-white border-2 border-border shadow-ink hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-ink-lg active:translate-x-0 active:translate-y-0 active:shadow-none",
    outline:
      "bg-surface-elevated text-primary border-2 border-border shadow-ink hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-ink-lg active:translate-x-0 active:translate-y-0 active:shadow-none",
    ghost:
      "bg-transparent text-primary hover:bg-surface border-2 border-transparent hover:border-border active:translate-y-0",
  };

  const sizes: Record<string, string> = {
    sm: "text-xs px-3.5 py-1.5",
    md: "text-xs sm:text-sm px-5 py-2.5",
    lg: "text-sm sm:text-base px-6 py-3",
  };

  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
