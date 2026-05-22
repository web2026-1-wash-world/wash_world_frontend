// Unused for now — forms rely on placeholder text instead of labels.
// Kept for future use (e.g. membership tier labels).
// To use: pass the same string to Label's `htmlFor` and the target Input's `id` —
// that pairs them so clicking the label focuses the input.
type LabelProps = {
  htmlFor: string
  children: React.ReactNode
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-caption text-text-secondary"
    >
      {children}
    </label>
  )
}
