"use client";

import { useState, useEffect, useRef } from "react";
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
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(performance.now());

  // Clean, optimized animation using CSS transforms
  useEffect(() => {
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      
      // Calculate rotations based on elapsed time (in seconds)
      const seconds = elapsed / 1000;
      
      // Different rotation speeds (degrees per second)
      const outerRotation = (seconds * 5) % 360; // 5 degrees per second
      const middleRotation = (-seconds * 8) % 360; // 8 degrees per second (counter-clockwise)
      const innerRotation = (seconds * 12) % 360; // 12 degrees per second
      
      // Apply rotations using CSS custom properties for better performance
      document.documentElement.style.setProperty('--outer-rotation', `${outerRotation}deg`);
      document.documentElement.style.setProperty('--middle-rotation', `${middleRotation}deg`);
      document.documentElement.style.setProperty('--inner-rotation', `${innerRotation}deg`);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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
        <div className="border-2 border-vetarent-orange rounded-full bg-transparent flex justify-center items-center p-2">
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
        <Avatar className="w-[58px] h-[58px]">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-vetarent-orange text-white text-base">
            {testimonial.initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-white font-bold text-sm md:text-xl">{testimonial.name}</p>
          <p className="text-white font-medium text-base md:text-[17px]">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );

  const AvatarObj = {
    Outer: {
      size: ["74px", "58px", "110px", "58px", "94px", "58px", "111px"], 
      src: ["/images/Ellipse 2236-74.png", "/images/Ellipse 2227-58.png", "/images/Ellipse 2235-110.png", "/images/Ellipse 2233-58.png", "/images/Ellipse 2234-94.png", "/images/Ellipse 2228-58.png", "/images/Ellipse 2232-111.png"], 
      pos: [-90, -30, -150, 40, 120, 170],  // spaced out nicely, 
      initials: ["AC", "AD", "US", "FA", "CH", "EF"]
    },
    Middle: {
      size: ["110px", "58px", "111px", "74px", "94px", "58px", "58px"], 
      src: [
        "/images/Ellipse 2235-110.png", 
        "/images/Ellipse 2233-58.png", 
        "/images/Ellipse 2232-111.png", 
        "/images/Ellipse 2236-74.png", 
        "/images/Ellipse 2234-94.png", 
        "/images/Ellipse 2227-58.png", 
        "/images/Ellipse 2228-58.png"
      ], 
      pos: [-20, -90, -160, 10, 80, 140, 50],  // slightly staggered, avoids symmetry 
      initials: ["US", "FA", "EF", "AC", "CH", "AD", "??"]
    },
    Inner: {
      size: ["58px", "94px", "74px", "111px", "58px", "110px", "58px"], 
      src: [
        "/images/Ellipse 2227-58.png",
        "/images/Ellipse 2234-94.png",
        "/images/Ellipse 2236-74.png",
        "/images/Ellipse 2232-111.png",
        "/images/Ellipse 2228-58.png",
        "/images/Ellipse 2235-110.png",
        "/images/Ellipse 2233-58.png"
      ], 
      pos: [-10, -60, -120, -190, -250, -300, -330], // tighter but not overlapping
      initials: ["AD", "CH", "AC", "EF", "AG", "US", "FA"]
    }
  };

  return (
    <section className="bg-vetarent-blue relative overflow-hidden min-h-[912px]">
      <style jsx>{`
        .orbit-outer {
          animation: rotateClockwise 72s linear infinite;
        }
        .orbit-middle {
          animation: rotateCounterClockwise 45s linear infinite;
        }
        .orbit-inner {
          animation: rotateClockwise 30s linear infinite;
        }
        
        @keyframes rotateClockwise {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes rotateCounterClockwise {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        
        .avatar-item {
          will-change: transform;
        }
      `}</style>
      
      
      <div className="container mx-auto px-4">   
         {/* Left blur shadow */}
      <div className="bg-vetarent-blue shadow-[15px_0_100px_150px_rgba(13,71,161,1)] absolute top-0 left-0 h-[912px] w-[1px] pointer-events-none z-10"
        style={{
          backdropFilter: "blur(109.4px)",
        }}
      ></div>

      {/* Right blur shadow */}
       <div className="bg-vetarent-blue shadow-[15px_0_100px_150px_rgba(13,71,161,1)] absolute top-0 right-0 h-[912px] w-[1px] pointer-events-none z-10"
        style={{
          backdropFilter: "blur(109.4px)",
        }}
      ></div>

        {/* Semicircle Lines Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-[90%] h-full mx-auto">
            {/* Outer semicircle */}
            <div className="absolute top-[76%] left-1/2 w-[1369px] h-[1369px] -translate-x-1/2 -translate-y-1/2 orbit-outer">
              <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2"></div>
              
              {AvatarObj.Outer.pos.map((angle, index) => {
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * 684.5;
                const y = Math.sin(radian) * 684.5;
                const avatarSize = AvatarObj.Outer.size[index];
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 avatar-item z-20"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                    }}
                  >
                    <Avatar 
                      className="border-2 border-white/20"
                      style={{ width: avatarSize, height: avatarSize }}
                    >
                      <AvatarImage src={AvatarObj.Outer.src[index]} alt={AvatarObj.Outer.initials[index]} />
                      <AvatarFallback className="bg-vetarent-orange text-white text-base">
                        {AvatarObj.Outer.initials[index]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                );
              })}
            </div>
            
            {/* Middle semicircle */} 
            <div className="absolute top-[71%] left-1/2 w-[1024px] h-[1024px] -translate-x-1/2 -translate-y-1/2 orbit-middle">
              <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2"></div>
              
              {AvatarObj.Middle.pos.map((angle, index) => {
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * 512;
                const y = Math.sin(radian) * 512;
                const avatarSize = AvatarObj.Middle.size[index];
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 avatar-item"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                    }}
                  >
                    <Avatar 
                      className="border-2 border-white/20"
                      style={{ width: avatarSize, height: avatarSize }}
                    >
                      <AvatarImage src={AvatarObj.Middle.src[index]} alt={AvatarObj.Middle.initials[index]} />
                      <AvatarFallback className="bg-vetarent-orange text-white text-base">
                        {AvatarObj.Middle.initials[index]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                );
              })}
            </div>

            {/* Inner semicircle */}
            <div className="absolute top-[72%] left-1/2 w-[784px] h-[784px] -translate-x-1/2 -translate-y-1/2 orbit-inner">
              <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2"></div>
              
              {AvatarObj.Inner.pos.map((angle, index) => {
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * 392;
                const y = Math.sin(radian) * 392;
                const avatarSize = AvatarObj.Inner.size[index];
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 avatar-item"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                    }}
                  >
                    <Avatar 
                      className="border-2 border-white/20"
                      style={{ width: avatarSize, height: avatarSize }}
                    >
                      <AvatarImage src={AvatarObj.Inner.src[index]} alt={AvatarObj.Inner.initials[index]} />
                      <AvatarFallback className="bg-vetarent-orange text-white text-base">
                        {AvatarObj.Inner.initials[index]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-transparent absolute bottom-0 left-0 right-0">
          <div className="bg-transparent text-center mb-12">
            <div className="flex items-center justify-center space-x-1">
              <Image 
                src={Quotation} 
                alt="Quotation icon" 
                width={21} 
                height={21} 
                className="mb-2" 
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
                    className="w-10 h-10 rounded-full bg-transparent border-2 border-vetarent-orange hover:bg-vetarent-orange/20 flex items-center justify-center transition-colors duration-200"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-5 h-5 text-vetarent-orange" />
                  </button>
                  
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-vetarent-orange hover:bg-vetarent-orange/80 flex items-center justify-center transition-colors duration-200"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
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
                    className="w-16 h-16 rounded-full bg-transparent border-2 border-vetarent-orange hover:bg-vetarent-orange/20 flex items-center justify-center transition-colors duration-200"
                    aria-label="Previous testimonials"
                  >
                    <ArrowLeft className="w-10 h-10 text-vetarent-orange" />
                  </button>
                  
                  <button 
                    onClick={nextTestimonial} 
                    className="w-16 h-16 rounded-full border-2 border-vetarent-blue bg-vetarent-orange hover:bg-vetarent-orange/80 flex items-center justify-center transition-colors duration-200" 
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