"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TopNav } from "../components/ui/TopNav";
import { MembershipCard } from "../components/cards/MembershipCard";
import { ListItem } from "../components/ui/ListItem";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { SectionHeader } from "../components/ui/SectionHeader";
import { useGetNearestLocation } from "../hooks/useAuth";
import { useUserMembership } from "../hooks/useMembership";

export default function WashPage() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("access_token") ?? "");
  }, []);

  const { data: membership } = useUserMembership(token);
  const { data: stations } = useGetNearestLocation();
  const [selectedStation, setSelectedStation] = useState<number>(0);
  const [hallPicked, setHallPicked] = useState(false);

  const selectedName = stations?.[selectedStation]?.name ?? "Wash World";

  return (
    <div className="flex flex-col gap-4">
      <TopNav />

      <SectionHeader>DIN VASK</SectionHeader>
      <MembershipCard
        planName={membership?.name ?? "..."}
        price={membership ? `${membership.price_per_month} kr./md.` : ""}
        isActive={membership?.status === "active"}
      />

      <SectionHeader>VÆLG LOKATION</SectionHeader>
      <div className="flex flex-col gap-2">
        {stations?.map((station, i) => (
          <button key={station.station_pk} onClick={() => setSelectedStation(i)} className="w-full text-left">
            <div className={`rounded-card border ${i === selectedStation ? "border-brand-green" : "border-transparent"}`}>
              <ListItem
                title={station.name}
                subtitle=""
                status="open"
                trailing={
                  <Badge variant="subtle">~{station.distance.toFixed(1)} km</Badge>
                }
              />
            </div>
          </button>
        ))}
      </div>

      <SectionHeader>VÆLG HAL</SectionHeader>
      <div className="flex flex-col gap-2">
        <div className="rounded-card border border-splash-orange opacity-60 cursor-not-allowed">
          <ListItem
            title={`${selectedName} – Hal 1`}
            subtitle="Ventetid:"
            status="busy"
            trailing={<Badge variant="warning">~7 min</Badge>}
          />
        </div>

        <button onClick={() => setHallPicked(true)} className="w-full text-left">
          <div className={`rounded-card border ${hallPicked ? "border-brand-green" : "border-transparent"}`}>
            <ListItem
              title={`${selectedName} – Hal 2`}
              subtitle="Ventetid:"
              status="open"
              trailing={<Badge variant="subtle">~0 min</Badge>}
            />
          </div>
        </button>

        <div className="rounded-card border border-splash-orange opacity-60 cursor-not-allowed">
          <ListItem
            title={`${selectedName} – Hal 3`}
            subtitle="Ventetid:"
            status="busy"
            trailing={<Badge variant="warning">~13 min</Badge>}
          />
        </div>
      </div>

      <Link href="/duringwash" className={`w-full ${!hallPicked ? "pointer-events-none opacity-40" : ""}`}>
        <Button>Start vask →</Button>
      </Link>
      <Button variant="secondary">Kundesupport</Button>
    </div>
  );
}
