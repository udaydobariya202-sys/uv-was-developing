import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uday Dobariya — UV Was Developing",
  description:
    "Portfolio of Uday Dobariya, an independent Flutter and full-stack developer building mobile, web, desktop, and AI-powered digital products.",
  keywords: [
    "Flutter developer",
    "full-stack developer",
    "mobile app developer",
    "Next.js",
    "Uday Dobariya",
    "UV Was Developing",
    "Rajkot",
    "India",
    "AI product builder",
    "freelance developer",
  ],
  authors: [{ name: "Uday Dobariya" }],
  creator: "Uday Dobariya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Uday Dobariya — UV Was Developing",
    description:
      "Portfolio of Uday Dobariya, an independent Flutter and full-stack developer building mobile, web, desktop, and AI-powered digital products.",
    siteName: "UV Was Developing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Dobariya — UV Was Developing",
    description:
      "Portfolio of Uday Dobariya, an independent Flutter and full-stack developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08080b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex flex-col min-h-dvh bg-bg text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
