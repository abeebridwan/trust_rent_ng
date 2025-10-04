  "use client";

  import { TooltipProvider } from "@/components/ui/tooltip";
  import { Toaster } from "@/components/ui/toaster";
  import { Toaster as Sonner } from "@/components/ui/sonner";
  import QueryProvider from "./query-provider";
  import { AuthProvider } from "@/utils/supabase/authContext";
  export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
          <QueryProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner position="top-center" />
              {children}
            </TooltipProvider>
          </QueryProvider>
      </AuthProvider> 
    );
  }
