import type { Metadata } from "next";
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

const siteUrl = "https://sabhamushtaq.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sabha Mushtaq | Full-Stack Developer",
    template: "%s | Sabha Mushtaq",
  },

  description:
    "I'm Sabha Mushtaq, a full-stack developer who enjoys turning problems into products. Explore my projects, technical skills, and work building web applications and software solutions.",

  applicationName: "Sabha Mushtaq Portfolio",

  authors: [{ name: "Sabha Mushtaq" }],
  creator: "Sabha Mushtaq",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sabha Mushtaq",
    title: "Sabha Mushtaq | Full-Stack Developer",
    description:
      "Explore my portfolio, projects, and journey as a developer building practical software products and web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sabha Mushtaq — Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sabha Mushtaq | Full-Stack Developer",
    description:
      "A developer who enjoys turning problems into products. Explore my projects and work.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}