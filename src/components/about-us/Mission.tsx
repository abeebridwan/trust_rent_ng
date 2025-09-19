import Image from "next/image";
import Image1Desktop from "@/assets/Images/Image-1.png";
import Image1Mobile from "@/assets/Images/Image-1-mobile.png";
import Image2Desktop from "@/assets/Images/Image.png";
import Image2Mobile from "@/assets/Images/Image-2-mobile.png";
import Tick from "@/assets/Icons/Tick.png";
import TickWhite from "@/assets/Icons/tick-white.png";

const featuresTenants = [
  "Verified listings Only",
  "ID-Verified Landlords",
  "Smart & Secure",
];

const featuresLandLords = [
  "Easy Listing Process",
  "Verified Tenants",
  "Scam-Free Protection",
];

const Mission = () => {
  return (
    <section className="py-4 md:py-8 overflow-x-scroll">
      <div className="mx-auto">
        <div className="text-center space-y-4 md:space-y-8 text-center flex flex-col justify-center items-center">
          <p className="text-muted-foreground/70 text-lg md:text-2xl max-w-2xl font-semibold mx-auto">
            OUR MISSION
          </p>

          <h2 className="text-vetarent-blue text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-foreground sm:whitespace-nowrap">
            Renting, Made Simple & Secure
          </h2>
          
          <div className="w-full  max-w-[70%]">
            <p className="text-black font-medium text-lg leading-loose">
              Our mission is clear to make renting in Nigeria simple, transparent, and scam-free. By verifying every landlord, tenant, 
              and property before it goes live, we ensure that only real people and real homes are on Vetarent.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:gap-8 bg-background-accent p-4 md:p-12">
          {/* For Tenants */}
          <div className="gap-4 md:gap-4 p-4 md:p-8 pr-0 space-y-6 bg-background-accent flex items-center justify-between">
            
            <div className="space-y-8 md:space-y-4 md:mt-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground whitespace-nowrap">For Tenants</h3>
                <div className="space-y-6 md:space-y-3">
                  {featuresTenants.map((text, i) => (
                    <div key={i} className="flex items-center space-x-1">
                      <Image 
                        src={Tick} 
                        alt="Tick Icon" 
                        width={14} 
                        height={14} 
                      />
                      <span className="text-foreground sm:whitespace-nowrap text-sm md:text-lg">{text}</span>
                    </div>
                  ))}
                </div>
            </div>

            <div className="relative">
              {/* Mobile image */}
              <Image 
                src={Image1Mobile} 
                alt="House Image for Tenants" 
                className="md:hidden"
              />
              {/* Desktop image */}
              <Image 
                src={Image1Desktop} 
                alt="House Image for Tenants" 
                className="hidden md:block"
              />
            </div>
          </div>

          {/* For Landlords */}
          <div className="gap-4 md:gap-4 bg-vetarent-blue rounded-none p-8 pt-4 pr-4 md:p-8 pl-0 md:pl-4 space-y-6 text-white flex items-center justify-between">
             <div className="pl-2 md:pl-0 relative">
                {/* Mobile image */}
                <Image
                  src={Image2Mobile} 
                  alt="Search and Find Image for Landlords - Mobile"
                  className="md:hidden mt-4 md:mt-0"
                />

                {/* Desktop image */}
                <Image
                  src={Image2Desktop} 
                  alt="Search and Find Image for Landlords - Desktop"
                  className="hidden md:block"
                />
              </div>
            
            <div className="space-y-8 md:space-y-4 md:mt-4">
              <h3 className="text-xl md:text-2xl font-bold whitespace-nowrap">For Landlords</h3>
              <div className="space-y-4 md:space-y-3">
                  {featuresLandLords.map((text, i) => (
                    <div key={i} className="flex items-center space-x-1">
                      <Image 
                        src={TickWhite} 
                        alt="Tick white Icon" 
                        width={14} 
                        height={14} 
                      />
                      <span className="text-foreground text-sm md:text-lg sm:whitespace-nowrap">{text}</span>
                    </div>
                  ))}
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;