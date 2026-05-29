

export default function LocationCard() {
  return (
    <div className="flex h-(--size-list-item) items-center justify-between rounded-card bg-page px-4">
        <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-brand-green" />

            <p className="font-extrabold text-text-white">
            Wash World Lyngby
            </p>
        </div>

        <div className="rounded-pill bg-green-dim px-3 py-1">
            <small className="text-green-on-black">
            ~1.2 km
            </small>
        </div>
    </div>
  );
}