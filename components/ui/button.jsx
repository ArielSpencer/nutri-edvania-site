import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[16px_4px] text-base text-primary font-medium ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-button-alternative hover:bg-button-hover", // Fern Green
        primary: "bg-button hover:bg-button-hover", // Sand
        secundary: "bg-button-hover hover:bg-button", // Saffron
        outline: "border border-button-alternative bg-transparent text-button-alternative hover:bg-button-alternative hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm font-bold uppercase tracking-[2px]",
        icon: "h-[32px] w-[40px] rounded-[12px_2px] text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(
        buttonVariants({ variant, size, className }),
      )}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
