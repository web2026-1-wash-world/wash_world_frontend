"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "../../types/user";
import { TopNav } from "../components/ui/TopNav";
import { BottomNav } from "../components/ui/BottomNav";
import { SectionHeader } from "../components/ui/SectionHeader";
import { MembershipCard } from "../components/cards/MembershipCard";
import { Button } from "../components/ui/Button";
import { HistoryCard } from "../components/cards/HistoryCard";
import CarsSection from "./CarsSection";
import AddCarForm from "./AddCarForm";

export default function ProfilePage() {
  const router = useRouter();
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-page">
      <TopNav />

      <div className="flex-1 px-5 flex flex-col gap-4 py-4 pb-32">
        <SectionHeader>Dit abonnement</SectionHeader>
        <MembershipCard
          planName="Premium"
          price="169 kr./md."
          isActive={true}
        />
        <div className="space-y-4">
          <SectionHeader>Dine biler</SectionHeader>
          <CarsSection />
          <Button variant="secondary" onClick={() => setShowAddForm((prev) => !prev)}>
            {showAddForm ? "Annuller" : "+ Tilføj bil"}
          </Button>
          {showAddForm && (
            <AddCarForm onSuccess={() => setShowAddForm(false)} />
          )}
        </div>
        <SectionHeader>Vaske historik</SectionHeader>
        <HistoryCard left="Herlev · I dag" right="Premium Plus" />
        <HistoryCard left="Brøndby · 3 dage siden" right="Premium Plus" />
        <HistoryCard left="Herlev · 1 uge siden" right="Premium Plus" />
        <div className="flex gap-3">
          <div className="flex-1">
            <Button variant="secondary">Rapporter problem</Button>
          </div>
          <div className="flex-1">
            <Button variant="outline">Opgrader vask</Button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
