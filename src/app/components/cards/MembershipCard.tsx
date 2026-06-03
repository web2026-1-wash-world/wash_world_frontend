import { Card } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { MembershipCardProps } from "../../../types/membershipProps"



export function MembershipCard({ planName, price, isActive = true }: MembershipCardProps) {
  return (
    <Card variant="member">
      <div className="flex items-center h-5 justify-between mt-1">
        <div>
          <p className="text-green-on-black font-bold">
            {planName}
          </p>
          <small className="text-text-secondary font-light">{price}</small>
        </div>
        <Badge variant={isActive ? "active" : "locked"}>
          {isActive ? "Aktivt" : "Inaktivt"}
        </Badge>
      </div>
    </Card>
  )
}
