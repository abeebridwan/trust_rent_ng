"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import Logo1 from "@/assets/Logo/Logo-1.png";
import { useAdminLogin } from "@/app/api/auth";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/sonner";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

import network from "@/assets/Images/network.png";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
  
});

type FormData = z.infer<typeof formSchema>;

export default function AdminLoginPage() {
  const router = useRouter()
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const { mutate: login, isPending } = useAdminLogin();

  const onSubmit = (data: FormData) => {
    login(data, {
      onSuccess: () => {
        toast.success("Logged in successfully!");
        router.push("/admin/dashboard");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <main className="lg:grid lg:grid-cols-2 m-4">
      <div className="space-y-4 bg-background-accent flex-col items-center justify-center rounded-lg px-8 py-4 pb-16">
        <div className="flex items-center justify-center overflow-hidden">
          <Link href="/">
            <Image
              src={Logo1}
              alt="Vetarent Logo"
              width={209.95}
              height={69}
            />
          </Link>
        </div>
        <div className="space-y-6 pt-4">
          <div className="text-left">
            <h1 className="text-[20px] md:text-[35px] text-foreground font-normal inline">
              The only rental platform that{" "}
              <span className="text-[20px] md:text-[35px] font-semibold text-vetarent-blue inline ">verifies every user and property{" "}</span>
              so you can rent with confidence and avoid fraud.
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center">

        <Image 
          src={network} 
          alt="Network visualization showing connected nodes and data flow" 
          width={583.01} 
          height={478.29} 
          className="" 
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgzIiBoZWlnaHQ9IjQ3OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjBmMGYwO3N0b3Atb3BhY2l0eTowLjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTBlMGUwO3N0b3Atb3BhY2l0eTowLjA1Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNTgzIiBoZWlnaHQ9IjQ3OCIgZmlsbD0idXJsKCNiZykiLz4KICA8Y2lyY2xlIGN4PSIxNDAiIGN5PSIxMjAiIHI9IjgiIGZpbGw9IiNkZGRkZGQiIG9wYWNpdHk9IjAuMyIvPgogIDxjaXJjbGUgY3g9IjI5MCIgY3k9IjIwMCIgcj0iMTIiIGZpbGw9IiNkZGRkZGQiIG9wYWNpdHk9IjAuNCIvPgogIDxjaXJjbGUgY3g9IjQ0MCIgY3k9IjE2MCIgcj0iMTAiIGZpbGw9IiNkZGRkZGQiIG9wYWNpdHk9IjAuMzUiLz4KICA8bGluZSB4MT0iMTQwIiB5MT0iMTIwIiB4Mj0iMjkwIiB5Mj0iMjAwIiBzdHJva2U9IiNkZGRkZGQiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4yIi8+CiAgPGxpbmUgeDE9IjI5MCIgeTE9IjIwMCIgeDI9IjQ0MCIgeTI9IjE2MCIgc3Ryb2tlPSIjZGRkZGRkIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 583px"
          />
          </div>
      </div>
      <div className="flex flex-col items-center justify-center py-12 mx-6 md:mx-12 px-0 md:px-8 bg-white space-y-4 md:space-y-6 ">
            <h3 className="text-[20px] xs:text-[30px] font-normal sm:text-[40px]">
              Login into your  account
            </h3>

            <p className="xs:text-[18px] sm:text-[20px]">
              Enter the details to continue.
            </p>
          <div className="w-full pt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-2">
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
              <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 -mt-2">
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
                  )}
                />
                <label
                  tabIndex={0}
                  htmlFor="remember"
                  className="text-xs sm:text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
            </div>
              <Button
                type="submit"
                className="w-full h-12 bg-[#0D47A1] mt-4 sm:mt-4 text-white font-semibold text-sm sm:text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#1565C0] transition-all duration-200"
                disabled={isPending}
              >
                {isPending ? "Logging in..." : "Login"}
              </Button>
            </form>
          </div>
      </div>
    </main>
  );
}
