import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Développeur Fullstack",
  description:
    "Portfolio professionnel d'un développeur fullstack spécialisé en React, Node.js et technologies web modernes",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <TooltipProvider delayDuration={100}>
          <Suspense fallback={null}>{children}</Suspense>
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
