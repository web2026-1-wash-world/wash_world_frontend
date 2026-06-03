"use client";

import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`flex items-center gap-1 text-brand-green font-extrabold ${className ?? ""}`}
    >
      <LuArrowLeft className="size-4" />
      <span className="text-sm">Tilbage</span>
    </button>
  );
}
