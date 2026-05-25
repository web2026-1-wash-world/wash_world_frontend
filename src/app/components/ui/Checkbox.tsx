type CheckboxProps = {
  name: string
  label: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Checkbox({
  name,
  label,
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <p className="text-text-secondary text-sm">
        {label}
      </p>

      <div className="relative">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />

        <div
          className="
            size-4
            rounded-[4px]
            border-2
            border-text-secondary
            bg-transparent
            transition-colors
            peer-checked:bg-brand-green
            peer-checked:border-brand-green
          "
        />
      </div>
    </label>
  )
}