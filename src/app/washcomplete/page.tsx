import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import { Card } from "../components/ui/Card";
import { XPCard } from "../components/cards/XPCard";
import { Button } from "../components/ui/Button"
import Link from "next/link"

export default function washComplete() {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <IoCheckmarkCircleSharp
            className="text-6xl fill-(--color-green-on-black)"
            />
            <h1>Vasken er færdig</h1>
            <p className="text-(--color-text-secondary)">Herlev  · I dag 14:32 </p>
            <Card>
                <div className="w-full justify-center flex items-center">
                    <p className="text-(--color-text-secondary)">Bedøm din vask</p>
                </div>
                <div className="flex justify-between text-4xl px-8 py-2">
                <FaStar
                    className="fill-(--color-brand-green)"
                    />
                    <FaStar
                    className="fill-(--color-brand-green)"
                    />
                    <FaStar
                    className="fill-(--color-brand-green)"
                    />
                    <FaStar
                    className="fill-(--color-brand-green)"
                    />
                    <FaStar
                    className="fill-(--color-brand-green)"
                />
                </div>
            </Card>
            <Link href="/gamification" className="w-full">
                <XPCard
                    title="Clean streak"
                    washCount={7}
                    currentXP={65}
                    nextRewardXP={30}
                >
            </XPCard>
            </Link>
            <Link href="/problem"
            className="w-full">
            <Button
            variant="secondary"
            >
                Rapporter et problem
            </Button>
            </Link>
            <Link href="/dashboard"
            className="w-full">
                <Button>
                    Færdig
                </Button>
            </Link>
        </div>
    )
}