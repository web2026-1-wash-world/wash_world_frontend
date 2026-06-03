type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger" | "outline" | "disabled" | "informative" | "delete"
  type?: "button" | "submit"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const variantStyles = {
  primary: "bg-brand-green text-white",
  secondary: "bg-surface text-text-secondary",
  danger: "bg-danger-red text-white",
  outline: "border-2 border-brand-green bg-transparent text-brand-green",
  disabled: "bg-surface text-text-muted opacity-60 cursor-not-allowed",
  informative: "bg-green-dim text-white",
  "delete": "bg-danger-red text-white h-auto w-auto px-3 py-1 text-sm",
}

export function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const sizeClass = variant === "delete" ? "" : "h-12 w-full";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-button font-extrabold cursor-pointer ${sizeClass} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  )
}
