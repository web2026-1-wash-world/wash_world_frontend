import { Card } from "@/app/components/ui/Card"

type MiniCardProps = {
  caption: string
  value: string
  subtitle: string
}

export function MiniCard({ caption, value, subtitle }: MiniCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-1 w-40">
        <span className="text-caption text-text-secondary">{caption}</span>
        <h1 className="text-h1 text-text-white">{value}</h1>
        <span className="text-body text-brand-green">{subtitle}</span>
      </div>
    </Card>
  )
}
