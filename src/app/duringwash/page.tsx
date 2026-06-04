"use client"
import { useState } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { HeroCard } from "../components/cards/HeroCard"
import { Button } from "../components/ui/Button"
import emergencyStop from "../emergencystop/page"

export default function duringWash() {
    const router = useRouter();
    
    const [timer, setTimer] = useState(20)
    const [confirmEmergency, setConfirmEmergency] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
    if (timer === 0) {
        router.push("/washcomplete")
    }
}, [timer, router])

    function washState () {
        if (timer >= 16) {
            return <small className="text-(--color-text-secondary)">FORVASK</small>
        }
        if (timer >= 12) {
            return <small className="text-(--color-text-secondary)">BØRSTEVASK</small>
        }
        if (timer >= 8) {
            return <small className="text-(--color-text-secondary)">SKYLNING</small>
        }
        if (timer >= 4) {
            return <small className="text-(--color-text-secondary)">VOKSBEHANDLING</small>
        }
        return <small className="text-(--color-text-secondary)">TØRRING</small>
    }

        function progressBar() {
        if (timer >= 16) {
            return (
            <div className="col-start-1 row-start-1 flex gap-0.5 *:bg-(--color-green-on-black) *:h-1.5 *:w-full *:rounded-full">
                <span className="block"></span>
                <span className="invisible"></span>
                <span className="invisible"></span>
                <span className="invisible"></span>
                <span className="invisible"></span>
            </div>
            )
        }
        if (timer >= 12) {
            return (
            <div className="col-start-1 row-start-1 flex gap-0.5 *:bg-(--color-green-on-black) *:h-1.5 *:w-full *:rounded-full">
                <span className="block"></span>
                <span className="block"></span>
                <span className="invisible"></span>
                <span className="invisible"></span>
                <span className="invisible"></span>
            </div>
            )
        }
        if (timer >= 8) {
            return (
            <div className="col-start-1 row-start-1 flex gap-0.5 *:bg-(--color-green-on-black) *:h-1.5 *:w-full *:rounded-full">
                <span className="block"></span>
                <span className="block"></span>
                <span className="block"></span>
                <span className="invisible"></span>
                <span className="invisible"></span>
            </div>
            )
        }
        if (timer >= 4) {
            return (
            <div className="col-start-1 row-start-1 flex gap-0.5 *:bg-(--color-green-on-black) *:h-1.5 *:w-full *:rounded-full">
                <span className="block"></span>
                <span className="block"></span>
                <span className="block"></span>
                <span className="block"></span>
                <span className="invisible"></span>
            </div>
            )
        }
            return (
            <div className="col-start-1 row-start-1 flex gap-0.5 *:bg-(--color-green-on-black) *:h-1.5 *:w-full *:rounded-full">
                <span className="block"></span>
                <span className="block"></span>
                <span className="block"></span>
                <span className="block"></span>
                <span className="block"></span>
            </div>
            )
    }

    return (
        <section className="relative">
            <div className={`${confirmEmergency ? "blur-xl" : ""}`}>
                <div className="flex h-(--size-top-nav) items-center justify-between px-5">
                    <h3 className="text-brand-green">Wash World</h3>
                    <small className=" flex items-center gap-2 text-(--color-text-white)"><span className="text-2xl self-start">·</span>Live</small>
                </div>
            <div className="w-97.5 grid">
                <div className="col-start-1 row-start-1 flex gap-0.5 *:bg-(--color-surface) *:h-1.5 *:w-full *:rounded-full">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {progressBar()}
            </div>
            <div className="flex flex-col justify-center items-center m-4 gap-2">
                {washState()}

                <span className="text-7xl font-extrabold">{timer}</span>
                <p className="text-(--color-text-secondary)">Resterende tid</p>
            </div>
            <div className="text-center">
                <HeroCard
                planName="Igangværende vask"
                price=
                {timer >= 16
                ? "SKUM"
                : timer >= 12
                ? "UNDERVOGNSVASK"
                : timer >= 8
                ? "HOVEDVASK"
                : timer >= 4
                ? "VOKSBEHANDLING"
                : "TØRRING"}
                inactiveTitle=            
                {timer >= 16
                ? "Næste trin: UNDERVOGNSVASK"
                : timer >= 12
                ? "Næste trin: HOVEDVASK"
                : timer >= 8
                ? "Næste trin: VOKSBEHANDLING"
                : timer >= 4
                ? "Næste trin: TØRRING"
                : "Næste trin: FÆRDIG"}
                ></HeroCard>
            </div>
            <p className="text-(--color-text-secondary) my-6">BLIV VENLIGST I BILEN</p>
            <div className="flex flex-col gap-3">

                    <Button variant="danger"
                        onClick={() => setConfirmEmergency(true)}>
                        Nødstop
                    </Button>
            </div>
            </div>

                    {confirmEmergency ?
                        <div className="flex flex-col gap-4 rounded-xl bg-(--color-surface) p-6 absolute w-full top-1/4">
                            <h2>Nødstop aktiveres</h2>
                            <p>Er du sikker på, at du vil aktivere nødstop?</p>
                            <p>Bilvasken stoppes øjeblikkeligt, og programmet kan ikke genoptages. Brug kun nødstop ved fare eller hvis der opstår et problem under vasken.</p>
                            <div className="flex gap-3">
                                <Button
                                type="button"
                                onClick={() => router.push("/emergencystop")}
                                >
                                Bekræft
                                </Button>

                                <Button
                                type="button"
                                variant="danger"
                                onClick={()=> setConfirmEmergency(false)}
                                >
                                Afbryd
                                </Button>
                            </div>
                    </div>
                    : null}

        </section>
    )
}