"use client"

import { useState } from "react"
import { useForgotPassword } from "../hooks/useAuth"

import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"

export default function LoginPage() {
    const forgotPassword = useForgotPassword();
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        forgotPassword.mutate({ user_email: email});
    };

  return (
    <div className="h-screen overflow-hidden bg-black pt-50">
        <div className="h-full px-6 flex items-start justify-center">
            <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full"
            >
                <h1 className="text-center mb-5">GLEMT ADGANGSKODE</h1>
                <p>Indtast din email for at modtage et link til at nulstille din adgangskode</p>

                <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Button type="submit">
                    Send link
                </Button>
            </form>
        </div>
    </div>
  )
}
