"use client";

import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { MiniCard } from "../../components/cards/MiniCard";
import { Checkbox } from "@/app/components/ui/Checkbox";

import { useState } from "react";
import { HistoryCard } from "@/app/components/cards/HistoryCard";
import { XPCard } from "@/app/components/cards/XPCard";
import { Badge } from "@/app/components/ui/Badge";
import { Avatar } from "@/app/components/ui/Avatar";
import { TopNav } from "@/app/components/ui/TopNav";
import { BottomNav } from "@/app/components/ui/BottomNav";
import { HeroCard } from "@/app/components/cards/HeroCard";
import { TrophyCard } from "@/app/components/cards/TrophyCard";

function TestPage() {
  const [firstName, setFirstName] = useState("");

  return (
    <div className="w-98.25">
      <div className="py-10">
        <h1 className="text-display">Components</h1>
      </div>
      <div className="py-5">
        <Button
          variant="primary"
          type="submit"
          onClick={() => console.log("klikket")}
        >
          Start vask ➜
        </Button>
      </div>
      <div className="py-5">
        <Input
          type="text"
          name="user_first_name"
          placeholder="Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="py-5 flex justify-between">
        <MiniCard
          caption="Nærmeste vaskehal"
          value="1.2 km"
          subtitle="Lyngby · Åben"
        />
        <MiniCard caption="Venteitd" value="0 min" subtitle="Estimeret" />
      </div>
      <div className="py-5">
        <Checkbox name="remember_me" label="Husk mig" />
      </div>
      <div className="py-5">
        <HistoryCard left="Herlev - I dag" right="Premium Plus" />
      </div>
      <div className="py-5">
        <XPCard
          title="Clean Streak"
          washCount={7}
          currentXP={65}
          nextRewardXP={35}
        />
      </div>
      <div className="py-5">
        <Badge variant="active">Active</Badge>
        <Badge variant="subtle">Subtle</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="locked">Locked</Badge>
      </div>
      <div className="py-5">
        <Avatar initial="W" />
      </div>
      <div className="py-5">
        <TopNav initial="W" />
        <TopNav title="Vælg dit abonnement" variant="centered"/>
      </div>
      <div className="py-5">
        <BottomNav />
      </div>
      <div className="py-5">
        <HeroCard
          eyebrow="Få ubegrænset bilvask"
          title="Vælg abonnement →"
          subtitle="Guld · Premium · Brilliant"
        />
      </div>
      <div className="py-5">
        <HeroCard
          eyebrow="Ubegrænset bilvask"
          title="Premium"
          subtitle="AB 12 345 · Aktiv"
        />
      </div>
      <div className="py-5">
        <TrophyCard title="Kom i gang" description="Download Wash World app'en og tilmeld dig"/>
      </div>
    </div>
  );
}

export default TestPage;
