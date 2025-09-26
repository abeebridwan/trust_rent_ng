"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import homesettingAuth from "@/assets/Images/homesetting-auth.jpg";
import homesettingAuthMobile from "@/assets/Images/homesetting-auth-mobile.jpg";

export default function ClientAuthWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSignupPage = pathname === "/signup";

  return (
    <div className="container-nopad mx-auto px-4">
      {/* Mobile background */}
      <div
        className={`relative w-full ${
          isSignupPage ? "min-h-[1237px]" : "min-h-[932px]"
        } block sm:hidden overflow-hidden`}
      >
        <Image
          src={homesettingAuthMobile}
          alt="Home Setting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>

      {/* Desktop background */}
      <div
        className={`relative w-full ${
          isSignupPage ? "min-h-[1237px]" : "min-h-[982px]"
        } hidden sm:block overflow-hidden`}
      >
        <Image
          src={homesettingAuth}
          alt="Home Setting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
