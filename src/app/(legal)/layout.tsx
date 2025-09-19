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
          <div className="w-[90%] sm:w-[80%] text-center mx-auto bg-transparent text-center space-y-4 sm:space-y-8">
            <h3 className="font-semibold text-2xl sm:text-[2.5rem]">About Us</h3>
            <p className="font-semibold text-sm sm:text-lg leading-loose sm:leading-[40px]">
              Founded in 2025, Vetarent tackles Nigeria&apos;s biggest rental challenges — fraud, fake listings, and unreliable agents 
              — by combining technology and verification to ensure safe, trusted connections between landlords and tenants
            </p>
          </div>
        );
      case '/contact-us':
        return (
          <div className="w-full mx-auto bg-transparent">
            <h3 className="font-semibold text-2xl xs:text-[2.5rem]">Contact Us</h3>
          </div>
        );
      case '/faqs':
        return (
          <div className="w-full mx-auto bg-transparent">
            <h3 className="font-semibold text-2xl xs:text-[2.5rem]">FAQ&apos;s</h3>
          </div>
        );
      case '/privacy-policy':
        return (
          <div className="w-full mx-auto bg-transparent">
            <h3 className="font-semibold text-2xl xs:text-[2.5rem]">Privacy Policy</h3>
          </div>
        );
      case '/terms-and-conditions':
        return (
           <div className="w-full mx-auto bg-transparent">
            <h3 className="font-semibold text-2xl xs:text-[2.5rem]">Terms & Condition</h3>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative">
      <div className="container-nopad mx-auto px-4">
        <div className="relative w-full h-[740px] hidden md:block overflow-hidden">
          <Image 
            src={homesetting} 
            alt="Home Setting" 
            fill 
            className="object-cover" 
            priority
          />

          <div className="absolute inset-x-0 bottom-12 z-10 px-4">
            <div className="mx-auto ">
              <div className="text-white">
                {getContent()}
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative w-full h-[459px] md:hidden overflow-hidden"> 
          <Image 
            src={homesettingMobile} 
            alt="Home Setting Mobile" 
            fill 
            className="object-cover"
            priority
          />

          <div className="absolute inset-x-0 bottom-8 z-10 px-4">
            <div className="mx-auto">
              <div className="text-white">
                {getContent()}
              </div>
            </div>
          </div>
        
        </div>
        
        
        {/* Page Content */}
        <div className="relative px-4">
          {children}
        </div>
      </div>
    </main>
  );
}