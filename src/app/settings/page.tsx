"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuArrowLeft, LuUser, LuCreditCard, LuGlobe, LuBell } from "react-icons/lu";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { SettingsRow } from "@/app/components/ui/SettingsRow";

export default function SettingsPage() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-page px-5">
      <header className="relative flex h-(--size-top-nav) items-center justify-center mt-4">
        <button
          onClick={() => router.back()}
          className="absolute left-0 flex items-center gap-1 text-brand-green font-extrabold"
        >
          <LuArrowLeft className="size-4" />
          <span className="text-sm">Tilbage</span>
        </button>
        <h2 className="text-text-white">Indstillinger</h2>
      </header>

      <div className="flex flex-col gap-6 py-6">
        <div className="flex flex-col gap-3">
          <SectionHeader>Profil</SectionHeader>
          <SettingsRow
            icon={<LuUser />}
            title="Oplysninger"
            subtitle="Lav ændringer i dine informationer"
          />
        </div>

        <div className="flex flex-col gap-3">
          <SectionHeader>Abonnement</SectionHeader>
          {/* TODO: replace planName with data from membership API */}
          <SettingsRow
            icon={<LuCreditCard />}
            title="Indlæser abonnement..."
            subtitle="Skift abonnement"
          />
        </div>

        <div className="flex flex-col gap-3">
          <SectionHeader>Sprog</SectionHeader>
          <SettingsRow
            icon={<LuGlobe />}
            title="Skift sprog"
            subtitle="Nuværende: Dansk"
          />
        </div>

        <div className="flex flex-col gap-3">
          <SectionHeader>Notifikationer</SectionHeader>
          <SettingsRow
            icon={<LuBell />}
            title="Indstil påmindelser"
            subtitle="Nuværende: Hver 14. dag"
          />
        </div>
      </div>
    </div>
  );
}
