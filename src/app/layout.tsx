import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "@/providers/providers";
import { GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://trust-rent-ng.vercel.app"
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Vetarent",
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
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* iOS Splash Screens */}
        
        {/* iPad Pro 12.9" */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2048-2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2732-2048.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* iPad Pro 11" */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1668-2388.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2388-1668.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* iPad 10.2" */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1536-2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2048-1536.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* iPad Air 10.9" */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1640-2360.png" media="(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2360-1640.png" media="(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* iPad Pro 10.5" */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1668-2224.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2224-1668.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* iPad 10.9" */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1620-2160.png" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2160-1620.png" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* iPad Mini */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1488-2266.png" media="(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2266-1488.png" media="(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* iPhone 16 Pro Max, 15 Pro Max */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1320-2868.png" media="(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2868-1320.png" media="(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 16, 15 */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1206-2622.png" media="(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2622-1206.png" media="(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 16 Plus, 15 Plus */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1260-2736.png" media="(device-width: 420px) and (device-height: 912px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2736-1260.png" media="(device-width: 420px) and (device-height: 912px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 15 Pro Max, 14 Pro Max */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1290-2796.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2796-1290.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 15 Pro, 14 Pro */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1179-2556.png" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2556-1179.png" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 14, 13, 12 */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1170-2532.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2532-1170.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 14 Plus, 13 Pro Max, 12 Pro Max */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1284-2778.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2778-1284.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 13 mini, 12 mini, 11 Pro, X, XS */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1125-2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2436-1125.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 11 Pro Max, XS Max */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1242-2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2688-1242.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 11, XR */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-828-1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1792-828.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1242-2208.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-2208-1242.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
        
        {/* iPhone 8, 7, 6s, 6 */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-750-1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1334-750.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
        
        {/* iPhone SE, 5s, 5c, 5 */}
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-640-1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/apple/splash/apple-splash-1136-640.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen bg-background !min-w-[365px] overflow-x-auto">
            {children}
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID!} />
    </html>
  );
}
