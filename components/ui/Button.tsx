"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

// Reusable Button with subtle hover motion and focus ring
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<string, string> = {
      primary:
        "bg-accent-uv text-white hover:bg-violet-500 active:bg-violet-700",
      secondary:
        "border border-border text-primary hover:border-accent-uv hover:text-accent-uv bg-transparent",
      ghost: "text-secondary hover:text-primary bg-transparent",
    };

    const sizes: Record<string, string> = {
      sm: "text-sm px-4 py-2",
      md: "text-sm px-5 py-2.5",
      lg: "text-base px-6 py-3",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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
  variant?: "primary" | "secondary" | "ghost";
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
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const variants: Record<string, string> = {
    primary:
      "bg-accent-uv text-white hover:bg-violet-500 active:bg-violet-700",
    secondary:
      "border border-border text-primary hover:border-accent-uv hover:text-accent-uv bg-transparent",
    ghost: "text-secondary hover:text-primary bg-transparent",
  };

  const sizes: Record<string, string> = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-6 py-3",
  };

  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.a>)}
    >
      {children}
    </motion.a>
  );
}
