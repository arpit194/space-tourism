import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      preset1: "font-bellefair text-[5rem] tracking-[0] md:text-[9rem]",
      preset2: "font-bellefair text-[3.5rem] tracking-[0] md:text-[6rem]",
      preset3: "font-bellefair text-[1.5rem] tracking-[0] md:text-[3.5rem]",
      preset4: "font-bellefair text-[1.125rem] tracking-[0] md:text-[2rem]",
      preset5:
        "font-barlow text-base md:text-[1.75rem] md:tracking-[4px] xl:text-[2rem]",
      preset6:
        "font-barlow text-base tracking-[2.5px] md:text-[1.75rem] md:font-bellefair",
      preset7: "font-barlow text-[0.875rem] md:tracking-[2px]",
      preset8:
        "font-barlow text-[0.875rem] tracking-[2px] md:text-base xl:text-[1.25rem]",
      preset9:
        "font-barlow text-[0.938rem] tracking-[0] md:text-[1.125rem] xl:text-[1.75rem]",
    },
  },
  defaultVariants: {
    variant: "preset9",
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

// eslint-disable-next-line react-refresh/only-export-components
export { Typography, buttonVariants };
