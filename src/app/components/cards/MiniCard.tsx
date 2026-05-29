import { Card } from "@/app/components/ui/Card"

type MiniCardProps = {
  caption: string
  value: string
  subtitle: string
}

export function MiniCard({ caption, value, subtitle }: MiniCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-1 w-full">
        <small className="text-text-secondary">{caption}</small>
        <h1 className="text-text-white">{value}</h1>
        <p className="text-brand-green">{subtitle}</p>
      </div>
    </Card>
  )
}
