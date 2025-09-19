import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "@/providers/providers";
import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://vetarent.com"
      : "http://localhost:3000"
  ),
  title: "Vetarent - Verified Rentals Platform",
  description:
    "Nigeria's most trusted rental platform. Verified landlords, verified properties, verified tenants. Rent with confidence and avoid fraud.",
  authors: [{ name: "Vetarent Technologies" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "Vetarent - Verified Rentals Platform",
    description:
      "Nigeria's most trusted rental platform. Verified landlords, verified properties, verified tenants. Rent with confidence and avoid fraud.",
    type: "website",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vetarentng",
    images: ["/images/og-image.png"], 
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#003bb2",
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
          <div className="min-h-screen bg-background !min-w-[365px] overflow-x-auto">
            <Header />
            {children}
            <Footer />
          </div>
          </Providers>
      </body>  
    </html>
  );
}
