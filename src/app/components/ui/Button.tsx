type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger" | "outline"
  type?: "button" | "submit"
  onClick?: () => void
}

const variantStyles = {
  primary: "bg-brand-green text-white",
  secondary: "bg-surface text-text-secondary",
  danger: "bg-danger-red text-white",
  outline: "border-2 border-brand-green bg-transparent text-brand-green",
}

export function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-12.5 w-full rounded-button font-extrabold ${variantStyles[variant]}`}
    >
      {children}
    </button>
  )
}
