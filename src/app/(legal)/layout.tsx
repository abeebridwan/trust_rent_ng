'use client';

import Image from "next/image";
import homesetting from "@/assets/Images/homesetting.png";
import homesettingMobile from "@/assets/Images/homesetting-mobile.png";
import { usePathname } from "next/navigation";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const getContent = () => {
    switch (pathname) {
      case '/about-us':
        return (
          <div className="w-[80%] mx-auto bg-transparent text-center space-y-4 s,:space-y-8">
            <h3 className="font-semibold text-2xl sm:text-[2.5rem]">About Us</h3>
            <p className="font-semibold text-sm sm:text-lg leading-[40px]">
              Founded in 2025, Vetarent tackles Nigeria’s biggest rental challenges — fraud, fake listings, and unreliable agents 
              — by combining technology and verification to ensure safe, trusted connections between landlords and tenants
            </p>
          </div>
        );
      case '/contact-us':
        return (
          <div className="w-full mx-auto bg-transparent px-4">
            <h3 className="font-semibold text-xl md:text-[2.5rem]">Contact Us</h3>
          </div>
        );
      case '/faqs':
        return (
          <div className="w-full mx-auto bg-transparent px-4">
            <h3 className="font-semibold text-xl md:text-[2.5rem]">FAQ's</h3>
          </div>
        );
      case '/privacy-policy':
        return (
          <div className="w-full mx-auto bg-transparent px-4">
            <h3 className="font-semibold text-xl md:text-[2.5rem]">Privacy Policy</h3>
          </div>
        );
      case '/terms-and-conditions':
        return (
           <div className="w-full mx-auto bg-transparent px-4">
            <h3 className="font-semibold text-xl md:text-[2.5rem]">Terms & Condition</h3>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative">
      <div className="w-full h-[740px] hidden md:block">
        <Image src={homesetting} alt="Home Setting" fill className="object-cover" />
      </div>
      <div className="w-full h-[459px] md:hidden"> 
            <Image src={homesettingMobile} alt="Home Setting Mobile" fill className="object-cover" />
      </div>
      <div className="absolute w-full text-white bottom-12 left-1/2 -translate-x-1/2 mx-auto">
        {getContent()}
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </div>
    </main>
  );
}
