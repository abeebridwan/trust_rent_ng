"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "@/assets/Logo/Logo-1.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const passwordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof formSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isResending, setIsResending] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(formSchema) });
  const { register: registerPassword, handleSubmit: handlePasswordSubmit, formState: { errors: passwordErrors } } = useForm<PasswordFormData>({ resolver: zodResolver(passwordSchema) });

  const router = useRouter();

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    console.log(data);
    setUserEmail(data.email);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        console.log("successful");
        setIsEmailSubmitted(true);
        toast.success("Password reset otp code sent!");
      } else {
        console.log("failed");
        toast.error("Failed to send password otp code. Please try again.");
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];

    // Only allow single digit input
    if (value.length > 1) {
      return;
    }

    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if a digit is entered and it's not the last input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // If backspace is pressed on an empty input, move focus to previous and clear it
      e.preventDefault();
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "Backspace" && otp[index]) {
      // If backspace is pressed on a non-empty input, clear current input
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
      inputRefs.current[5]?.focus(); // Move focus to the last input
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
        console.log("successful");
        setIsOtpVerified(true);
        toast.success("The code have been resent successfully. Please check your e-mail");
      } else {
        console.log("failed");
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
        console.log("successful");
        toast.success("OTP resent successfully!");
      } else {
        console.log("failed");
        toast.error("Failed to resend OTP. Please try again.");
      }
      setIsResending(false);
    }, 2000);
  };

  const handleResetPassword = (data: PasswordFormData) => {
    setIsLoading(true);
    console.log("Resetting password with data:", data);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        console.log("successful");
        toast.success("Password reset successfully!");
        router.push("/login");
      } else {
        console.log("failed");
        toast.error("Failed to reset password. Please try again.");
      }
      setIsLoading(false);
    }, 2000);
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
          {isEmailSubmitted && !isOtpVerified
            ? "VERIFY YOUR EMAIL ID"
            : isOtpVerified
            ? "RESET PASSWORD"
            : "Forgot Password"}
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full p-4 sm:px-6 sm:pt-0 sm:pb-6">
        {!isEmailSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2 text-center">
              <label
                htmlFor="email"
                className="text-sm sm:text-base text-gray-400"
              >
                Enter the E-mail your account is registered with
              </label>
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
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#0D47A1] mt-4 sm:mt-4 text-white font-semibold text-sm sm:text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
            >
              {isLoading ? "Sending..." : "Proceed"}
            </Button>
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
                                  />              ))}
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
          <form
            onSubmit={handlePasswordSubmit(handleResetPassword)}
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <div className="relative">
                <Input
                  {...registerPassword("password")}
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
              {passwordErrors.password && (
                <p className="text-red-500 text-xs">
                  {passwordErrors.password.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="relative">
                <Input
                  {...registerPassword("confirmPassword")}
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
              {passwordErrors.confirmPassword && (
                <p className="text-red-500 text-xs">
                  {passwordErrors.confirmPassword.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#0D47A1] mt-4 sm:mt-4 text-white font-semibold text-sm sm:text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
