"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/sonner";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true)
     try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email : formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
       setIsLoading(false)
        toast.error(data.error);
        return
      }

      setIsLoading(false)
      toast.success("Logged in successfully!");
      router.push(data.url) 
      router.refresh()
      } catch (error) {
      console.error('Login error:', error)
      setIsLoading(false)
      toast.error('An unexpected error occurred')
    } 
  };

  const handleGoogleLogin = () => {
  window.location.href = `/api/auth/google/signin?flow=login`
  }

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
          LOGIN
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full p-4 sm:px-6 sm:pt-0 sm:pb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
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

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Controller
                  name="rememberMe"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="rounded-[2px] bg-transparent border-gray-300 data-[state=checked]:bg-gray-300 data-[state=checked]:border-gray-300 data-[state=checked]:text-white"
                      id="remember"
                      tabIndex={0}
                    />
                  )} />
                <label
                  tabIndex={0}
                  htmlFor="remember"
                  className="text-xs sm:text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="inline-block text-xs sm:text-sm font-bold text-vetarent-orange hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-[#0D47A1] mt-4 sm:mt-4 text-white font-semibold text-sm sm:text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <div className="flex items-center gap-2 mt-6">
            <hr className="flex-grow border-gray-200" />
            <span className="text-gray-500 text-sm sm:text-lg">OR</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          <div className="grid gap-4 mt-4">
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full h-12 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 py-6 rounded-none border-[1px] border-gray-400 hover:border-vetarent-orange"
          >
            <Image src={GoogleLogo} alt="Google" width={20} height={20} />
            Login with Google
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 py-6 rounded-none border-[1px] border-gray-400 hover:border-vetarent-orange"
          >
            <Image src={AppleLogo} alt="Apple" width={20} height={20} />
            Login with Apple
          </Button>
        </div>
        <hr className="my-4 text-gray-200 mt-4 sm:mt-6" />
        <div className="mt-4 sm:mt-6 text-center text-sm sm:text-lg font-medium">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="hover:underline hover:text-vetarent-orange text-vetarent-blue text-sm sm:text-lg font-semibold"
          >
            Signup
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}