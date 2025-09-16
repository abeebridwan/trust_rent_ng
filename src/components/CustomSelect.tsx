import React from 'react';
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const CustomSelect = SelectPrimitive.Root;
export const CustomSelectValue = SelectPrimitive.Value;

export const CustomSelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-14 w-full items-center justify-between rounded-none border border-gray-200 bg-foreground px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-0 focus:bg-foreground focus:border-vetarent-blue/50 disabled:cursor-not-allowed disabled:opacity-50",
      // Target placeholder text (light and medium weight)
      "[&[data-placeholder]]:text-gray-400 [&[data-placeholder]]:font-medium",
      // Target selected value text (dark and bold)  
      "[&:not([data-placeholder])]:text-gray-700 [&:not([data-placeholder])]:font-semibold",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 text-gray-700"/>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
CustomSelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const CustomSelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 w-full overflow-hidden rounded-none border bg-white shadow-xl text-gray-900",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className={cn(
        "p-1",
        position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      )}>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
CustomSelectContent.displayName = SelectPrimitive.Content.displayName;

export const CustomSelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-none py-3 px-3 text-sm outline-none font-medium hover:bg-gray-100 focus:bg-gray-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
CustomSelectItem.displayName = SelectPrimitive.Item.displayName;