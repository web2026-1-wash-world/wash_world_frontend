import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "outline"
    | "disabled"
    | "informative"
    | "delete";
};

const variantStyles = {
  primary: "bg-brand-green text-white",
  secondary: "bg-surface text-text-secondary",
  danger: "bg-danger-red text-white",
  outline: "border-2 border-brand-green bg-transparent text-brand-green",
  disabled: "bg-surface text-text-muted opacity-60 cursor-not-allowed",
  informative: "bg-green-dim text-white",
  delete: "bg-danger-red text-white h-auto w-auto px-3 py-1 text-sm",
};

export function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  ...props
}: ButtonProps) {
  const sizeClass =
    variant === "delete"
      ? ""
      : "h-12 w-full";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-button font-extrabold cursor-pointer ${sizeClass} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}