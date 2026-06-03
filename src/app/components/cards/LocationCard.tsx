type LocationCardProps = {
  name: string;
  distance: number;
};

export default function LocationCard({
  name,
  distance,
}: LocationCardProps) {
  return (
    <div className="flex items-center justify-between rounded-card bg-page px-4 py-3">
      <div className="flex min-w-0 items-center gap-3">
        <span className="mt-1 size-2 shrink-0 self-start rounded-full bg-brand-green" />

        <p className="line-clamp-2 font-extrabold leading-tight text-text-white">
          {name}
        </p>
      </div>

      <div className="ml-3 flex w-20 shrink-0 justify-center rounded-pill bg-green-dim px-3 py-1">
        <small className="font-medium text-green-on-black">
          ~{distance.toFixed(1)} km
        </small>
      </div>
    </div>
  );
}