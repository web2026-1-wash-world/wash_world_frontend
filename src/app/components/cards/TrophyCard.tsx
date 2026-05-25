import { LuTrophy, LuLock } from "react-icons/lu"
import { Card } from "@/app/components/ui/Card"
import { Button } from "@/app/components/ui/Button"

type TrophyCardProps = {
  title: string
  description: string
  locked?: boolean
}

export function TrophyCard({ title, description, locked = false }: TrophyCardProps) {
  return (
    <Card>
      <div className="flex flex-col items-center gap-2 text-center">
        {locked ? (
          <LuLock className="size-8 text-text-muted" />
        ) : (
          <LuTrophy className="size-8 text-splash-orange" />
        )}
        <h3 className={locked ? "text-text-muted" : "text-text-white"}>{title}</h3>
        <p className="text-text-secondary">{description}</p>
        {!locked && <Button variant="primary">Claim Reward</Button>}
      </div>
    </Card>
  )
}
