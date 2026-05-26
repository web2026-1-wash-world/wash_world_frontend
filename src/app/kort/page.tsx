"use client";

import { BottomNav } from "../components/ui/BottomNav";
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
      <BottomNav />
    </div>
  );
}