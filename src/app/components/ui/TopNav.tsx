import { Avatar } from "@/app/components/ui/Avatar"

type TopNavProps = {
  variant?: "default" | "centered"
  initial?: string
  title?: string
}

export function TopNav({ variant = "default", initial, title }: TopNavProps) {
  if (variant === "centered") {
    return (
      <header className="flex h-(--size-top-nav) items-center justify-center px-5">
        <h3 className="text-text-white">{title}</h3>
      </header>
    )
  }

  return (
    <header className="flex h-(--size-top-nav) items-center justify-between px-5">
      <h3 className="text-brand-green">Wash World</h3>
      {initial && <Avatar initial={initial} />}
    </header>
  )
}
