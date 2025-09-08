import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Star } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import Image from 'next/image';


const FeaturedListings = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      title: "Seaside Serenity Villa ®",
      location: "Malibu, Lagos",
      price: "₦ 1,500,000",
      period: "/yr",
      rating: 4.9,
      verified: true
    },
    {
      id: 2,
      image: property2,
      title: "Seaside Serenity Villa ®",
      location: "Malibu, Lagos",
      price: "₦ 1,500,000",
      period: "/yr",
      rating: 4.9,
      verified: true
    },
    {
      id: 3,
      image: property3,
      title: "Seaside Serenity Villa ®",
      location: "Malibu, Lagos",
      price: "₦ 1,500,000",
      period: "/yr",
      rating: 4.9,
      verified: true
    }
  ];

  return (
    <section className="bg-background-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Listing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse verified properties, trusted landlords and high-
            rated locations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="bg-card border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image 
                  src={property.image.src || property.image} 
                  alt={property.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  variant="ghost" 
                  size="sm"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-bold text-foreground">
                      {property.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {property.period}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-vetarent-orange fill-current" />
                    <span className="text-sm font-medium">{property.rating}</span>
                    {property.verified && (
                      <div className="w-2 h-2 bg-success rounded-full ml-2"></div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-vetarent-orange hover:bg-vetarent-orange/90 text-accent-foreground px-8 py-3 rounded-full">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;