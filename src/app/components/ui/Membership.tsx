"use client";

import { useState } from "react";
import { MembershipAccordion } from "./Accordion";

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
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {memberships.map((membership) => {
        const isSelected =
          selectedMembershipId === membership.membership_pk;

        const isOpen =
          openAccordionId === membership.membership_pk;

        return (
          <div key={membership.membership_pk}>
            <MembershipCard
              title={membership.name}
              price={membership.price_per_month}
              selected={isSelected}
              onClick={() => {
                setSelectedMembershipId(membership.membership_pk);

                setOpenAccordionId(
                  isOpen ? null : membership.membership_pk
                );
              }}
            />

            <MembershipAccordion
              membership_pk={membership.membership_pk}
              open={isOpen}
            />
          </div>
        );
      })}
    </div>
  );
}