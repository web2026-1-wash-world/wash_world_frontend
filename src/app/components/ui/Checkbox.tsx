type CheckboxProps = {
  name: string
  label: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Checkbox({ name, label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <p className="text-text-white">{label}</p>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="size-5 accent-brand-green"
      />
    </label>
  )
}
