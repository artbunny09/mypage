import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#a3e635] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#a3e635] text-[#0d0f11]",
        secondary:
          "border-white/10 bg-[#1a1e22] text-[#e2e8f0]",
        outline:
          "border-white/15 text-[#e2e8f0]",
        accent:
          "border-[#a3e635]/30 bg-[#a3e635]/10 text-[#a3e635]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
