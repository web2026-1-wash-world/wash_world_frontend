import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({
  type = "text",
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      required
      className={`h-10.5 w-full rounded-button bg-white text-[14px] font-light leading-[1.4] text-black px-3 placeholder:text-text-muted ${className}`}
      {...props}
    />
  );
}