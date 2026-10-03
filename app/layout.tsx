import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dcmlabs.online"),
  title: "Uday Dobariya — Flutter Developer & Full-Stack Product Builder | UV WAS DEVELOPING",
  description:
    "Uday Dobariya is a Flutter developer and full-stack product builder working independently under UV WAS DEVELOPING. Explore production-ready Flutter apps, backend systems, and digital products.",
  keywords: [
    "Flutter developer",
    "full-stack developer",
    "mobile app developer",
    "Next.js",
    "Uday Dobariya",
    "UV WAS DEVELOPING",
    "Rajkot",
    "India",
    "AI product builder",
    "freelance developer",
  ],
  authors: [{ name: "Uday Dobariya" }],
  creator: "Uday Dobariya",
  alternates: {
    canonical: "https://dcmlabs.online",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dcmlabs.online",
    title: "Uday Dobariya — Flutter Developer & Full-Stack Product Builder | UV WAS DEVELOPING",
    description:
      "Uday Dobariya is a Flutter developer and full-stack product builder working independently under UV WAS DEVELOPING. Explore production-ready Flutter apps, backend systems, and digital products.",
    siteName: "UV WAS DEVELOPING",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uday Dobariya — Flutter Developer & Full-Stack Product Builder | UV WAS DEVELOPING",
    description:
      "Uday Dobariya is a Flutter developer and full-stack product builder working independently under UV WAS DEVELOPING. Explore production-ready Flutter apps, backend systems, and digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F3EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="flex flex-col min-h-dvh bg-bg text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:font-sans focus:font-bold focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
