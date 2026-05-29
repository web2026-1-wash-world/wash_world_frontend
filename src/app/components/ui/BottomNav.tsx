"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LuHouse, LuMapPin, LuCarFront, LuUser } from "react-icons/lu"

const tabs = [
  { href: "/dashboard", label: "Hjem", Icon: LuHouse },
  { href: "/maps", label: "Kort", Icon: LuMapPin },
  { href: "/wash", label: "Vask", Icon: LuCarFront },
  { href: "/profile", label: "Profil", Icon: LuUser },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="sticky bottom-5 mx-5 flex h-(--size-bottom-nav) items-center justify-around rounded-nav uppercase bg-surface px-2">
      {tabs.map(({ href, label, Icon }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center gap-1 rounded-full px-6 py-2 ${
              isActive ? "bg-brand-green text-white" : "text-text-secondary"
            }`}
          >
            <Icon className="size-5" />
            <small className="text-[10px] font-extrabold">{label}</small>
          </Link>
        )
      })}
    </nav>
  )
}
