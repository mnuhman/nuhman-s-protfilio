import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site configuration
const siteConfig = {
  name: "Mohammed Nuhman M",
  url: "https://mnuhman.vercel.app",
  ogImage: "https://mnuhman.vercel.app/og-image.png",
  author: "Mohammed Nuhman M",
  email: "mohammednuhman333@gmail.com",
  location: "Malappuram, Kerala, India",
  description: "mnuhman (Mohammed Nuhman M) - Frontend Developer from Malappuram, Kerala, India. Expert in HTML, CSS, JavaScript, TypeScript, React, and Next.js. Available for freelance web development projects.",
  keywords: [
    "mnuhman",
    "Mohammed Nuhman",
    "Mohammed Nuhman M",
    "Nuhman Portfolio",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Tailwind CSS",
    "Web Development",
    "Portfolio",
    "Freelance Developer",
    "Malappuram Developer",
    "Kerala Developer",
    "India Web Developer",
    "UI Developer",
    "Web Designer"
  ]
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Advanced Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Mohammed Nuhman M | mnuhman | Frontend Developer`,
    template: `%s | Mohammed Nuhman M`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  
  // Robots & Crawlers
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  // Manifest
  manifest: "/site.webmanifest",
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IN"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Mohammed Nuhman M (mnuhman) | Frontend Developer Portfolio`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Frontend Developer Portfolio`,
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: `Mohammed Nuhman M (mnuhman) | Frontend Developer Portfolio`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@zackmoon321",
    site: "@zackmoon321",
  },
  
  // Google Search Console Verification
  verification: {
    google: "2XSyC8Ei6H8k2SzPWzDhxMGaFvCKfYOcdITIEO6p-K8",
  },
  
  // Alternates
  alternates: {
    canonical: siteConfig.url,
  },
  
  // Category
  category: "technology",
  
  // Other
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: siteConfig.name,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.author,
      alternateName: "mnuhman",
      url: siteConfig.url,
      image: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/profile.jpg`,
      },
      sameAs: [
        "https://github.com/mnuhman",
        "https://www.linkedin.com/in/mohammed-nuhman-m-167576338/",
        "https://www.instagram.com/nuhman_tech/",
        "https://x.com/zackmoon321",
      ],
      jobTitle: "Frontend Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        addressCountry: "India",
      },
      email: siteConfig.email,
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: `Mohammed Nuhman M (mnuhman) | Frontend Developer Portfolio`,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      inLanguage: "en-US",
      about: {
        "@id": `${siteConfig.url}/#person`,
      },
      description: siteConfig.description,
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-web-development`,
      name: "Web Development",
      description: "Professional web development services using modern technologies like HTML, CSS, JavaScript, TypeScript, React, and Next.js.",
      provider: {
        "@id": `${siteConfig.url}/#person`,
      },
      serviceType: "Web Development",
      areaServed: {
        "@type": "Country",
        name: "Worldwide",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-graphic-design`,
      name: "Graphic Design",
      description: "Creating visual content to communicate messages effectively using typography, imagery, color, and layout.",
      provider: {
        "@id": `${siteConfig.url}/#person`,
      },
      serviceType: "Graphic Design",
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-digital-marketing`,
      name: "Digital Marketing",
      description: "Helping businesses reach their target audience online using SEO, social media marketing, and content strategy.",
      provider: {
        "@id": `${siteConfig.url}/#person`,
      },
      serviceType: "Digital Marketing",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
