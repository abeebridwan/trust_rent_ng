import Image from "next/image";
import Image2Desktop from "@/assets/Images/Image.png";
import Image2Mobile from "@/assets/Images/Image-2-mobile.png";
import Mission1 from "@/assets/Images/mission-1.png";
import Mission2 from "@/assets/Images/mission-2.png";
import Mission3 from "@/assets/Images/mission-3.png";


const Mission = () => {
  return (
    <section className="py-4 md:py-8 overflow-x-scroll">
      <div className="mx-auto">
        <div className="text-center space-y-4 md:space-y-8 text-center flex flex-col justify-center items-center px-4">
          <p className="text-muted-foreground/70 text-base sm:text-lg md:text-2xl max-w-2xl font-semibold mx-auto">
            OUR MISSION
          </p>

          <h2 className="text-vetarent-blue text-[22px] sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-foreground sm:whitespace-nowrap">
            Renting, Made Simple & Secure
          </h2>
          
          <div className="w-full  max-w-[90%] sm:max-w-[70%]">
            <p className="text-black font-medium text-xs sm:text-lg leading-loose">
              Our mission is clear to make renting in Nigeria simple, transparent, and scam-free. By verifying every landlord, tenant, 
              and property before it goes live, we ensure that only real people and real homes are on Vetarent.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:gap-8 bg-background-accent p-4 md:py-8 md:px-4 my-12">
          <div className="bg-background-accent flex items-center justify-between leading-loose">
            <div className="space-y-6 md:space-y-8 text-center md:text-left pb-2 md:pb-0 md:p-4 lg:p-0 ">
               <p className="block md:hidden text-muted-foreground/70 text-base sm:text-lg md:text-2xl max-w-2xl font-semibold mx-auto mt-4">
                OUR STORY
              </p>   


                <p className="text-black font-medium text-xs sm:text-lg leading-loose">
                    We’ve lived the rental struggles ourselves — fake agents, fraudulent landlords, endless back-and-forth. 
                </p>

                <p className="text-black font-medium text-xs sm:text-lg leading-loose">
                  Vetarent was born out of this frustration, with one goal in mind: to create a rental platform that Nigerians can finally trust.
                </p>
            </div>
          </div>

          {/* For images */}
          <div className="flex items-center justify-center">
             <div className="mr-1">
                <Image
                  src={Mission1} 
                  alt="A man in the board room with people talking about the mission"
                  width={336}
                  height={330}
                  className=""
                />
              </div>
              <div className="flex justify-center flex-col items-center">
                <Image
                  src={Mission2} 
                  alt="A lady holding an Ipad explaining the mission"
                  width={264}
                  height={240}
                  className=""
                  />
                <Image
                  src={Mission3} 
                  alt="Vetarent logo"
                  width={264}
                  height={86}
                  className="mt-1"
                />
              </div>
          </div>
        </div>




      </div>
    </section>
  );
};

export default Mission;