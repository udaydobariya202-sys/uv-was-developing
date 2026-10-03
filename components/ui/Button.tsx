"use client";

import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium transition-all duration-150 ease-out hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-40 disabled:pointer-events-none disabled:hover:translate-y-0 cursor-pointer select-none";

    const variants: Record<string, string> = {
      primary: "bg-primary text-bg hover:bg-[#2c2a32]",
      outline: "border border-border-strong text-primary bg-transparent hover:bg-surface hover:border-primary",
      ghost: "text-secondary hover:text-primary hover:bg-surface/60 bg-transparent hover:-translate-y-0",
    };

    const sizes: Record<string, string> = {
      sm: "text-xs px-3.5 py-1.5",
      md: "text-sm px-5 py-2.5",
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
  variant?: "primary" | "outline" | "ghost";
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
    "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium transition-all duration-150 ease-out hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg cursor-pointer select-none";

  const variants: Record<string, string> = {
    primary: "bg-primary text-bg hover:bg-[#2c2a32]",
    outline: "border border-border-strong text-primary bg-transparent hover:bg-surface hover:border-primary",
    ghost: "text-secondary hover:text-primary hover:bg-surface/60 bg-transparent hover:-translate-y-0",
  };

  const sizes: Record<string, string> = {
    sm: "text-xs px-3.5 py-1.5",
    md: "text-sm px-5 py-2.5",
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
