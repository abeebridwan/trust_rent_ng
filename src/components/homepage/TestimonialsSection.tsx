"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Quotation from "@/assets/Icons/Qoutation.png";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
  initials: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mrs. Ifeoma",
      location: "Enugu",
      text: "Finding landlord, I was nervous about renting. Vetarent's verification gave me peace of mind.",
      avatar: "/images/Ellipse 2236-74.png",
      initials: "IF"
    },
    {
      id: 2,
      name: "Mr. Adewale",
      location: "Lagos",
      text: "Vetarent helped me rent out a flat in just 4 days. The landlord was already verified, so everything felt secure.",
      avatar: "/images/Ellipse 2227-58.png",
      initials: "AD"
    },
    {
      id: 3,
      name: "Mr. Usman",
      location: "Abuja",
      text: "I manage multiple properties, and Vetarent's dashboard makes it so easy to update listings and talk to tenants.",
      avatar: "/images/Ellipse 2228-58.png",
      initials: "US"
    },
    {
      id: 4,
      name: "Ms. Fatima",
      location: "Kano",
      text: "The verification process gave me confidence. I found my perfect apartment within a week!",
      avatar: "/images/Ellipse 2233-58.png",
      initials: "FA"
    },
    {
      id: 5,
      name: "Mr. Chidi",
      location: "Port Harcourt",
      text: "Excellent platform! The tenant screening saved me from potential issues. Highly recommended.",
      avatar: "/images/Ellipse 2232-111.png",
      initials: "CH"
    }
  ];

  const maxDesktopItems = 3;
  const maxTabletItems = 2;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  const getCurrentTestimonials = () => {
    const result = [];
    for (let i = 0; i < maxDesktopItems; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const getCurrentTabletTestimonials = () => {
    const result = [];
    for (let i = 0; i < maxTabletItems; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-[#3162AF] backdrop-blur-sm p-6 transition-all duration-300 h-[263px] space-y-4">
      <div className="flex justify-start">
        <div className="border-2 border-vetarent-orange rounded-full bg-transparent flex justify-center items-center p-4">
          <Image 
            src={Quotation} 
            alt="Quotation icon" 
            width={21} 
            height={21} 
            className="" 
          />
        </div>
      </div>
      
      <p className="text-white text-sm md:text-base font-medium min-h-[80px]">
        {testimonial.text}
      </p>
      
      <div className="flex items-center space-x-3">
        <Avatar className="w-[40px] h-[40px] md:w-[58px] md:h-[58px]">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-vetarent-orange text-white text-base">
            {testimonial.initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-white font-bold text-base md:text-xl">{testimonial.name}</p>
          <p className="text-white font-medium text-sm md:text-[17px]">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );

  const AvatarObj = {
    Outer: {
      size: {
        base: ["37px", "29px", "55px", "29px", "47px", "29px", "56px"],// 50% of original
        xs: ["44px", "35px", "66px", "35px", "56px", "35px", "66px"],// 60% of original
        sm: ["59px", "46px", "88px", "46px", "75px", "46px", "89px"],// 80% of original
        md: ["74px", "58px", "110px", "58px", "94px", "58px", "111px"]// 100% original
      },
      src: [
        "/images/Ellipse 2236-74.png", 
        "/images/Ellipse 2227-58.png", 
        "/images/Ellipse 2235-110.png", 
        "/images/Ellipse 2233-58.png", 
        "/images/Ellipse 2234-94.png", 
        "/images/Ellipse 2228-58.png", 
        "/images/Ellipse 2232-111.png"
      ], 
      pos: [-90, -30, -150, 40, 120, 170],
      initials: ["AC", "AD", "US", "FA", "CH", "EF"]
    },
    Middle: {
      size: {
        base: ["55px", "29px", "56px", "37px", "47px", "29px", "29px"],
        xs: ["66px", "35px", "66px", "44px", "56px", "35px", "35px"],
        sm: ["88px", "46px", "89px", "59px", "75px", "46px", "46px"],
        md: ["110px", "58px", "111px", "74px", "94px", "58px", "58px"]
      },
      src: [
        "/images/Ellipse 2235-110.png", 
        "/images/Ellipse 2233-58.png", 
        "/images/Ellipse 2232-111.png", 
        "/images/Ellipse 2236-74.png", 
        "/images/Ellipse 2234-94.png", 
        "/images/Ellipse 2227-58.png", 
        "/images/Ellipse 2228-58.png"
      ], 
      pos: [-20, -90, -160, 10, 80, 140, 50],
      initials: ["US", "FA", "EF", "AC", "CH", "AD", "GH"]
    },
    Inner: {
      size: {
        base: ["29px", "47px", "37px", "56px", "29px", "55px", "29px"],
        xs: ["35px", "56px", "44px", "66px", "35px", "66px", "35px"],
        sm: ["46px", "75px", "59px", "89px", "46px", "88px", "46px"],
        md: ["58px", "94px", "74px", "111px", "58px", "110px", "58px"]
      },
      src: [
        "/images/Ellipse 2227-58.png",
        "/images/Ellipse 2234-94.png",
        "/images/Ellipse 2236-74.png",
        "/images/Ellipse 2232-111.png",
        "/images/Ellipse 2228-58.png",
        "/images/Ellipse 2235-110.png",
        "/images/Ellipse 2233-58.png"
      ], 
      pos: [-10, -60, -120, -190, -250, -300, -330],
      initials: ["AD", "CH", "AC", "EF", "AG", "US", "FA"]
    }
  };

  const getRadius = (breakpoint: string, circle: string) => {
    const radiusMap = {
      outer: {
        base: 312.5,
        xs: 392,
        sm: 512,
        md: 684.5
      },
      middle: {
        base: 264.5,
        xs: 326,
        sm: 392,
        md: 512
      },
      inner: {
        base: 162,
        xs: 242,
        sm: 326,
        md: 392
      }
    };
    
    return radiusMap[circle as keyof typeof radiusMap][breakpoint as keyof typeof radiusMap.outer];
  };

  return (
    <section className="bg-vetarent-blue relative overflow-hidden min-h-[800px] sm:min-h-[912px] -mt-20 md:-mt-0 z-0 md:z-auto">
      <style jsx>{`
        @keyframes rotateClockwise {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes rotateCounterClockwise {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        
        .orbit-outer {
          animation: rotateClockwise 72s linear infinite;
          will-change: transform;
        }
        
        .orbit-middle {
          animation: rotateCounterClockwise 45s linear infinite;
          will-change: transform;
        }
        
        .orbit-inner {
          animation: rotateClockwise 30s linear infinite;
          will-change: transform;
        }
        
        .avatar-item {
          pointer-events: none;
        }
      `}</style>
      
      <div className="container mx-auto px-4">   
        {/* Left blur shadow */}
        <div className="hidden md:block bg-vetarent-blue shadow-[15px_0_100px_150px_rgba(13,71,161,1)] absolute top-0 left-0 h-full w-[1px] pointer-events-none z-10"
          style={{
            backdropFilter: "blur(109.4px)",
          }}
        ></div>

        {/* Right blur shadow */}
        <div className="hidden md:block bg-vetarent-blue shadow-[15px_0_100px_150px_rgba(13,71,161,1)] absolute top-0 right-0 h-full w-[1px] pointer-events-none z-10"
          style={{
            backdropFilter: "blur(109.4px)",
          }}
        ></div>

        {/* Semicircle Lines Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-[90%] h-full mx-auto">
            {/* Outer semicircle */}
            <div className="absolute top-[54%] xs:top-[61%] sm:top-[68%] md:top-[76%] left-1/2 h-[625px] w-[652px] xs:w-[784px] xs:h-[784px] sm:w-[1024px] sm:h-[1024px] md:w-[1369px] md:h-[1369px] -translate-x-1/2 -translate-y-1/2 orbit-outer">
              <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2"></div>
              
              {AvatarObj.Outer.pos.map((angle, index) => {
                const radian = (angle * Math.PI) / 180;
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 avatar-item z-20"
                  >
                    {/* Base size (default) */}
                    <div className="block xs:hidden">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('base', 'outer')}px, ${Math.sin(radian) * getRadius('base', 'outer')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Outer.size.base[index], height: AvatarObj.Outer.size.base[index] }}
                        >
                          <AvatarImage src={AvatarObj.Outer.src[index]} alt={AvatarObj.Outer.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Outer.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* XS size */}
                    <div className="hidden xs:block sm:hidden">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('xs', 'outer')}px, ${Math.sin(radian) * getRadius('xs', 'outer')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Outer.size.xs[index], height: AvatarObj.Outer.size.xs[index] }}
                        >
                          <AvatarImage src={AvatarObj.Outer.src[index]} alt={AvatarObj.Outer.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Outer.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* SM size */}
                    <div className="hidden sm:block md:hidden">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('sm', 'outer')}px, ${Math.sin(radian) * getRadius('sm', 'outer')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Outer.size.sm[index], height: AvatarObj.Outer.size.sm[index] }}
                        >
                          <AvatarImage src={AvatarObj.Outer.src[index]} alt={AvatarObj.Outer.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Outer.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* MD size */}
                    <div className="hidden md:block">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('md', 'outer')}px, ${Math.sin(radian) * getRadius('md', 'outer')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Outer.size.md[index], height: AvatarObj.Outer.size.md[index] }}
                        >
                          <AvatarImage src={AvatarObj.Outer.src[index]} alt={AvatarObj.Outer.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Outer.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Middle semicircle */} 
            <div className="absolute top-[60%] xs:top-[67%] sm:top-[70%] md:top-[71%] left-1/2 h-[529px] w-[529px] xs:h-[625px] xs:w-[652px] sm:w-[784px] sm:h-[784px] md:w-[1024px] md:h-[1024px] -translate-x-1/2 -translate-y-1/2 orbit-middle">
              <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2"></div>
              
              {AvatarObj.Middle.pos.map((angle, index) => {
                const radian = (angle * Math.PI) / 180;
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 avatar-item"
                  >
                    {/* Base size */}
                    <div className="block xs:hidden">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('base', 'middle')}px, ${Math.sin(radian) * getRadius('base', 'middle')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Middle.size.base[index], height: AvatarObj.Middle.size.base[index] }}
                        >
                          <AvatarImage src={AvatarObj.Middle.src[index]} alt={AvatarObj.Middle.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Middle.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* XS size */}
                    <div className="hidden xs:block sm:hidden">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('xs', 'middle')}px, ${Math.sin(radian) * getRadius('xs', 'middle')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Middle.size.xs[index], height: AvatarObj.Middle.size.xs[index] }}
                        >
                          <AvatarImage src={AvatarObj.Middle.src[index]} alt={AvatarObj.Middle.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Middle.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* SM size */}
                    <div className="hidden sm:block md:hidden">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('sm', 'middle')}px, ${Math.sin(radian) * getRadius('sm', 'middle')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Middle.size.sm[index], height: AvatarObj.Middle.size.sm[index] }}
                        >
                          <AvatarImage src={AvatarObj.Middle.src[index]} alt={AvatarObj.Middle.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Middle.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* MD size */}
                    <div className="hidden md:block">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('md', 'middle')}px, ${Math.sin(radian) * getRadius('md', 'middle')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Middle.size.md[index], height: AvatarObj.Middle.size.md[index] }}
                        >
                          <AvatarImage src={AvatarObj.Middle.src[index]} alt={AvatarObj.Middle.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Middle.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inner semicircle */}
            <div className="absolute top-[60%] xs:top-[71%] sm:top-[75%] left-1/2 h-[324px] w-[324px] xs:h-[484px] xs:w-[484px] sm:h-[625px] sm:w-[652px] md:w-[784px] md:h-[784px] -translate-x-1/2 -translate-y-1/2 orbit-inner">
              <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2"></div>
              
              {AvatarObj.Inner.pos.map((angle, index) => {
                const radian = (angle * Math.PI) / 180;
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 avatar-item"
                  >
                    {/* Base size */}
                    <div className="block xs:hidden">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('base', 'inner')}px, ${Math.sin(radian) * getRadius('base', 'inner')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Inner.size.base[index], height: AvatarObj.Inner.size.base[index] }}
                        >
                          <AvatarImage src={AvatarObj.Inner.src[index]} alt={AvatarObj.Inner.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Inner.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* XS size */}
                    <div className="hidden xs:block sm:hidden">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('xs', 'inner')}px, ${Math.sin(radian) * getRadius('xs', 'inner')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Inner.size.xs[index], height: AvatarObj.Inner.size.xs[index] }}
                        >
                          <AvatarImage src={AvatarObj.Inner.src[index]} alt={AvatarObj.Inner.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Inner.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* SM size */}
                    <div className="hidden sm:block md:hidden">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('sm', 'inner')}px, ${Math.sin(radian) * getRadius('sm', 'inner')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Inner.size.sm[index], height: AvatarObj.Inner.size.sm[index] }}
                        >
                          <AvatarImage src={AvatarObj.Inner.src[index]} alt={AvatarObj.Inner.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Inner.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* MD size */}
                    <div className="hidden md:block">
                      <div
                        style={{
                          transform: `translate(${Math.cos(radian) * getRadius('md', 'inner')}px, ${Math.sin(radian) * getRadius('md', 'inner')}px) translate(-50%, -50%)`
                        }}
                        className="absolute top-1/2 left-1/2"
                      >
                        <Avatar 
                          className="border-2 border-white/20"
                          style={{ width: AvatarObj.Inner.size.md[index], height: AvatarObj.Inner.size.md[index] }}
                        >
                          <AvatarImage src={AvatarObj.Inner.src[index]} alt={AvatarObj.Inner.initials[index]} />
                          <AvatarFallback className="bg-vetarent-orange text-white text-base">
                            {AvatarObj.Inner.initials[index]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-transparent absolute bottom-0 left-0 right-0">
          <div className="bg-transparent text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center space-x-1">
              <Image 
                src={Quotation} 
                alt="Quotation icon" 
                width={21} 
                height={21} 
                className="mb-2 w-[13px] h-[13px] md:w-[21px] md:h-[21px]" 
              />
              <span className="text-vetarent-orange font-bold text-sm md:text-xl mb-2">
                Testimonials
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-white mb-2">
              What are our <span className="text-vetarent-orange">Users</span> saying
            </h2>
          </div>     

          <div className="container mx-auto px-4 z-10 w-full bg-vetarent-blue pb-8">
            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <div className="relative">
                <TestimonialCard testimonial={getCurrentTestimonials()[0]} />
                
                <div className="flex justify-center items-center space-x-3 mt-6">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-transparent border-2 border-vetarent-orange hover:bg-vetarent-orange/20 flex items-center justify-center transition-colors duration-200 touch-manipulation"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-5 h-5 text-vetarent-orange" />
                  </button>
                  
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-vetarent-orange hover:bg-vetarent-orange/80 flex items-center justify-center transition-colors duration-200 touch-manipulation"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-5 h-5 text-vetarent-blue" />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Grid with Arrows */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Tablet view - 2 items */}
                <div className="block lg:hidden">
                  <div className="grid grid-cols-2 gap-6">
                    {getCurrentTabletTestimonials().map((testimonial) => (
                      <TestimonialCard key={`${testimonial.id}-${currentIndex}`} testimonial={testimonial} />
                    ))}
                  </div>
                </div>
                
                {/* Desktop view - 3 items */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-3 gap-6">
                    {getCurrentTestimonials().map((testimonial) => (
                      <TestimonialCard key={`${testimonial.id}-${currentIndex}`} testimonial={testimonial} />
                    ))}
                  </div>
                </div>
                
                {/* Desktop Navigation Arrows */}
                <div className="flex justify-center items-center space-x-3 mt-12">
                  <button 
                    onClick={prevTestimonial}
                    className="w-16 h-16 rounded-full bg-transparent border-2 border-vetarent-orange hover:bg-vetarent-orange/20 flex items-center justify-center transition-colors duration-200 touch-manipulation"
                    aria-label="Previous testimonials"
                  >
                    <ArrowLeft className="w-10 h-10 text-vetarent-orange" />
                  </button>
                  
                  <button 
                    onClick={nextTestimonial} 
                    className="w-16 h-16 rounded-full border-2 border-vetarent-blue bg-vetarent-orange hover:bg-vetarent-orange/80 flex items-center justify-center transition-colors duration-200 touch-manipulation" 
                    aria-label="Next testimonials"
                  >
                    <ArrowRight className="w-10 h-10 text-vetarent-blue" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Testimonials;