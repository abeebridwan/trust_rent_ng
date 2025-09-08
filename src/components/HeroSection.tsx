"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";

const HeroSection = () => {
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <section className="relative bg-background-accent py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                The only rental platform that{" "}
                <span className="text-vetarent-blue">verifies every user and property</span>{" "}
                so you can rent with confidence and avoid fraud.
              </h1>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 space-y-6">
              {/* Location Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <Input
                  placeholder="Enter Location"
                  className="pl-12 h-14 bg-gray-50 border-gray-200 rounded-xl text-gray-700 font-medium placeholder:text-gray-400 focus:bg-white focus:border-vetarent-blue"
                />
              </div>

              {/* Property Type and Range Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-14 bg-gray-50 border-gray-200 rounded-xl font-medium text-gray-700 focus:bg-white focus:border-vetarent-blue">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 shadow-xl rounded-xl">
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="tenement">Tenement Houses</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                    <SelectItem value="bungalow">Bungalow</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="h-14 bg-gray-50 border-gray-200 rounded-xl font-medium text-gray-700 focus:bg-white focus:border-vetarent-blue">
                    <SelectValue placeholder="Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 shadow-xl rounded-xl">
                    <SelectItem value="0-500k">₦0 - ₦500k</SelectItem>
                    <SelectItem value="500k-1m">₦500k - ₦1M</SelectItem>
                    <SelectItem value="1m-2m">₦1M - ₦2M</SelectItem>
                    <SelectItem value="2m+">₦2M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button className="w-full h-14 bg-vetarent-blue hover:bg-vetarent-blue-dark text-white font-semibold rounded-xl text-base">
                <Search className="w-5 h-5 mr-3" />
                Search Properties
              </Button>
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <p className="text-gray-600 font-medium">
                  Are you a property owner?
                </p>
                <Button className="bg-vetarent-orange hover:bg-vetarent-orange/90 text-white font-semibold px-8 py-3 rounded-xl text-base">
                  Become a Verified Landlord
                </Button>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-600 font-medium mb-2">
                  Already have an account?
                </p>
                <span className="text-vetarent-blue font-semibold cursor-pointer hover:underline text-base">
                  Sign In
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Network Visualization */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl overflow-hidden">
              {/* Dotted background pattern */}
              <div className="absolute inset-0">
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="dots"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="12" cy="12" r="2" fill="#2563eb" opacity="0.4" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              {/* Network nodes - Houses and Users */}
              <div className="absolute inset-0 p-8">
                {/* Property nodes (orange houses) */}
                <div className="absolute top-12 left-16 w-14 h-14 bg-vetarent-orange rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <div className="absolute top-40 left-8 w-14 h-14 bg-vetarent-orange rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <div className="absolute bottom-20 right-12 w-14 h-14 bg-vetarent-orange rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                
                {/* User nodes (blue circles) */}
                <div className="absolute top-28 right-20 w-12 h-12 bg-vetarent-blue rounded-full shadow-lg border-4 border-white"></div>
                <div className="absolute top-16 center w-12 h-12 bg-vetarent-blue rounded-full shadow-lg border-4 border-white" style={{left: '45%'}}></div>
                <div className="absolute bottom-32 left-24 w-12 h-12 bg-vetarent-blue rounded-full shadow-lg border-4 border-white"></div>
                <div className="absolute bottom-16 center w-12 h-12 bg-vetarent-blue rounded-full shadow-lg border-4 border-white" style={{left: '55%'}}></div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0.4"/>
                    </linearGradient>
                  </defs>
                  <line x1="25%" y1="25%" x2="65%" y2="35%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="8,4" />
                  <line x1="65%" y1="35%" x2="45%" y2="65%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="8,4" />
                  <line x1="45%" y1="65%" x2="80%" y2="75%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="8,4" />
                  <line x1="20%" y1="75%" x2="55%" y2="85%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="8,4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;