type CardProps = {
  children: React.ReactNode
  variant?: "default" | "darkGreen" | "outlined"
}

const variantStyles = {
  default: "bg-bg-card",
  darkGreen: "bg-green-dim",
  outlined: "bg-bg-card border border-divider",
}

export function Card({ children, variant = "default" }: CardProps) {
  return (
    <div className={`rounded-card p-4 ${variantStyles[variant]}`}>
      {children}
    </div>
  )
}
