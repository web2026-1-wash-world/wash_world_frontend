type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger" | "outline" | "disabled"
  type?: "button" | "submit"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const variantStyles = {
  primary: "bg-brand-green text-white",
  secondary: "bg-surface text-text-secondary",
  danger: "bg-danger-red text-white",
  outline: "border-2 border-brand-green bg-transparent text-brand-green",
  disabled: "bg-surface text-text-muted opacity-60 cursor-not-allowed"
}

export function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`h-12 w-full rounded-button font-extrabold ${variantStyles[variant]}`}
    >
      {children}
    </button>
  )
}
