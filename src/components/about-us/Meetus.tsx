import React from 'react';
import Image from "next/image";
import meetus1 from "@/assets/Images/meetus1.png";
import meetus2 from "@/assets/Images/meetus2.png";
import meetus3 from "@/assets/Images/meetus3.png";
import meetus4 from "@/assets/Images/meetus4.png";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sikiru Mohe",
      position: "Executive Officer",
      image: meetus1
    },
    {
      id: 2,
      name: "Sikiru Mohe",
      position: "Chief Operations Officer",
      image: meetus2
    },
    {
      id: 3,
      name: "Sikiru Mohe",
      position: "Founder & CEO",
      image: meetus3
    },
    {
      id: 4,
      name: "Sikiru Mohe",
      position: "Chief Operations Officer",
      image: meetus4
    }
  ];

  return (
     <section className="pb-8 pt-8 md:pt-0">
      <div className=" px-4 flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Meet Our <span className="text-vetarent-blue">Team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex justify-center items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="">
              {/* Image Container */}
              <div className="flex flex-col justify-center items-center ">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={453}
                  height={355}
                  className=""
                />
              </div>
              {/* Member Info */}
              <div className="border-2 border-t-0 p-6">
                <h3 className="text-base md:text-2xl font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-xs md:text-lg text-muted-foreground/70 text-vetarent-blue font-medium">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;