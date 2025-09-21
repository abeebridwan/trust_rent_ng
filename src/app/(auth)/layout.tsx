import Image from "next/image";
import homesettingAuth from "@/assets/Images/homesetting-auth.jpg";
import homesettingAuthMobile from "@/assets/Images/homesetting-auth-mobile.jpg";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-nopad mx-auto px-4">
      <div className="relative w-full min-h-[932px] block sm:hidden overflow-hidden">
        <Image 
          src={homesettingAuthMobile} 
          alt="Home Setting" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
      <div className="relative w-full min-h-[982px] hidden sm:block overflow-hidden">
        <Image 
          src={homesettingAuth} 
          alt="Home Setting" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
