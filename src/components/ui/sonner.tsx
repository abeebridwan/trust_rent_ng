"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <>
      <style jsx global>{`
        /* 🌿 Base toast style */
        .sonner-toast {
          border-radius: 12px;
          border: 1px solid transparent;
          backdrop-filter: blur(62.3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        /* ✅ Success Toast */
        .sonner-toast[data-type="success"] {
          background: hsla(142, 76%, 45%, 0.15);
          border-color: hsl(142, 76%, 45%);
          color: hsl(142, 80%, 30%);
        }

        /* ❌ Error Toast */
        .sonner-toast[data-type="error"] {
          background: hsla(0, 100%, 65%, 0.15);
          border-color: hsl(0, 100%, 65%);
          color: hsl(0, 100%, 30%);
        }

        /* ℹ️ Info Toast */
        .sonner-toast[data-type="info"] {
          background: hsla(217, 91%, 60%, 0.15);
          border-color: hsl(217, 91%, 60%);
          color: hsl(217, 91%, 40%);
        }

        /* ⚠️ Warning Toast */
        .sonner-toast[data-type="warning"] {
          background: hsla(45, 100%, 50%, 0.15);
          border-color: hsl(45, 100%, 50%);
          color: hsl(45, 100%, 20%);
        }
      `}</style>

      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        toastOptions={{
          classNames: {
            toast:
              "group toast sonner-toast group-[.toaster]:text-foreground",
            description: "group-[.toast]:text-muted-foreground",
            actionButton:
              "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton:
              "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        }}
        {...props}
      />
    </>
  );
};

export { Toaster, toast };
