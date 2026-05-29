"use client"


type MembershipCardProps = {
  title: string
  price: number
  selected?: boolean
  onClick?: () => void
}

type MembershipSelectorProps = {
  selectedMembershipId: number | null
  setSelectedMembershipId: (id: number | null) => void
} 

const variantStyles = {
  active: "border-brand-green bg-green-dim text-brand-green",
  inactive: "border-divider bg-surface text-text-white",
}


function MembershipCard({
  title,
  price,
  selected = false,
  onClick,
}: MembershipCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-plan border px-4 py-3 text-left transition-all ${selected ? variantStyles.active : variantStyles.inactive}`}>

      <div className="flex items-center justify-between">

        <div>
          <h2>{title}</h2>
          <p className="text-text-secondary">{price} kr./md.</p>
        </div>

        {title === "Premium" ? (
          <div className="rounded-pill bg-brand-green px-3 py-1">
            <small className="text-white">
              Populært
            </small>
          </div>
        ) : (
          <div className="flex w-12 h-8 items-center justify-center rounded-full bg-elevated text-text-primary text-lg font-light">
            +
          </div>
        )}

      </div>
    </button>
  )
}

export function MembershipSelector({
  selectedMembershipId,
  setSelectedMembershipId,
}: MembershipSelectorProps) {
  return (
    <div className="space-y-4">

      <MembershipCard
        title="Guld"
        price={139}
        selected={selectedMembershipId === 1}
        onClick={() =>
          setSelectedMembershipId(
            selectedMembershipId === 1 ? null : 1
          )
        }
      />

      <MembershipCard
        title="Premium"
        price={169}
        selected={selectedMembershipId === 2}
        onClick={() => setSelectedMembershipId(
          selectedMembershipId === 2 ? null : 2
        )}
      />

      <MembershipCard
        title="Brilliant"
        price={199}
        selected={selectedMembershipId === 3}
        onClick={() => setSelectedMembershipId(
          selectedMembershipId === 3 ? null : 3
        )}
      />

    </div>
  )
}