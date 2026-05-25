type HeroCardProps = {
  eyebrow: string
  title: string
  subtitle: string
}

export function HeroCard({ eyebrow, title, subtitle }: HeroCardProps) {
  return (
    <div className="bg-hero rounded-card p-4">
      <div className="flex flex-col gap-1 ">
        <small className="text-text-white normal-case">{eyebrow}</small>
        <h1 className="text-text-white">{title}</h1>
        <p className="text-text-secondary">{subtitle}</p>
      </div>
    </div>
  )
}
