type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger" | "outline"
  type?: "button" | "submit"
  onClick?: () => void
  disabled?: boolean
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
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`h-12.5 w-full rounded-button font-extrabold cursor-pointer ${variantStyles[variant]}`}
    >
      {children}
    </button>
  )
}
