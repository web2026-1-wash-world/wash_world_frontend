"use client";

import { useRouter } from "next/navigation";
import { LuSettings } from "react-icons/lu"

type TopNavProps = {
  variant?: "default" | "centered"
  title?: string
}

export function TopNav({ variant = "default", title }: TopNavProps) {
  const router = useRouter();

  if (variant === "centered") {
    return (
      <header className="flex h-(--size-top-nav) items-center justify-center mt-2 px-5">
        <h3 className="text-text-white uppercase">{title}</h3>
      </header>
    )
  }

  return (
    <header className="flex h-(--size-top-nav) items-center justify-between mt-2 px-5">
      <h3 className="text-white uppercase">Wash World</h3>
      <button onClick={() => router.push("/settings")}>
        <LuSettings className="size-6 text-white" />
      </button>
    </header>
  )
}
