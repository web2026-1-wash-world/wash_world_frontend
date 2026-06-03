"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuUser, LuCreditCard, LuGlobe, LuBell, LuLogOut } from "react-icons/lu";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { SettingsRow } from "@/app/components/ui/SettingsRow";
import { BackButton } from "@/app/components/ui/BackButton";

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
        <BackButton className="absolute left-0" />
        <h2 className="text-text-white">Indstillinger</h2>
      </header>

      <div className="flex flex-col gap-4 py-2">
        <div className="flex flex-col">
          <SectionHeader>Profil</SectionHeader>
          <SettingsRow
            icon={<LuUser />}
            title="Oplysninger"
            subtitle="Lav ændringer i dine informationer"
          />
        </div>

        <div className="flex flex-col gap-1">
          <SectionHeader>Abonnement</SectionHeader>
          {/* TODO: replace planName with data from membership API */}
          <SettingsRow
            icon={<LuCreditCard />}
            title="Indlæser abonnement..."
            subtitle="Skift abonnement"
          />
        </div>

        <div className="flex flex-col gap-1">
          <SectionHeader>Sprog</SectionHeader>
          <SettingsRow
            icon={<LuGlobe />}
            title="Skift sprog"
            subtitle="Nuværende: Dansk"
          />
        </div>

        <div className="flex flex-col gap-1">
          <SectionHeader>Notifikationer</SectionHeader>
          <SettingsRow
            icon={<LuBell />}
            title="Indstil påmindelser"
            subtitle="Nuværende: Hver 14. dag"
          />
        </div>

        <div className="flex flex-col justify-end gap-1">
          <SectionHeader>Konto</SectionHeader>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("access_token");
              localStorage.removeItem("user");
              router.push("/login");
            }}
            className="text-left"
          >
            <SettingsRow
              icon={<LuLogOut />}
              title="Log ud"
              subtitle="Afslut din session"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
