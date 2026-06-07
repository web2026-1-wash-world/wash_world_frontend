"use client";

import { useState } from "react";
import { useCars } from "../hooks/useCars";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

type AddCarFormProps = {
  onSuccess?: () => void;
};

export default function AddCarForm({ onSuccess }: AddCarFormProps) {
  const { createCar, isCreating } = useCars();
  const [licensePlate, setLicensePlate] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); /* PRevents browser from reloading on submit (us losing the data weøve submitted) */
    createCar(
      { car_license_plate: licensePlate, car_brand: brand, car_model: model },
      {
        onSuccess: () => {
          setLicensePlate("");
          setBrand("");
          setModel("");
          onSuccess?.();
        },
        onError: (err: any) => {
          setError(err.error);
        },
      },
    );
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold">Tilføj bil</h2>

      {error && <p className="text-red-600">{error}</p>}

      <Input
        placeholder="Nummerplade"
        name="car_license_plate"
        value={licensePlate}
        onChange={(e) => setLicensePlate(e.target.value)}
      />
      <Input
        placeholder="Mærke"
        name="car_brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <Input
        placeholder="Model"
        name="car_model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />

      <Button type="submit" disabled={isCreating}>
        {isCreating ? "Gemmer..." : "Tilføj bil"}
      </Button>
    </form>
  );
}
