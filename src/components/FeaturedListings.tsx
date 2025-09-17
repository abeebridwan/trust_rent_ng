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

  // Get current properties to display
  const getCurrentProperties = () => {
    const result = [];
    for (let i = 0; i < maxDesktopItems; i++) {
      const index = (currentIndex + i) % properties.length;
      result.push(properties[index]);
    }
    return result;
  };

  const PropertyCard = ({ property }: { property: Property }) => (
    <div className="w-full group/whole">
     <div className="rounded-none bg-card overflow-hidden">
      <div className="relative">
        <Image 
          src={property.image} 
          alt={property.title}
          width={416}
          height={258}
          className="w-full h-48 object-cover group-hover/whole:scale-105 transition-transform duration-300"
        />
        <div
          className="absolute top-3 right-3 z-20 pointer-events-auto group/heart inline-flex items-center justify-center rounded-full p-2 bg-white/90 hover:bg-vetarent-orange transition-colors duration-150 ease-in-out cursor-pointer"
        >
          <Heart className="w-6 h-6 text-vetarent-blue group-hover/heart:text-white transition-colors duration-150" />
        </div>
      </div>
      
      <div className="p-2 space-y-4 border-2 border-muted-foreground/10 border-t-0 border-b-0">
        <div className="">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-2xl text-foreground">
              {property.title}
            </h3>
            {property.verified && (
              <Image 
                src={verifiedBadge} 
                alt="Verified Badge" 
                width={21} 
                height={21}
                className="mb-2"
              />
            )}
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
            <span className="text-base font-medium">{property.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl font-normal text-vetarent-blue">
              {property.Currency}
            </span>
            <span className="text-3xl font-semibold text-vetarent-blue">
              {property.price}
            </span>
            <span className="text-vetarent-blue text-xl font-semibold">
             {property.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 pt-2 bg-card border-2 border-muted-foreground/10 p-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src={property.avatar} alt="Tolu Ogunleye" />
          <AvatarFallback className="text-xs">TO</AvatarFallback>
        </Avatar>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium text-foreground">Tolu Ogunleye</span>
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
    <section className="bg-background py-16 pt-0" suppressHydrationWarning>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-vetarent-blue mb-4">
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
                className="w-12 h-12 rounded-full bg-foreground border-2 border-vetarent-orange hover:bg-muted-foreground/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Previous property"
              >
                <ArrowLeft className="w-6 h-6 text-vetarent-orange" />
                <span className="sr-only">Previous property</span>
              </button>
              
              <button 
                onClick={nextProperty}
                className="w-12 h-12 rounded-full bg-vetarent-orange hover:bg-vetarent-orange/60 flex items-center justify-center transition-colors duration-200"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getCurrentProperties().map((property) => (
                <PropertyCard key={`${property.id}-${currentIndex}`} property={property} />
              ))}
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