type SectionHeaderProps = {
  children: React.ReactNode;
};

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="mb-1">
      <small className="text-text-secondary">{children}</small>
    </div>
  );
}
