"use client";

type MembershipAccordionProps = {
  membership_pk: number;
  open: boolean;
};

const FEATURES = [
  "Skumforvask",
  "Aktiv shampoo",
  "Hjulvask",
  "Højtryksvask",
  "Børstevask",
  "Voks",
  "Tørring",
  "Højglans",
  "Undervognsvask",
  "Skumvask",
  "Affedtning",
  "Sæsonrens",
];

const INCLUDED_FEATURES: Record<number, string[]> = {
  1: [
    "Skumforvask",
    "Aktiv shampoo",
    "Hjulvask",
    "Højtryksvask",
    "Børstevask",
    "Voks",
    "Tørring",
  ],

  2: [
    "Skumforvask",
    "Aktiv shampoo",
    "Hjulvask",
    "Højtryksvask",
    "Børstevask",
    "Voks",
    "Tørring",
    "Højglans",
    "Undervognsvask",
  ],

  3: FEATURES,
};

export function MembershipAccordion({
  membership_pk,
  open,
}: MembershipAccordionProps) {
  const included = INCLUDED_FEATURES[membership_pk] ?? [];

  return (
    <div
      className={`grid transition-all duration-300 ${
        open
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className="mt-2 rounded-card border border-divider bg-surface p-6">
          <div className="grid grid-cols-2 gap-x-10 gap-y-4">
            {FEATURES.map((feature) => {
              const isIncluded = included.includes(feature);

              return (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`h-3 w-3 shrink-0 rounded-full ${
                      isIncluded
                        ? "bg-brand-green"
                        : "bg-text-muted"
                    }`}
                  />

                  <p
                    className={
                      isIncluded
                        ? "text-text-white"
                        : "text-text-muted"
                    }
                  >
                    {feature}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}