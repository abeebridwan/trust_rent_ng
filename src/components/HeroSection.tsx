"use client"

import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import network from "@/assets/Images/network.png";
import Image from "next/image";
import { 
  CustomSelect, 
  CustomSelectValue, 
  CustomSelectTrigger, 
  CustomSelectContent, 
  CustomSelectItem 
} from "@/components/CustomSelect";

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
                  className="pl-12 h-14 bg-foreground border-gray-200 text-sm text-gray-700 font-semibold rounded-none placeholder:text-gray-400 focus:bg-white focus:border-vetarent-blue/50"
                />
              </div>

                {/* Property Type and Range Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <CustomSelect value={propertyType} onValueChange={setPropertyType}>
                    <CustomSelectTrigger className="font-medium text-gray-400 focus:border-blue-500">
                      <CustomSelectValue placeholder="Select Type" />
                    </CustomSelectTrigger>
                    <CustomSelectContent className="bg-white border-gray-200 shadow-xl font-medium">
                      <CustomSelectItem value="flat">Flat</CustomSelectItem>
                      <CustomSelectItem value="apartment">Apartment</CustomSelectItem>
                      <CustomSelectItem value="tenement">Tenement Houses</CustomSelectItem>
                      <CustomSelectItem value="duplex">Duplex</CustomSelectItem>
                      <CustomSelectItem value="bungalow">Bungalow</CustomSelectItem>
                    </CustomSelectContent>
                  </CustomSelect>

                  <CustomSelect value={priceRange} onValueChange={setPriceRange}>
                    <CustomSelectTrigger className="font-medium text-gray-400 focus:border-blue-500">
                      <CustomSelectValue placeholder="Range" />
                    </CustomSelectTrigger>
                    <CustomSelectContent className="bg-white border-gray-200 shadow-xl font-medium">
                      <CustomSelectItem value="0-50m">₦0 - ₦50M</CustomSelectItem>
                      <CustomSelectItem value="50m-100m">₦50M - ₦100M</CustomSelectItem>
                      <CustomSelectItem value="100m-200m">₦100M - ₦200M</CustomSelectItem>
                      <CustomSelectItem value="200m-500m">₦200M - ₦500M</CustomSelectItem>
                      <CustomSelectItem value="500m-1b">₦500M - ₦1b</CustomSelectItem>
                      <CustomSelectItem value="1b-5b">₦1b - ₦5b</CustomSelectItem>
                      <CustomSelectItem value="5b-10b">₦5b - ₦10b</CustomSelectItem>
                      <CustomSelectItem value="10b+">₦10b+</CustomSelectItem>
                    </CustomSelectContent>
                  </CustomSelect>
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