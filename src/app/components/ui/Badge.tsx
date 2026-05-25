type BadgeProps = {
  children: React.ReactNode
  variant?: "active" | "subtle" | "warning" | "locked"
}

const variantStyles = {
  active: "bg-brand-green text-page",
  subtle: "bg-green-dim text-brand-green",
  warning: "bg-splash-orange text-text-white",
  locked: "bg-elevated text-text-secondary",
}

export function Badge({ children, variant = "active" }: BadgeProps) {
  return (
    <small
      className={`inline-flex h-5 items-center rounded-pill px-2.5 font-extrabold ${variantStyles[variant]}`}
    >
      {children}
    </small>
  )
}
