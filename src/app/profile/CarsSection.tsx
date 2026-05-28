"use client";

import { useCars } from "../hooks/useCars";
import { ListItem } from "../components/ui/ListItem";

export default function CarsSection() {
    const { cars, isLoading, deleteCar } = useCars();

    if (isLoading) return <p>Henter biler...</p>;

    return (
        <div className="flex flex-col gap-2">
            {cars.map(car => (
                <ListItem
                    key={car.car_pk}
                    title={`${car.car_brand} ${car.car_model}`}
                    subtitle={car.car_license_plate}
                    trailing={
                        <button
                            onClick={() => deleteCar(car.car_pk)}
                            className="text-danger-red text-sm font-bold shrink-0"
                        >
                            Slet
                        </button>
                    }
                />
            ))}
        </div>
    );
}
