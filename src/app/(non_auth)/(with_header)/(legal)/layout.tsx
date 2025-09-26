
import Image from "next/image";
import homesetting from "@/assets/Images/homesetting.png";
import homesettingMobile from "@/assets/Images/homesetting-mobile.png";
import PageHeader from "./LegalHeader";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  

return (
    <main className="relative">
      <div className="container-nopad mx-auto px-4">
        <div className="relative w-full h-[740px] hidden md:block overflow-hidden">
          <Image 
            src={homesetting} 
            alt="Home Setting" 
            fill 
            className="object-cover" 
            priority
          />

          <div className="absolute inset-x-0 bottom-12 z-10 px-4">
            <div className="mx-auto ">
              <PageHeader />
            </div>
          </div>
        </div>
        
        <div className="relative w-full h-[459px] md:hidden overflow-hidden"> 
          <Image 
            src={homesettingMobile} 
            alt="Home Setting Mobile" 
            fill 
            className="object-cover"
            priority
          />

          <div className="absolute inset-x-0 bottom-4 sm:bottom-8 z-10 px-4">
            <div className="mx-auto">
              <div className="text-white">
                <PageHeader />
              </div>
            </div>
          </div>
        
        </div>
        
        
        {/* Page Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </main>
  );
}