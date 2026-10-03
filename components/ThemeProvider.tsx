"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

export type Theme = "paper" | "uv";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "paper",
  toggleTheme: () => {},
  setTheme: () => {},
});

function getThemeSnapshot(): Theme {
  try {
    const saved = localStorage.getItem("uv-theme") as Theme | null;
    if (saved === "uv" || saved === "paper") {
      return saved;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "uv" : "paper";
  } catch {
    return "paper";
  }
}

function getServerSnapshot(): Theme {
  return "paper";
}

function subscribeToTheme(callback: () => void) {
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener("theme-change", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("theme-change", handler);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerSnapshot);

  const setTheme = (t: Theme) => {
    try {
      localStorage.setItem("uv-theme", t);
      document.documentElement.setAttribute("data-theme", t);
      window.dispatchEvent(new Event("theme-change"));
    } catch {}
  };

  const toggleTheme = () => {
    const next: Theme = theme === "paper" ? "uv" : "paper";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
