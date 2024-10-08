import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Fixed import statement
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/page-transition";
import StairTransition from "@/components/stair-transition";

const JetBrainsMonoInstance = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Luka Tomic",
  description:
    "Welcome to Luka Tomic's portfolio. Explore projects, skills, and experiences in web development and design.",
  keywords: [
    "Luka Tomic",
    "portfolio",
    "web development",
    "design",
    "projects",
    "skills",
    "experiences",
  ],
  authors: [{ name: "Luka Tomic" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${JetBrainsMonoInstance.variable} antialiased `}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
