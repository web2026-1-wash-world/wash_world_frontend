"use client";

type Membership = {
  membership_pk: number;
  name: string;
  price_per_month: number;
};

type MembershipCardProps = {
  title: string;
  price: number;
  selected?: boolean;
  onClick?: () => void;
};

type MembershipSelectorProps = {
  memberships: Membership[];
  selectedMembershipId: number | null;
  setSelectedMembershipId: (id: number | null) => void;
};

const variantStyles = {
  active: "border-brand-green bg-green-dim text-brand-green",
  inactive: "border-divider bg-surface text-text-white",
};

function MembershipCard({
  title,
  price,
  selected = false,
  onClick,
}: MembershipCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-plan border px-4 py-3 text-left transition-all ${
        selected ? variantStyles.active : variantStyles.inactive
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2>{title}</h2>
          <p className="text-text-secondary">{price} kr./md.</p>
        </div>

        {title.toLowerCase() === "premium" ? (
          <div className="rounded-pill bg-brand-green px-3 py-1">
            <small className="text-white">Populært</small>
          </div>
        ) : (
          <div className="flex h-8 w-12 items-center justify-center rounded-full bg-elevated text-lg font-light text-text-primary">
            +
          </div>
        )}
      </div>
    </button>
  );
}

export function MembershipSelector({
  memberships,
  selectedMembershipId,
  setSelectedMembershipId,
}: MembershipSelectorProps) {
  return (
    <div className="space-y-4">
      {memberships.map((membership) => (
        <MembershipCard
          key={membership.membership_pk}
          title={
            membership.name.charAt(0).toUpperCase() +
            membership.name.slice(1)
          }
          price={membership.price_per_month}
          selected={selectedMembershipId === membership.membership_pk}
          onClick={() =>
            setSelectedMembershipId(
              selectedMembershipId === membership.membership_pk
                ? null
                : membership.membership_pk
            )
          }
        />
      ))}
    </div>
  );
}