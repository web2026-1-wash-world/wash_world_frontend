"use client";

import { Button } from "../components/ui/Button";
import { MembershipSelector } from "../components/ui/Membership";
import {
  useSubscribe,
  useUserMembership,
  useCancelMembership,
  useMemberships,
} from "../hooks/useMembership";
import { useState, useEffect } from "react";
import { TopNav } from "../components/ui/TopNav";
import { BackButton } from "../components/ui/BackButton";
import { useRouter } from "next/navigation";

export default function PlanSelectionPage() {
  // Router
  const router = useRouter();

  // Local state
  const [token, setToken] = useState("");
  const [selectedMembershipId, setSelectedMembershipId] = useState<
    number | null
  >(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Data hooks
  const membership = useUserMembership(token);
  const memberships = useMemberships(token);

  // Mutations
  const subscribe = useSubscribe(token);
  const cancelMembership = useCancelMembership(token);

  // Derived state
  const currentMembershipId = membership.data?.membership_pk;

  const selectedMembership = memberships.data?.find(
    (membership) => membership.membership_pk === selectedMembershipId,
  );

  const isCurrentPlan = currentMembershipId === selectedMembershipId;

  // Effects
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.replace("/login");
      return;
    }
    setToken(token);
  }, []);

  // Preselect the user's current membership when membership data is loaded
  useEffect(() => {
    // Check if:
    // 1. The user already has a membership (currentMembershipId exists)
    // 2. No membership has been selected yet
    if (currentMembershipId && selectedMembershipId === null) {
      // Set the currently active membership as the selected option
      setSelectedMembershipId(currentMembershipId);
    }
  }, [currentMembershipId, selectedMembershipId]); // Re-run this effect whenever either value changes

  // Event handlers
  function handleActivate() {
    if (!selectedMembershipId) return;

    subscribe.mutate(
      {
        membership_id: selectedMembershipId,
      },
      {
        onSuccess: () => {
          membership.refetch();
        },
      },
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <TopNav />
      <div>
        <BackButton />
      </div>
      <p className="text-text-secondary">
        Vælg det medlemskab der passer til dine behov
      </p>
      <MembershipSelector
        memberships={memberships.data ?? []}
        selectedMembershipId={selectedMembershipId}
        setSelectedMembershipId={setSelectedMembershipId}
      />
      <div className="px-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-brand-green">✦</span>
          <h3 className="text-brand-green">Anbefalet til dig</h3>
        </div>
        <p className="mt-1 text-text-secondary">
          Baseret på 1 bil, moderat brug → Premium
        </p>
      </div>
      <Button
        variant={
          !selectedMembershipId
            ? "disabled"
            : isCurrentPlan
              ? "informative"
              : "primary"
        }
        onClick={isCurrentPlan ? undefined : handleActivate}
      >
        {!selectedMembershipId
          ? "Vælg et medlemskab for at fortsætte"
          : isCurrentPlan
            ? `Din nuværende plan er ${selectedMembership?.name}`
            : !currentMembershipId
              ? `Aktivér ${selectedMembership?.name}`
              : selectedMembershipId > currentMembershipId
                ? `Opgradér til ${selectedMembership?.name}`
                : `Nedgradér til ${selectedMembership?.name}`}
      </Button>
      {currentMembershipId && (
        <Button variant="danger" onClick={() => setShowCancelModal(true)}>
          Opsig dit abonnement
        </Button>
      )}

      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5">
          <div className="w-full max-w-sm rounded-card border border-divider bg-surface p-5">
            <h2>Opsig abonnement</h2>

            <p className="mt-2 text-text-secondary">
              Er du sikker på, at du vil opsige dit abonnement? Denne handling
              kan ikke fortrydes, og du vil miste adgangen til dine fordele ved
              udgangen af din nuværende abonnementsperiode.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                variant="primary"
                onClick={() => setShowCancelModal(false)}
              >
                Behold abonnement
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  setShowCancelModal(false);

                cancelMembership.mutate(undefined, {
                  onSuccess: () => {
                    membership.refetch();
                    setSelectedMembershipId(null);
                  },
                });
              }}
            >
              Ja, opsig
            </Button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
