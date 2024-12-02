'use client';

import { cn } from "@/lib/utils";

interface PriceTagProps {
  price: number;
  className?: string;
}

export function PriceTag({ price, className }: PriceTagProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className="text-lg font-semibold">${price}</span>
      <span className="text-sm text-muted-foreground">starting at</span>
    </div>
  );
}