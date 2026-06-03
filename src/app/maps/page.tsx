"use client";

import LocationCard from "../components/cards/LocationCard";
import { useGetNearestLocation } from "../hooks/useAuth";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/components/ui/Map"), {
  ssr: false,
});

export default function MapPage() {
  const { data: locations, isLoading, error } =
    useGetNearestLocation();

  return (
    <div>
      <div className="mt-3 aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Map />
      </div>

      <div className="my-3 flex flex-col gap-3">
        <small className="mt-3 text-(--color-text-secondary)">
          NÆRMESTE LOKATIONER
        </small>

        {isLoading && (
          <p className="text-sm text-(--color-text-secondary)">
            Henter lokationer...
          </p>
        )}

        {error && (
          <p className="text-sm text-red-500">
            Kunne ikke hente lokationer
          </p>
        )}

        {locations
          ?.slice(0, 5)
          .map((location) => (
            <LocationCard
              key={location.station_pk}
              name={location.name}
              distance={location.distance}
            />
          ))}
      </div>
    </div>
  );
}