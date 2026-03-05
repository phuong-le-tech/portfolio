import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { BackgroundEffect } from "@/components/ui/BackgroundEffect";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Phuong LE | Full-Stack Developer",
    template: "%s | Phuong LE",
  },
  description:
    "Portfolio of Phuong LE, a full-stack developer building fast, reliable web applications from database to pixel.",
  keywords: [
    "full-stack developer",
    "React",
    "Java",
    "Spring",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Phuong LE" }],
  openGraph: {
    title: "Phuong LE | Full-Stack Developer",
    description:
      "Portfolio of Phuong LE, a full-stack developer building fast, reliable web applications from database to pixel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-sm focus:text-sm focus:font-medium"
          >
            Skip to content
          </a>
          <BackgroundEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
