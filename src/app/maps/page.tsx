"use client";

import { BottomNav } from "../components/ui/BottomNav";
import LocationCard from "../components/cards/LocationCard";
import { Button } from "../components/ui/Button";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/components/ui/Map"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div className="p-4">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Map />
      </div>
      <div>
        <p className="text-(--color-text-secondary) mt-3">NÆRMESTE LOKATIONER</p>
        <div className="flex flex-col gap-3 my-3">
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </div>
        <Button variant="primary">Gå til vask</Button>
      </div>
    </div>
  );
}