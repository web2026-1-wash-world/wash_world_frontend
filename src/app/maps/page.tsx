"use client";

import LocationCard from "../components/cards/LocationCard";
import { Button } from "../components/ui/Button";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/components/ui/Map"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div className="p-4">
        <small className="text-(--color-text-secondary) ">NÆRMESTE LOKATIONER</small>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl mt-3">
        <Map />
      </div>
      <div>
        <div className="flex flex-col gap-3 my-3">
        <small className="text-(--color-text-secondary) mt-3">NÆRMESTE LOKATIONER</small>
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </div>
        <Button variant="primary">Gå til vask</Button>
      </div>
    </div>
  );
}