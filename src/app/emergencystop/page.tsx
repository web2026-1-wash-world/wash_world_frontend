import { Button } from "../components/ui/Button"
import Link from "next/link"

export default function emergencyStop (){
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-center">NØDSTOP</h1>
            <p>Bevar roen og forbliv i bilen, indtil du modtager yderligere instruktioner.</p>
            <p>Har du brug for hjælp? Kontakt kundesupport.</p>
            <Link href="tel:+4522629386">
                <Button
                variant="secondary">
                    Kundesupport
                </Button>
            </Link>
        </div>
    )
}