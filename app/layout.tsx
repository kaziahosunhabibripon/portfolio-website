import type { Metadata, Viewport } from "next";
import { portfolioData } from "@/data";
import "./globals.css";

const { site, hero } = portfolioData;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: hero.headline,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: hero.headline,
    url: site.siteUrl,
    siteName: `${site.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: site.avatarUrl,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: hero.headline,
    images: [site.avatarUrl],
  },
  icons: {
    icon: site.logoUrl,
    apple: site.logoUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
