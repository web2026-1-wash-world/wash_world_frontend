import { MembershipCardProps } from "../../../types/membershipProps"

export function HeroCard({ planName, price, isActive }: MembershipCardProps) {
  return (
    <div className="bg-hero rounded-card p-4">
      <div className="flex flex-col gap-1 ">
        <small className="text-text-white normal-case">{planName}</small>
        <h1 className="text-text-white">{price}</h1>
        <p className="text-text-secondary">
          {isActive ? "Aktivt" : "Inaktivt"}</p>
      </div>
    </div>
  )
}
