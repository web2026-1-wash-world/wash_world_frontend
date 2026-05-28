"use client"
import { HeroCard } from "../components/cards/HeroCard"
import { Button } from "../components/ui/Button"

import { useGetNearestLocation } from "../hooks/useAuth"

export default function pageDashboard () {
    const getLocation = useGetNearestLocation()
    const { data } = getLocation;


    return (
        <div>
            <HeroCard
            eyebrow="Nærmeste vaskehal"
            title={data?.[0]?.name ?? "Henter nærmeste vaskehal..."}
            subtitle="Guld · Premium · Brilliant"
            >
            </HeroCard>
            <Button>
                Start vask
            </Button>
        </div>
    )
}