"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import Logo1 from "@/assets/Logo/Logo-1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-background relative z-50 shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
      <div className="container h-[80px] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center overflow-hidden">
          {/* Desktop Logo */}
          <Image 
            src={Logo1} 
            alt="Vetarent Logo" 
            width={214.48} 
            height={71} 
            className="hidden md:block -ml-[1.125rem]" 
          />
          {/* Mobile Logo */}
          <Image 
            src={Logo1} 
            alt="Vetarent Logo" 
            width={111.37} 
            height={37} 
            className="block md:hidden" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-[50px] text-lg font-semibold">
          <a href="/" className="text-foreground hover:text-primary whitespace-nowrap">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-primary whitespace-nowrap">
            For Landlords
          </a>
          <a href="#" className="text-foreground hover:text-primary whitespace-nowrap">
            For Tenants
          </a>
          <a href="/about-us" className="text-foreground hover:text-primary whitespace-nowrap">
            About Us
          </a>
          <a href="/contact-us" className="text-foreground hover:text-primary whitespace-nowrap">
            Contact Us
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="!w-6 !h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-foreground hover:text-primary text-lg font-normal py-2"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-foreground hover:text-primary text-lg font-normal py-2"
              onClick={closeMenu}
            >
              For Landlords
            </a>
            <a 
              href="#" 
              className="text-foreground hover:text-primary text-lg font-normal py-2"
              onClick={closeMenu}
            >
              For Tenants
            </a>
            <a 
              href="/about-us" 
              className="text-foreground hover:text-primary text-lg font-normal py-2"
              onClick={closeMenu}
            >
              About Us
            </a>
            <a 
              href="/contact-us" 
              className="text-foreground hover:text-primary text-lg font-normal py-2"
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;