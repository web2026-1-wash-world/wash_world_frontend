type InputProps = {
  type?: "text" | "email" | "password" | "number"
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="h-12.5 w-full rounded-button bg-white text-[14px] font-light leading-[1.4] text-white px-2 placeholder:text-text-muted"
    />
  )
}
