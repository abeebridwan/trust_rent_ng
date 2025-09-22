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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Logged in successfully!");
    router.push("/admin/dashboard");
  };

  return (
    <Card className="z-10 w-full max-w-md mx-4 sm:mx-0 rounded-none">
      <CardHeader className="flex flex-col justify-center items-center">
        <div className="flex items-center overflow-hidden">
          <Link href="/">
            <Image
              src={Logo1}
              alt="Vetarent Logo"
              width={150}
              height={50}
              className="hidden sm:block"
            />
          </Link>
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
          Admin Login
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full p-4 sm:px-6 sm:pt-0 sm:pb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="E-Mail"
              className="rounded-none w-full px-4 py-6 border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="rounded-none w-full px-4 py-6 pr-12 border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-vetarent-blue-500 focus:border-vetarent-blue text-gray-700 placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full h-12 bg-[#0D47A1] mt-4 sm:mt-4 text-white font-semibold text-sm sm:text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
          >
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
