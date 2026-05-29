"use client";
import { TopNav } from "../components/ui/TopNav";
import { HeroCard } from "../components/cards/HeroCard";
import { MiniCard } from "../components/cards/MiniCard";
import { XPCard } from "../components/cards/XPCard";
import { Button } from "../components/ui/Button";


import { useGetNearestLocation } from "../hooks/useAuth";
import Link from "next/link";

export default function pageDashboard() {
  const getLocation = useGetNearestLocation();
  const { data } = getLocation;
  const intial = localStorage.getItem("user");

  return (
    <div className="h-screen">
      <div className="flex flex-col gap-4 justify-center">
        <TopNav />
        <Link href="/plan-selection">
          <HeroCard
            eyebrow="Få ubegrænset bilvask"
            title="Vælg abonnement →"
            subtitle="Guld · Premium · Brilliant"
          ></HeroCard>
        </Link>
        <div className="flex flex-2 gap-2">
          <MiniCard
            caption="Nærmeste vaskehal"
            value={`${data?.[0]?.distance.toFixed(1) ?? "..."} km`}
            subtitle={data?.[0]?.name ?? "Finder adresse..."}
          ></MiniCard>
          <MiniCard
            caption="Ventetid"
            value="4 min"
            subtitle="Estimeret"
          ></MiniCard>
        </div>
        <small className="text-text-secondary">VASKEOVERBLIK</small>
        <XPCard
          title="Clean streak"
          washCount={7}
          currentXP={65}
          nextRewardXP={30}
        ></XPCard>
        <Link href="/">
          <Button variant="secondary">Se abonnementer</Button>
        </Link>
        <Link href="/">
          <Button>Start vask</Button>
        </Link>
      
      </div>
    </div>
  );
}
