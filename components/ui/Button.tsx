"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

// Reusable Button with subtle hover motion and accessible focus ring
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants: Record<string, string> = {
      primary:
        "bg-accent-lime text-[#0B0A0C] font-semibold hover:bg-accent-lime-hover shadow-sm shadow-accent-lime/20",
      secondary:
        "bg-accent-uv text-white hover:bg-accent-uv-hover shadow-sm shadow-accent-uv/20",
      outline:
        "border border-border text-primary hover:border-accent-lime hover:text-accent-lime bg-transparent",
      ghost: "text-secondary hover:text-primary bg-transparent",
    };

    const sizes: Record<string, string> = {
      sm: "text-xs font-mono px-3.5 py-1.5",
      md: "text-sm px-5 py-2.5",
      lg: "text-sm sm:text-base px-6 py-3",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

// Link-based button for anchor tags
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
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime focus-visible:ring-offset-2 focus-visible:ring-offset-bg cursor-pointer";

  const variants: Record<string, string> = {
    primary:
      "bg-accent-lime text-[#0B0A0C] font-semibold hover:bg-accent-lime-hover shadow-sm shadow-accent-lime/20",
    secondary:
      "bg-accent-uv text-white hover:bg-accent-uv-hover shadow-sm shadow-accent-uv/20",
    outline:
      "border border-border text-primary hover:border-accent-lime hover:text-accent-lime bg-transparent",
    ghost: "text-secondary hover:text-primary bg-transparent",
  };

  const sizes: Record<string, string> = {
    sm: "text-xs font-mono px-3.5 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-sm sm:text-base px-6 py-3",
  };

  return (
    <motion.a
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.a>)}
    >
      {children}
    </motion.a>
  );
}
