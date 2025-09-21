"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "@/assets/Logo/Logo-1.png";
import GoogleLogo from "@/assets/Icons/Google.png"; 
import AppleLogo from "@/assets/Icons/Apple.png"; 
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="z-10 w-full max-w-md rounded-none flex flex-col justify-center items-center">
      <CardHeader className="flex flex-col justify-center items-center">
        <div className="flex items-center overflow-hidden">
          {/* Desktop Logo */}
          <Link href="/">
            <Image 
              src={Logo1} 
              alt="Vetarent Logo" 
              width={150} 
              height={50} 
              className="hidden md:block " 
            />
          </Link>
          {/* Mobile Logo */}
          <Link href="/">
            <Image 
              src={Logo1} 
              alt="Vetarent Logo" 
              width={111.37} 
              height={37} 
              className="block md:hidden" 
            />
          </Link>
        </div>
        <CardTitle className="text-2xl font-semibold !-mt-1 tracking-widest">LOGIN</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Input
              id="email"
              type="email"
              placeholder="E-Mail"
              required
              defaultValue=""
              className="rounded-none w-full px-4 py-6 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm "
            />
          </div>
          <div className="grid gap-2">
            <div className="relative">
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required 
                defaultValue="" 
                className="rounded-none w-full px-4 py-6 pr-12 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  className="rounded-[2px] bg-transparent border-gray-300 data-[state=checked]:bg-gray-300 data-[state=checked]:border-gray-300 data-[state=checked]:text-white" 
                  id="remember" 
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
              <Link href="/forgot-password" className="inline-block text-sm font-bold text-vetarent-orange hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>
            <Button
            className="w-full h-14 bg-[#0D47A1] text-white font-semibold text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
          >
            Login
          </Button>

          <div className="flex items-center gap-2 mt-2">
            <hr className="flex-grow border-gray-200" />
            <span className="text-gray-500 text-lg">OR</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          <Button variant="outline" className="w-full h-14 text-base font-semibold flex items-center justify-center gap-2 py-6 rounded-none border-[1px] border-gray-400 hover:border-vetarent-orange">
            <Image src={GoogleLogo} alt="Google" width={20} height={20} />
            Login with Google
          </Button>
          <Button variant="outline" className="w-full h-14 text-base font-semibold flex items-center justify-center gap-2 py-6 rounded-none border-[1px] border-gray-400 hover:border-vetarent-orange">
            <Image src={AppleLogo} alt="Apple" width={20} height={20} />
            Login with Apple
          </Button>
        </div>
        <hr className="my-4 text-gray-200 mt-6" />
        <div className="mt-6 text-center text-lg font-medium">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="hover:underline text-vetarent-blue text-lg font-semibold">
            Signup
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}