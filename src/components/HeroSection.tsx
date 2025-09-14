"use client"

import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";
import network from "@/assets/Images/network.png";
import Image from "next/image";

const HeroSection = () => {
  const { propertyType, priceRange, setPropertyType, setPriceRange } = useStore();

  return (
    <section className="relative bg-background-accent py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid xl:grid-cols-[calc(49.5%+60px)_calc(49%-60px)] gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="hidden md:block text-[2.5rem] flex-wrap ">
                  <h1 className="text-foreground font-normal whitespace-nowrap">
                    The only rental platform that{" "}
                  </h1>
                  <h1 className="text-[2.5rem] font-semibold text-vetarent-blue origin-left scale-x-110 whitespace-nowrap">
                    verifies every user and property
                  </h1>
                  <h1 className="font-normal text-foreground ">
                     so you can rent with confidence and avoid fraud.
                  </h1>
              </div>
              

              <div className="md:hidden text-center">
                <h1 className="text-[1.5rem] text-foreground font-normal scale-x-110 inline lg:block">
                  The only rental platform that{" "}
                </h1>
                  <h1 className="text-[1.5rem] text-vetarent-blue inline lg:block">verifies every user and property{" "}</h1>
                <h1 className="text-[1.5rem] text-foreground font-normal inline lg:block">
                  so you can rent with confidence and avoid fraud.
                </h1>
              </div>
            </div>

            {/* Search Form */}
            <div className="bg-white p-4 shadow-xl border border-gray-100 space-y-6 !mt-[1rem] w-[95%]">
              {/* Location Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <MapPin className="w-5 h-5 text-vetarent-blue" />
                </div>
                <Input
                  placeholder="Enter Location"
                  className="pl-12 h-14 bg-gray-50 border-gray-200 text-gray-700 font-medium rounded-none placeholder:text-gray-400 focus:bg-white focus:border-vetarent-blue"
                />
              </div>

              {/* Property Type and Range Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="rounded-none h-14 bg-gray-50 border-gray-200 font-medium text-gray-400 focus:bg-white focus:border-vetarent-blue">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 shadow-xl rounded-none font-medium">
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="tenement">Tenement Houses</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                    <SelectItem value="bungalow">Bungalow</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="rounded-none h-14 bg-gray-50 border-gray-200 font-medium text-gray-400 focus:bg-white focus:border-vetarent-blue">
                    <SelectValue placeholder="Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 shadow-xl rounded-none font-medium">
                    <SelectItem value="0-500k">₦0 - ₦500k</SelectItem>
                    <SelectItem value="500k-1m">₦500k - ₦1M</SelectItem>
                    <SelectItem value="1m-2m">₦1M - ₦2M</SelectItem>
                    <SelectItem value="2m+">₦2M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button
              className="w-full h-14 bg-gradient-to-b from-[#2e2cbf] to-[#2e2cbf] text-white font-semibold text-base rounded-none shadow-[inset_0_2px_6px_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.25)] hover:from-vetarent-orange hover:to-vetarent-orange/90"
            >
              Search
            </Button>

            </div>
            
          </div>

          {/* Right Content - Network Visualization */}
          <div className="relative xl:-mt-12 mx-auto">
              <Image 
                src={network} 
                alt="Vetarent Logo" 
                width={583.01} 
                height={478.29} 
                className="" 
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;