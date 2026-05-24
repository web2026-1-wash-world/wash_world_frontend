import { Card } from "@/app/components/ui/Card"
import { ProgressBar } from "@/app/components/ui/ProgressBar"

type XPCardProps = {
  title: string
  washCount: number
  currentXP: number
  nextRewardXP: number
}

export function XPCard({ title, washCount, currentXP, nextRewardXP }: XPCardProps) {
  const xpToNext = nextRewardXP - currentXP

  return (
    <Card variant="darkGreen">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <h3 className="text-text-white">{title}</h3>
          <p className="text-brand-green">{washCount} vaske</p>
        </div>
        <ProgressBar />
        <p className="text-[11px] text-text-secondary">
          {currentXP} XP · {xpToNext} XP til næste belønning
        </p>
      </div>
    </Card>
  )
}
