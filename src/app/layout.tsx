import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Nuhman M | Frontend Developer",
  description: "Frontend Developer specializing in creating modern, responsive web applications. Skilled in HTML, CSS, JavaScript, TypeScript, React, and Next.js.",
  keywords: ["Frontend Developer", "Web Developer", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Mohammed Nuhman M" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mohammed Nuhman M | Frontend Developer",
    description: "Frontend Developer specializing in creating modern, responsive web applications.",
    url: "https://mnuhman.github.io",
    siteName: "Mohammed Nuhman Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Nuhman M | Frontend Developer",
    description: "Frontend Developer specializing in creating modern, responsive web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
