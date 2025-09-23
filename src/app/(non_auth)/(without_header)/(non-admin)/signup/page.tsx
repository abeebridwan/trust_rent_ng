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
import LandlordSelected from "@/assets/Icons/Landlord Selected.png";
import LandlordUnselected from "@/assets/Icons/Landlord Unselected.png";
import TenantSelected from "@/assets/Icons/Tenant selected.png";
import TenantUnselected from "@/assets/Icons/Tenant Unselected.png";
import { Eye, EyeOff } from "lucide-react";
import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSaveUserData } from "@/app/api/auth";
import { useStore } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { toast } from "@/components/ui/sonner";
import { useRouter } from "next/navigation";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isResending, setIsResending] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"landlord" | "tenant" | null>(
    null
  );
  const [isDateFocused, setIsDateFocused] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const { user, setUser } = useStore();
  const { mutate, isPending } = useSaveUserData();
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const {
    register,
    handleSubmit,
    control, 
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    termsAccepted: false, 
  },
  });

  const onSubmit = (data: FormData) => {
    setUser(data);
    setUserEmail(data.email);
    setIsSignedUp(true);
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    if (value.length > 1) {
      return;
    }
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      e.preventDefault();
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "Backspace" && otp[index]) {
      e.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    if (pastedData.length === 6 && /^[0-9]+$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    } else {
      toast.error("Please enter a valid 6-digit OTP.");
    }
  };

  const handleVerify = () => {
    setIsLoading(true);
    const enteredOtp = otp.join("");
    console.log("Verifying OTP:", enteredOtp);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        toast.success("Email verified successfully!");
        setIsOtpVerified(true);
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleResend = () => {
    setIsResending(true);
    console.log("Resending OTP...");
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        toast.success("OTP resent successfully!");
      } else {
        toast.error("Failed to resend OTP. Please try again.");
      }
      setIsResending(false);
    }, 2000);
  };

  const handleProceed = () => {
    mutate(user, {
      onSuccess: () => {
        toast.success("Role selected successfully!");
        if (selectedRole === "landlord") {
          router.push("/landlord/dashboard");
        } else if (selectedRole === "tenant") {
          router.push("/properties?search=all");
        }
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const handleGoogleLogin = () => {
    const next = "/landlord/dashboard"
    window.location.href = `/api/auth/google/signin?redirectUrl=${encodeURIComponent(next)}`
  }


  return (
    <Card className={cn(
      "z-10 w-full mx-4 sm:mx-0 rounded-none flex flex-col justify-center items-center",
      isOtpVerified 
        ? "max-w-sm sm:max-w-lg" 
        : "max-w-sm sm:max-w-md" 
    )}>
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
          {isSignedUp ? "SELECT YOUR ROLE" : "Create Account"}
        </CardTitle>
        {!isSignedUp && (
          <div className="flex flex-col items-center gap-2 mt-4">
            <Avatar
              className="w-[137px] h-[137px] cursor-pointer"
              onClick={handleAvatarClick}
            >
              <AvatarImage
                src={selectedImage || "/images/upload-signup.png"}
                alt="Profile photo"
              />
              <AvatarFallback className="text-xs">ADD</AvatarFallback>
            </Avatar>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
            <p className="text-xs sm:text-sm text-gray-400 font-medium">
              Add your profile photo
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent className="w-full p-4 sm:px-6 sm:pt-0 sm:pb-6">
        {!isSignedUp ? (
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
                <Controller
                  name="dateOfBirth"
                  control={control}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="date"
                        className="peer rounded-none w-full px-4 py-6 border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm"
                        onFocus={() => setIsDateFocused(true)}
                        onBlur={() => setIsDateFocused(false)}
                        onChange={(e) => {
                          setIsDateSelected(!!e.target.value);
                          field.onChange(e);
                        }}
                      />
                      <label
                        className={cn(
                          "block sm:hidden absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium pointer-events-none",
                          (isDateFocused || isDateSelected) && "hidden"
                        )}
                      >
                        Date of Birth
                      </label>
                    </>
                  )}
                />
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
              <Controller
                name="termsAccepted"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="rounded-[2px] bg-transparent border-gray-300 data-[state=checked]:bg-gray-300 data-[state=checked]:border-gray-300 data-[state=checked]:text-white"
                  />
                )}
              />
              <Label
                htmlFor="termsAccepted"
                className="text-xs sm:text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <Link href="/terms-and-conditions" className="hover:underline">
                  I agree with Terms & Condition
                </Link>
              </Label>
              {errors.termsAccepted && (
                <p className="text-red-500 text-xs">{errors.termsAccepted.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#0D47A1] mt-4 sm:mt-4 text-white font-semibold text-sm sm:text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </Button>

            <div className="flex items-center gap-2 mt-2">
              <hr className="flex-grow border-gray-200" />
              <span className="text-gray-500 text-sm sm:text-lg">OR</span>
              <hr className="flex-grow border-gray-200" />
            </div>

            <Button
              onClick={handleGoogleLogin}
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
            <hr className="my-2 mb-0 text-gray-200 sm:mt-4" />
            <div className="text-center text-sm sm:text-lg font-medium">
              Already have an account?{" "}
              <Link
                href="/login"
                className="hover:underline hover:text-vetarent-orange text-vetarent-blue text-sm sm:text-lg font-semibold"
              >
                Login
              </Link>
            </div>
          </form>
        ) : !isOtpVerified ? (
          <div className="grid gap-4 text-center">
            <label
              htmlFor="otp"
              className="text-sm sm:text-base text-gray-400"
            >
              Enter the 6-Digit Code sent to your {userEmail}
            </label>
            <div className="flex justify-center gap-2 w-full">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="h-12 w-8 w-full sm:h-12 sm:w-12 rounded-none text-center border-[1px] border-gray-300"
                />
              ))}
            </div>
            <Button
              type="button"
              onClick={handleVerify}
              disabled={isLoading}
              className="w-full h-12 bg-[#0D47A1] mt-4 sm:mt-4 text-white font-semibold text-sm sm:text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
            >
              {isLoading ? "Verifying..." : "Verify"}
            </Button>
            <hr className="my-2 text-gray-200 sm:mt-4" />
            <div className="text-center text-sm sm:text-lg font-medium">
              Didn’t receive code?{" "}
              <button
                type="button"
                onClick={handleResend}
                disabled={isResending}
                className="font-semibold text-vetarent-blue hover:underline disabled:opacity-50"
              >
                {isResending ? "Resending..." : "Resend"}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center px-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <div
                className={cn(
                  "w-full sm:w-[239px] h-[137px] flex flex-col items-center justify-center cursor-pointer",
                  selectedRole === "landlord"
                    ? "border-2 border-vetarent-blue bg-white"
                    : "bg-[#F3F6FA] opacity-100"
                )}
                onClick={() => setSelectedRole("landlord")}
              >
                <Image 
                  src={selectedRole === "landlord" ? LandlordSelected : LandlordUnselected} 
                  alt="Landlord" 
                  width={66} 
                  height={66} 
                />
                <p className="font-semibold mt-2">Landlord</p>
              </div>
              <div
                className={cn(
                  "w-full sm:w-[239px] h-[137px] flex flex-col items-center justify-center cursor-pointer",
                  selectedRole === "tenant"
                    ? "border-2 border-vetarent-blue bg-white"
                    : "bg-[#F3F6FA] opacity-100"
                )}
                onClick={() => setSelectedRole("tenant")}
              >
                <Image 
                  src={selectedRole === "tenant" ? TenantSelected : TenantUnselected} 
                  alt="Tenant" 
                  width={66} 
                  height={66} 
                />
                <p className="font-semibold mt-2">Tenant</p>
              </div>
            </div>
            <Button
              onClick={handleProceed}
              className="mt-4 w-full h-12 bg-[#0D47A1] text-white font-semibold text-sm sm:text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
              disabled={!selectedRole || isPending}
            >
              {isPending ? "Proceeding..." : "Proceed"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}