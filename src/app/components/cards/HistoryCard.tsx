import { Card } from "@/app/components/ui/Card"

type HistoryCardProps = {
  left: string
  right: string
}

export function HistoryCard({ left, right }: HistoryCardProps) {
  return (
    <Card variant="outlined">
      <div className="flex items-center justify-between">
        <p className="text-text-secondary">{left}</p>
        <p className="text-brand-green">{right}</p>
      </div>
    </Card>
  )
}
