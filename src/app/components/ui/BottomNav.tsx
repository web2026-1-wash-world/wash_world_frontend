"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LuHouse, LuMapPin, LuCarFront, LuUser } from "react-icons/lu"

const tabs = [
  { href: "/", label: "Hjem", Icon: LuHouse },
  { href: "/kort", label: "Kort", Icon: LuMapPin },
  { href: "/vask", label: "Vask", Icon: LuCarFront },
  { href: "/profil", label: "Profil", Icon: LuUser },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-5 left-5 right-5 flex h-(--size-bottom-nav) items-center justify-around rounded-nav bg-surface px-2">
      {tabs.map(({ href, label, Icon }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center gap-1 rounded-pill px-4 py-2 ${
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
