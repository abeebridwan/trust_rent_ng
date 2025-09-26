'use client';

import { usePathname } from "next/navigation";

export default function PageHeader() {
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
  
  return <div className="text-white">{getContent()}</div>;

}