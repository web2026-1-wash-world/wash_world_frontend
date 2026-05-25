type SectionHeaderProps = {
  children: React.ReactNode
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return <small className="text-text-secondary">{children}</small>
}
