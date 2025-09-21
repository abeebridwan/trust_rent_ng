"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "@/assets/Logo/Logo-1.png";
import GoogleLogo from "@/assets/Icons/Google.png";
import AppleLogo from "@/assets/Icons/Apple.png";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Signup successful! Check the console for the form data.");
  };

  return (
    <Card className="z-10 w-full mx-4 sm:mx-0 max-w-sm sm:max-w-md rounded-none flex flex-col justify-center items-center">
      <CardHeader className="flex flex-col justify-center items-center">
        <div className="flex items-center overflow-hidden">
          {/* Desktop Logo */}
          <Link href="/">
            <Image
              src={Logo1}
              alt="Vetarent Logo"
              width={150}
              height={50}
              className="hidden sm:block "
            />
          </Link>
          {/* Mobile Logo */}
          <Link href="/">
            <Image
              src={Logo1}
              alt="Vetarent Logo"
              width={172}
              height={57}
              className="block sm:hidden"
            />
          </Link>
        </div>
        <CardTitle className="text-lg sm:text-2xl font-semibold !-mt-1 tracking-widest">
          Create Account
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full p-4 sm:px-6 sm:pt-0 sm:pb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Input
              {...register("fullName")}
              placeholder="Full Name"
              className="rounded-none w-full px-4 py-6 border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm "
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Input
              {...register("email")}
              type="email"
              placeholder="E-Mail"
              className="rounded-none w-full px-4 py-6 border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm "
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
         <div className="grid gap-2">
            <div className="relative">
              <Input
                {...register("dateOfBirth")}
                type="date"
                className="rounded-none w-full px-4 py-6 border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm"
              />
              <label className="block sm:hidden absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium pointer-events-none peer-focus:hidden">
                Date of Birth
              </label>
            </div>
            {errors.dateOfBirth && (
              <p className="text-red-500 text-xs">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="relative">
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="rounded-none w-full px-4 py-6 pr-12 border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="relative">
              <Input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="rounded-none w-full px-4 py-6 pr-12 border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm "
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <Eye size={20} />
                ) : (
                  <EyeOff size={20} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
            <div className="flex items-center space-x-2 -mt-2">
              <Checkbox {...register("termsAccepted")} className="rounded-[2px] bg-transparent border-gray-300 data-[state=checked]:bg-gray-300 data-[state=checked]:border-gray-300 data-[state=checked]:text-white" />
              <Label
                htmlFor="termsAccepted"
                className="text-xs sm:text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <Link 
                 href="/terms-and-conditions">
                 I agree with Terms & Condition
                </Link>
              </Label>
              {errors.termsAccepted && (
                <p className="text-red-500 text-xs">
                  {errors.termsAccepted.message}
                </p>
              )}
            </div>
          <Button
            type="submit"
            className="w-full h-12 bg-[#0D47A1] mt-4 sm:mt-4 text-white font-semibold text-sm sm:text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
          >
            Sign Up
          </Button>

          <div className="flex items-center gap-2 mt-2">
            <hr className="flex-grow border-gray-200" />
            <span className="text-gray-500 text-sm sm:text-lg">OR</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          <Button
            variant="outline"
            className="w-full h-12 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 py-6 rounded-none border-[1px] border-gray-400 hover:border-vetarent-orange"
          >
            <Image src={GoogleLogo} alt="Google" width={20} height={20} />
            Signup with Google
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 py-6 rounded-none border-[1px] border-gray-400 hover:border-vetarent-orange"
          >
            <Image src={AppleLogo} alt="Apple" width={20} height={20} />
            Signup with Apple
          </Button>
        </form>
        <hr className="my-4 text-gray-200 mt-4 sm:mt-6" />
        <div className="mt-4 sm:mt-6 text-center text-sm sm:text-lg font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="hover:underline hover:text-vetarent-orange text-vetarent-blue text-sm sm:text-lg font-semibold"
          >
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
