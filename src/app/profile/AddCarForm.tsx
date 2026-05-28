"use client";

import { useState } from "react";
import { useCars } from "../hooks/useCars";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

type FormState = {
    car_license_plate: string;
    car_brand: string;
    car_model: string;
};

const empty: FormState = { car_license_plate: "", car_brand: "", car_model: "" };

type AddCarFormProps = {
    onSuccess?: () => void;
};

export default function AddCarForm({ onSuccess }: AddCarFormProps) {
    const { createCar, isCreating } = useCars();
    const [form, setForm] = useState<FormState>(empty);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            await createCar(form);
            setForm(empty);
            onSuccess?.();
        } catch (err: any) {
            setError(err.error);
        }
    };

    return (
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold">Tilføj bil</h2>

            {error && <p className="text-red-600">{error}</p>}

            <Input placeholder="Nummerplade" name="car_license_plate" value={form.car_license_plate} onChange={handleChange} />
            <Input placeholder="Mærke" name="car_brand" value={form.car_brand} onChange={handleChange} />
            <Input placeholder="Model" name="car_model" value={form.car_model} onChange={handleChange} />

            <Button type="submit" disabled={isCreating}>
                {isCreating ? "Gemmer..." : "Tilføj bil"}
            </Button>
        </form>
    );
}
