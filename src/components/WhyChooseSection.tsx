import House from "@/assets/Icons/House.png";
import Scam from "@/assets/Icons/Scam.png";
import Verified from "@/assets/Icons/Verified.png";
import Image from "next/image";

const WhyChooseSection = () => {
  const features = [
    {
     icon: <Image 
            src={House} 
            alt="House Logo" 
            width={67} 
            height={67}
            className="w-[47.55px] h-[47.55px] md:w-[67px] md:h-[67px]"
          />,
      title: "Easy Property Search",
      description: "Search, save, and apply for rentals anytime, anywhere.",
      bg: "bg-background-accent"
      
    },
    {
      icon: <Image 
            src={Verified} 
            alt="Verified Logo" 
            width={67} 
            height={67} 
            className="w-[47.55px] h-[47.55px] md:w-[67px] md:h-[67px]"
          />,
      title: "Verified Landlords Only",
      description: "Every landlord is identity-verified, so you deal with real, serious people.",
      bg: "bg-vetarent-blue"
    },
    {
      icon: <Image 
            src={Scam} 
            alt="Scam Logo" 
            width={67} 
            height={67} 
            className="w-[47.55px] h-[47.55px] md:w-[67px] md:h-[67px]"
          />,
      title: "Built to Prevent Scams",
      description: "Our double-verification process protects both you and your property.",
      bg: "bg-background-accent"
    }
  ];

  return (
    <section className="bg-white pt-0 pb-4 md:pb-16 md:pt-0 relative z-50">
      <div className="container mx-auto px-4">
        <div className="text-center  md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-[20px]">
            Why Choose <span className="text-vetarent-blue">Vetarent?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-[12px]">
          {features.map((feature, index) => (
            <div key={index} className={`space-y-4 ${feature.bg} p-6 md:py-12`}>
              <div className="w-full flex items-center justify-start">
                {feature.icon}
              </div>

              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${
                  index === 1 ? "text-white" : "text-foreground"
                }`}>
                {feature.title}
              </h3>

              <p
                className={`text-sm sm:text-base md:text-lg font-medium ${
                  index === 1 ? "text-white" : "text-foreground"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;