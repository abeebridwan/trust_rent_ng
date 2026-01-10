"use client";

import { useState } from "react";
import { Heart, MapPin,  ArrowLeft, ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import Image, { StaticImageData } from 'next/image';
import verifiedBadge from "@/assets/Icons/Verified Badge.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface Property {
  id: number;
  image: StaticImageData | string;
  title: string;
  location: string;
  Currency: string;
  price: string;
  period: string;
  rating: number;
  verified: boolean;
  avatar: string;
}

const FeaturedListings = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const properties: Property[] = [
    {
      id: 1,
      image: property1,
      title: "Seaside Serenity Villa 1",
      location: "Malibu, Lagos",
      Currency: "₦",
      price: " 1,500,000",
      period: "/yr",
      rating: 4.9,
      verified: true,
      avatar: "/images/tunde-1.jpg"
    },
    {
      id: 2,
      image: property2,
      title: "Seaside Tokyo Villa 2",
      location: "Malibu, Lagos",
      Currency: "₦",
      price: " 1,500,000",
      period: "/yr",
      rating: 4.9,
      verified: true,
      avatar: "/images/tunde-2.jpg"
    },
    {
      id: 3,
      image: property3,
      title: "Seaside Ibadan Villa 3",
      location: "Malibu, Lagos",
      Currency: "₦",
      price: " 1,500,000",
      period: "/yr",
      rating: 4.9,
      verified: true,
      avatar: "/images/tunde-3.jpg"
    },
    {
      id: 4,
      image: property3,
      title: "Seaside France Villa 4",
      location: "Malibu, Lagos",
      Currency: "₦",
      price: " 1,500,000",
      period: "/yr",
      rating: 4.9,
      verified: true,
      avatar: "/images/tunde-3.jpg"
    },
     {
      id: 5,
      image: property3,
      title: "Seaside Germany Villa 5",
      location: "Malibu, Lagos",
      Currency: "₦",
      price: " 1,500,000",
      period: "/yr",
      rating: 4.9,
      verified: true,
      avatar: "/images/tunde-2.jpg"
    }
  ];

  const maxDesktopItems = 3;
  const maxTabletItems = 2;

  const nextProperty = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === properties.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevProperty = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? properties.length - 1 : prevIndex - 1;
    });
  };

  // Get current properties to display for desktop (3 items)
  const getCurrentProperties = () => {
    const result = [];
    for (let i = 0; i < maxDesktopItems; i++) {
      const index = (currentIndex + i) % properties.length;
      result.push(properties[index]);
    }
    return result;
  };

  // Get current properties to display for tablet (2 items)
  const getCurrentTabletProperties = () => {
    const result = [];
    for (let i = 0; i < maxTabletItems; i++) {
      const index = (currentIndex + i) % properties.length;
      result.push(properties[index]);
    }
    return result;
  };

  const PropertyCard = ({ property }: { property: Property }) => (
    <div className="w-full group/whole h-full">
     <div className="rounded-none bg-card overflow-hidden flex flex-col">
      <div className="relative flex-shrink-0">
        <Image 
          src={property.image} 
          alt={property.title}
          width={416}
          height={258}
          className="w-full h-48 object-cover group-hover/whole:scale-105 transition-transform duration-300"
        />
        <div
          className="
            absolute top-3 right-3 z-20 pointer-events-auto
            inline-flex items-center justify-center
            rounded-full p-2
            bg-white/90
            hover:bg-vetarent-blue
            transition-colors duration-150 ease-in-out
            cursor-pointer
            group
          "
        >
          <Heart
            className="
              w-6 h-6
              text-vetarent-blue
              group-hover:text-white
              transition-colors duration-150
            "
        />
      </div>


      </div>
      
      <div className="p-2 space-y-4 border-2 border-muted-foreground/10 border-t-0 border-b-0 flex-grow flex flex-col justify-between">
        <div className="">
          <div className="flex items-center space-x-2 min-h-[2rem] md:min-h-[2.5rem]">
            <h3 className="font-semibold text-base sm:text-2xl text-foreground line-clamp-1">
              {property.title}
            </h3>
            {property.verified && (
              <Image 
                src={verifiedBadge} 
                alt="Verified Badge" 
                width={21} 
                height={21}
                className="mb-1 md:mb-2 w-[18px] h-[18px] md:w-[21px] md:h-[21px] flex-shrink-0"
              />
            )}
          </div>
          <div className="flex items-center text-muted-foreground min-h-[1.5rem]">
            <MapPin className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0" />
            <span className="text-xs sm:text-base font-medium line-clamp-1">{property.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-1">
            <span className="text-lg sm:text-2xl md:text-3xl font-normal text-vetarent-blue">
              {property.Currency}
            </span>
            <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-vetarent-blue">
              {property.price}
            </span>
            <span className="text-vetarent-blue text-base sm:text-lg md:text-xl font-semibold">
             {property.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 pt-2 bg-card border-2 border-muted-foreground/10 p-2 flex-shrink-0">
        <Avatar className="w-8 h-8">
          <AvatarImage src={property.avatar} alt="Tolu Ogunleye" />
          <AvatarFallback className="text-xs">TO</AvatarFallback>
        </Avatar>
        <div className="flex items-center space-x-1">
          <span className="text-xs md:text-sm font-semibold text-foreground">Tolu Ogunleye</span>
          <Image 
            src={verifiedBadge} 
            alt="Verified Badge" 
            width={16} 
            height={16}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-background py-[37px] pt-0 sm:mb-4 md:mb-8" suppressHydrationWarning>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-vetarent-blue mb-4">
            Featured Listing
          </h2>
          <p className="text-muted-foreground/70 text-sm md:text-lg max-w-2xl font-semibold mx-auto">
            Browse verified properties, trusted landlords and high-demand locations.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="relative">
            <PropertyCard property={getCurrentProperties()[0]} />
            
            {/* Navigation Arrows */}
            <div className="flex justify-center items-center space-x-3 mt-6">
              <button 
                onClick={prevProperty}
                className="w-10 h-10 rounded-full bg-foreground border-2 border-vetarent-orange hover:bg-muted-foreground/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Previous property"
              >
                <ArrowLeft className="w-6 h-6 text-vetarent-orange" />
                <span className="sr-only">Previous property</span>
              </button>
              
              <button 
                onClick={nextProperty}
                className="w-10 h-10 rounded-full bg-vetarent-orange hover:bg-vetarent-orange/60 flex items-center justify-center transition-colors duration-200"
                aria-label="Next property"
              >
                <ArrowRight className="w-6 h-6 text-white" />
                <span className="sr-only">Next property</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid with Arrows */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Tablet view - 2 items */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-2 gap-4 items-stretch">
                {getCurrentTabletProperties().map((property) => (
                  <PropertyCard key={`${property.id}-${currentIndex}`} property={property} />
                ))}
              </div>
            </div>
            
            {/* Desktop view - 3 items */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-4 items-stretch">
                {getCurrentProperties().map((property) => (
                  <PropertyCard key={`${property.id}-${currentIndex}`} property={property} />
                ))}
              </div>
            </div>
            
            {/* Desktop Navigation Arrows */}
            <div className="flex justify-center items-center space-x-3 mt-6">
             <button 
                onClick={prevProperty}
                className="w-12 h-12 rounded-full bg-foreground border-2 border-vetarent-orange hover:bg-muted-foreground/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Previous properties"
              >
                <ArrowLeft className="w-6 h-6 text-vetarent-orange" />
                <span className="sr-only">Previous properties</span>
              </button>
              
              <button 
                onClick={nextProperty}
                className="w-12 h-12 rounded-full bg-vetarent-orange hover:bg-vetarent-orange/60 flex items-center justify-center transition-colors duration-200"
                aria-label="Next properties"
              >
                <ArrowRight className="w-6 h-6 text-white" />
                <span className="sr-only">Next properties</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;