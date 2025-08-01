"use client";

import { ArrowUpRightIcon } from "@/components/icons";
import { Button } from "@/components/ui";

export default function HeroButton({ label, icon, onClick, className }: any) {
  return (
    <Button
      variant="secondary"
      onClick={onClick}
      className={`group border-emerald-400/30 hover:border-emerald-400/50 hover:bg-emerald-400/10 ${className}`}
    >
      {label}
      {icon}
      {/* <ArrowUpRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
    </Button>
  );
}
//
