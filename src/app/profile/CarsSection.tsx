"use client";

import { useCars } from "../hooks/useCars";
import { ListItem } from "../components/ui/ListItem";
import { Button } from "../components/ui/Button";

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
                        <Button
                            variant="delete"
                            onClick={() => deleteCar(car.car_pk)}
                        >
                            Slet
                        </Button>
                    }
                />
            ))}
        </div>
    );
}
