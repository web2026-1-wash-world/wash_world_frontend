"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TopNav } from "../components/ui/TopNav";
import { SectionHeader } from "../components/ui/SectionHeader";
import { MembershipCard } from "../components/cards/MembershipCard";
import { Button } from "../components/ui/Button";
import { HistoryCard } from "../components/cards/HistoryCard";
import CarsSection from "./CarsSection";
import AddCarForm from "./AddCarForm";
import { useUserMembership } from "../hooks/useMembership";

export default function ProfilePage() {
  const router = useRouter();
  const [showAddForm, setShowAddForm] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.replace("/login");
      return;
    }
    setToken(token);
  }, []);

  const { data: membership } = useUserMembership(token);

  return (
    <div className="flex flex-col h-screen bg-page">
      <TopNav />

      <div className="flex flex-col gap-4 pb-32">
        <div className="space-y-4">
          <SectionHeader>Dit abonnement</SectionHeader>
          <MembershipCard
            planName={membership?.name ?? "..."}
            price={membership ? `${membership.price_per_month} kr./md.` : ""}
            isActive={membership?.status === "active"}
          />
        </div>

        <div className="space-y-4">
          <SectionHeader>Dine biler</SectionHeader>
          <CarsSection />
          <Button
            variant="secondary"
            onClick={() => setShowAddForm((prev) => !prev)} 
          >{/* toggle - the toggle means the onClick does the opposite of the state. If open, onClick closes it and vice versa */}
            {showAddForm ? "Annuller" : "+ Tilføj bil"}
          </Button>
          {showAddForm && (
            <AddCarForm onSuccess={() => setShowAddForm(false)} />
          )}
        </div>

        <div className="space-y-4">
          <SectionHeader>Vaske historik</SectionHeader>
          <HistoryCard left="Herlev · I dag" right="Premium Plus" />
          <HistoryCard left="Brøndby · 3 dage siden" right="Premium Plus" />
          <HistoryCard left="Herlev · 1 uge siden" right="Premium Plus" />
          <div className="flex gap-3">
            <div className="flex-1">
              <Button variant="secondary">Rapporter problem</Button>
            </div>
            <div className="flex-1">
              <Link href="/plan-selection">
                <Button variant="outline">Skift abonnement</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
