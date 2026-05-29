"use client";

import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

type Station = {
  id: number;
  name: string;
  position: [number, number];
};

const customIcon = L.icon({
  iconUrl: "/images/wicon.svg",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, 0],
});

async function fetchStations(): Promise<Station[]> {
  console.log(baseUrl);
  const res = await fetch(baseUrl + "/stations");
  return res.json();
}

export default function Map() {
  const {
    data: locations = [],
  } = useQuery({
    queryKey: ["stations"],
    queryFn: fetchStations,
  });

  return (
    <MapContainer
      center={[55.2, 12]}
      zoom={8}
      scrollWheelZoom={true}
      zoomControl={false}
      className="h-screen w-full"
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_toner_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://www.stamen.com/">Stamen Design</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        minZoom={0}
        maxZoom={20}
      />

      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
          icon={customIcon}
        >
          <Popup
            className="custom-popup"
            closeButton={false}
            offset={[0, -10]}
          >
            <div className="px-1 py-1 text-sm font-medium text-[var(--color-brand-green)]">
              {location.name}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}