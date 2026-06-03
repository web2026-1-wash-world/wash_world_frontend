"use client";

import { Button } from "../components/ui/Button";
import { BottomNav } from "../components/ui/BottomNav";
import { MembershipSelector } from "../components/ui/Membership";
import {useSubscribe, useUserMembership, useCancelMembership,} from "../hooks/useMembership";
import { useState, useEffect } from "react";


export default function PlanSelectionPage() {

    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("access_token") ?? "");
    }, []);

    const [selectedMembershipId, setSelectedMembershipId] = useState<number | null>(null);
    const membership = useUserMembership(token);

    const currentMembershipId = membership.data?.membership_pk;

    useEffect(() => {
        if (
            currentMembershipId &&
            selectedMembershipId === null
        ) {
            setSelectedMembershipId(currentMembershipId);
        }
    }, [currentMembershipId]);

    const membershipNames: Record<number, string> = {
        1: "Guld",
        2: "Premium",
        3: "Brilliant",
    }

    const subscribe = useSubscribe(token);

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
            }
        );
    }

    const cancelMembership = useCancelMembership(token);

    function handleCancelMembership() {
        cancelMembership.mutate(undefined, {
            onSuccess: () => {
                membership.refetch();
                setSelectedMembershipId(null);
            },
        });
    }

    const isCurrentPlan =
    currentMembershipId === selectedMembershipId;

    console.log("data", membership.data);
    console.log("error", membership.error);
    console.log("status", membership.status);

    return (
        <div className="flex flex-col space-y-4">
            <div className="mb-8 flex items-center gap-8">
                <button className="text-brand-green">
                    ← Tilbage
                </button>
                <h1>Vælg dit abonnement</h1>
            </div>
            <p className="text-text-secondary">Vælg det medlemskab der passer til dine behov</p>
            <MembershipSelector 
                selectedMembershipId={selectedMembershipId}
                setSelectedMembershipId={setSelectedMembershipId}
            />
            <Button variant="secondary">Læs mere om vaskeprogrammer</Button>
            <div className="px-4">
            <div className="flex items-center gap-2">
                <span className="text-sm text-brand-green">✦</span>
                <h3 className="text-brand-green">Anbefalet til dig</h3>
            </div>
                <p className="mt-1 text-text-secondary">Baseret på 1 bil, moderat brug → Premium</p>
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
                        ? `Din nuværende plan er ${membershipNames[selectedMembershipId]}`
                        : !currentMembershipId
                            ? `Aktivér ${membershipNames[selectedMembershipId]}`
                            : selectedMembershipId > currentMembershipId
                                ? `Opgradér til ${membershipNames[selectedMembershipId]}`
                                : `Nedgradér til ${membershipNames[selectedMembershipId]}`}
            </Button>
            {currentMembershipId && (
            <Button
                variant="danger"
                onClick={handleCancelMembership}>
                Afmeld dit abonnement
            </Button>
            )}
        </div>
    );
}