type ListItemProps = {
  title: string
  subtitle: string
  status?: "open" | "busy" | "closed"
  trailing?: React.ReactNode
}

const statusColors = {
  open: "bg-brand-green",
  busy: "bg-splash-orange",
  closed: "bg-text-muted",
}

export function ListItem({ title, subtitle, status = "open", trailing }: ListItemProps) {
  return (
    <div className="flex h-(--size-list-item) items-center gap-3 rounded-card bg-surface px-3">
      <span className={`size-2 shrink-0 rounded-full ${statusColors[status]}`} />
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="truncate text-text-white">{title}</p>
        <small className="truncate text-text-secondary normal-case">{subtitle}</small>
      </div>
      {trailing}
    </div>
  )
}
