import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "@/providers/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vetarent - Verified Rentals Platform",
  description:
    "Nigeria's most trusted rental platform. Verified landlords, verified properties, verified tenants. Rent with confidence and avoid fraud.",
  authors: [{ name: "Vetarent Technologies" }],
  openGraph: {
    title: "Vetarent - Verified Rentals Platform",
    description:
      "Nigeria's most trusted rental platform. Verified landlords, verified properties, verified tenants. Rent with confidence and avoid fraud.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vetarent_ng",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  icons: {
    icon: "/favicon.ico", // in public/
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>  
    </html>
  );
}
