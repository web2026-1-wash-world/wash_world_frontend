type CardProps = {
  children: React.ReactNode
  variant?: "default" | "darkGreen" | "outlined" | "member"
}

const variantStyles = {
  default: "bg-surface",
  darkGreen: "bg-green-dim",
  outlined: "bg-surface border border-divider",
  member: "bg-surface border border-divider border-green-on-black",
}

export function Card({ children, variant = "default" }: CardProps) {
  return (
    <div className={`rounded-card p-4 ${variantStyles[variant]}`}>
      {children}
    </div>
  )
}
