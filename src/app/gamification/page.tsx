"use client"

import { TopNav } from "../components/ui/TopNav"
import { XPCard } from "../components/cards/XPCard"
import { TrophyCard } from "../components/cards/TrophyCard"
import { Button } from "../components/ui/Button"
import { useState } from "react"

export default function Gamification () {

    const [claimed, setClaimed] = useState(false)
    const trophyLocked = false

    return (
        <section>
        <div className={`flex flex-col gap-2 ${claimed ? "blur-xl" : ""}`}>
            <XPCard
                title="Clean streak"
                washCount={7}
                currentXP={65}
                nextRewardXP={30}
            >
                
            </XPCard>
            <h2>Standard</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 ">
                <TrophyCard
                title = "Kom i gang"
                description= "Download Wash World app’en og tilmed dig"
                locked = {trophyLocked}
                onClick={() => setClaimed(true)}
                />
                <TrophyCard
                title = "Din første vask"
                description= "Køb en standard vask"
                locked = {true}
                />
                <TrophyCard
                title = "5x Vask"
                description= "Kompletér dine første 5 vask"
                locked = {true}
                />
                <TrophyCard
                title = "Fjerde trofæ"
                description= "Optjen 100 XP"
                locked = {true}
                />
            </div>
            <h2>Brilliant</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 ">
                <TrophyCard
                title = "Opgradering"
                description= "Opgrader dit abonnement til Brilliant"
                locked = {true}
                onClick={() => setClaimed(true)}
                />
                <TrophyCard
                title = "Din første vask"
                description= "Køb en standard vask"
                locked = {true}
                />
            </div>

            </div>

            {claimed && !trophyLocked ? (
                <div className="absolute top-1/3 bg-surface rounded-xl p-4 text-center flex flex-col gap-4 shadow-2xl max-w-97.5">
                    <h2>Du har opnået en gratis vask!</h2>
                    <p>Næste gang du vasker din bil i en af vores vaskehaller er det gratis</p>
                    <Button onClick={() => setClaimed(false)}>Modtag belønning</Button>
                </div>
            ) : null}
            </section>
    )
}