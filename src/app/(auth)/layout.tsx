import Image from "next/image";
import homesettingAuth from "@/assets/Images/homesetting-auth.jpg";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-nopad mx-auto px-4">
      <div className="relative w-full min-h-[982px] hidden md:block overflow-hidden">
        <Image 
          src={homesettingAuth} 
          alt="Home Setting" 
          fill 
          className="object-cover" 
          priority
        />
        {/* Centered container for children */}
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
