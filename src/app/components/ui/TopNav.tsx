"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Avatar } from "@/app/components/ui/Avatar"

type TopNavProps = {
  variant?: "default" | "centered"
  title?: string
}

export function TopNav({ variant = "default", title }: TopNavProps) {
  const [initial, setInitial] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") ?? "null");
    setInitial(user.user_first_name?.[0]);
  }, []);

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
      {initial && (
        <button onClick={() => router.push("/settings")}>
          <Avatar initial={initial} />
        </button>
      )}
    </header>
  )
}
