"use client";
import { useState } from "react";
import Logo2 from "@/assets/Logo/Logo-2.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

const Footer = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isOpen = (section: string) => openSections.includes(section);

  return (
    <footer className="bg-primary text-white pt-16 md:pt-20 pb-4">
      <div className="container mx-auto px-0 md:px-4">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="">
              <Link href="/">
                <Image 
                  src={Logo2} 
                  alt="Vetarent Logo" 
                  width={214.48} 
                  height={71} 
                  className="-ml-[1.125rem] -mt-[3rem]" 
                />
              </Link>
              <p className="text-white text-base font-medium">
                Vetarent is Nigeria&apos;s first rental platform built on trust. We verify every landlord, tenant, and property — so you can rent confidently and avoid fraud.
              </p>
            </div>

            {/* Explore Vetarent */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">Explore Vetarent</h4>
              <div className="flex flex-col">
                <Link href="/landlord/dashboard" className="text-white text-base font-medium hover:text-white/80 transition-colors py-3 w-fit">
                  For Landlords
                </Link>
                <Link href="/properties?search=all" className="text-white text-base font-medium hover:text-white/80 transition-colors py-3 w-fit">
                  For Tenants
                </Link>
                <Link href="/about-us" className="text-white text-base font-medium hover:text-white/80 transition-colors py-3 w-fit">
                  About Us
                </Link>
              </div>
            </div>

            {/* Help & Support */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">Help & Support</h4>
              <div className="flex flex-col">
                <Link href="/faqs" className="text-white text-base font-medium hover:text-white/80 transition-colors py-3 w-fit">
                  FAQ
                </Link>
                <Link href="/contact-us" className="text-white text-base font-medium hover:text-white/80 transition-colors py-3 w-fit">
                  Contact Support
                </Link>
                <Link href="/terms-and-conditions" className="text-white text-base font-medium hover:text-white/80 transition-colors py-3 w-fit">
                  Terms of Use
                </Link>
                <Link href="/privacy-policy" className="text-white text-base font-medium hover:text-white/80 transition-colors py-3 w-fit">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold">Imprint</h4>
              <div className="flex flex-col">
                <div 
                  className="text-white text-base font-medium transition-colors py-3 w-fit"
                >
                  Unique Moehly Multi Concepts Ltd.<br />
                  RC 1464536
                </div>
                <div className="text-white text-base font-medium py-3">
                  20 Oluwakemi Street, <br />
                  Igbele Ajana - Heritage Estate, <br />
                  Ado-Odo/Ota Local Government, <br />
                  Ogun State, Nigeria
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Accordion Style */}
        <div className="block md:hidden space-y-0">
          {/* Company Info - Always visible */}
          <div className="mb-4">
            <Link href="/">
              <Image 
                src={Logo2} 
                alt="Vetarent Logo" 
                width={131.37} 
                height={37} 
                className="-ml-[0.6rem] -mt-[3rem] px-4" 
              />
            </Link>
            <p className="text-white text-sm font-medium leading-relaxed px-4">
              Vetarent is Nigeria&apos;s first rental platform built on trust. We verify every landlord, tenant, and property — so you can rent confidently and avoid fraud.
            </p>
          </div>

          {/* Explore Vetarent - Accordion */}
          <div className="border-b-2 border-white/40 px-4">
            <button
              onClick={() => toggleSection('explore')}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <h4 className="text-lg font-bold text-white">Explore Vetarent</h4>
              {isOpen('explore') ? (
                <ChevronUp className="h-6 w-6 text-white" />
              ) : (
                <ChevronDown className="h-6 w-6 text-white" />
              )}
            </button>
            {isOpen('explore') && (
              <div className="ml-4 pb-4 space-y-3">
                <Link href="/landlord/dashboard" className="block text-white text-base font-medium py-2 w-fit">
                  For Landlords
                </Link>
                <Link href="/properties?search=all" className="block text-white text-base font-medium py-2 w-fit">
                  For Tenants
                </Link>
                <Link href="/about-us" className="block text-white text-base font-medium py-2 w-fit">
                  About Us
                </Link>
              </div>
            )}
          </div>

          {/* Help & Support - Accordion */}
          <div className="border-b-2 border-white/40 px-4">
            <button
              onClick={() => toggleSection('help')}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <h4 className="text-lg font-bold text-white">Help & Support</h4>
              {isOpen('help') ? (
                <ChevronUp className="h-6 w-6 text-white" />
              ) : (
                <ChevronDown className="h-6 w-6 text-white" />
              )}
            </button>
            {isOpen('help') && (
              <div className="ml-4 pb-4 space-y-3">
                <Link href="/faqs" className="block text-white text-base font-medium py-2 w-fit">
                  FAQ
                </Link>
                <Link href="/contact-us" className="block text-white text-base font-medium py-2 w-fit">
                  Contact Support
                </Link>
                <Link href="/terms-and-conditions" className="block text-white text-base font-medium py-2 w-fit">
                  Terms of Use
                </Link>
                <Link href="/privacy-policy" className="block text-white text-base font-medium py-2 w-fit">
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>

          {/* Contact Us - Accordion */}
          <div className="border-b border-white/40 mb-8 px-4">
            <button
              onClick={() => toggleSection('contact')}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <h4 className="text-lg font-bold text-white">Imprint</h4>
              {isOpen('contact') ? (
                <ChevronUp className="h-6 w-6 text-white" />
              ) : (
                <ChevronDown className="h-6 w-6 text-white" />
              )}
            </button>
            {isOpen('contact') && (
              <div className="ml-4 pb-4 space-y-3">
                <Link 
                  href="mailto:support@vetarent.ng" 
                  className="flex items-center text-white text-base font-medium py-2 w-fit"
                >
                  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                    <mask id="mask0_618_92174" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="14">
                    <rect width="17" height="13.6" fill="url(#pattern0_618_92174)"/>
                    </mask>
                    <g mask="url(#mask0_618_92174)">
                    <rect x="-1.13281" width="23.8" height="19.2667" fill="white"/>
                    </g>
                    <defs>
                    <pattern id="pattern0_618_92174" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_618_92174" transform="matrix(0.00195312 0 0 0.00244141 0 -0.125)"/>
                    </pattern>
                    <image id="image0_618_92174" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeAHt3XewbNlV3/GlGUUkQFkzozQKgATYxmA5YJtgiyr+w0UVZbBdxtgmJwO2wWBcJghElADlnEcaZWkURwIkIUABZY1yBoREsI3BFhJgvyXdo3fffbf7djinz15nf7rqVb/bt/v0Od/9W+v32/uc2x3hhgACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAA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"/>
                    </defs>
                  </svg>

                  <span className="ml-2">
                    Unique Moehly Multi Concepts Ltd.<br />
                    RC 1464536
                  </span>
                </Link>
                <div className="flex items-start text-white text-base font-medium py-2 ">
                 <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                  <mask id="mask0_618_85247" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="21">
                  <rect width="17" height="20.4" fill="url(#pattern0_618_85247)"/>
                  </mask>
                  <g mask="url(#mask0_618_85247)">
                  <rect x="-1.69922" width="23.8" height="22.1" fill="white"/>
                  </g>
                  <defs>
                  <pattern id="pattern0_618_85247" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_618_85247" transform="matrix(0.00195313 0 0 0.0016276 0 0.0833333)"/>
                  </pattern>
                  <image id="image0_618_85247" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
                  </defs>
                </svg>

                  <span className="ml-2">
                    20 Oluwakemi Street, <br />
                    Igbele Ajana - Heritage Estate, <br />
                    Ado-Odo/Ota Local Government, <br />
                    Ogun State, Nigeria
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white/40 pt-4 text-center">
          <p className="text-white text-xs sm:text-sm md:text-base font-medium">
            Vetarent, Copyright © 2025 Unique Moehly Multi Concepts Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;