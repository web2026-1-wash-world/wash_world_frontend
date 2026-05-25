"use client"

import { useState } from "react"
import { useLogin } from "../hooks/useAuth"

import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"
import { Checkbox } from "../components/ui/Checkbox"

export default function LoginPage() {
  const login = useLogin()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    login.mutate({
      email,
      password,
    })
  }

  return (
    <div className="h-screen overflow-hidden bg-black pt-50">
        <div className="bg-[var(--card)] h-full px-6 flex items-start justify-center py-15 rounded-t-[36px]">
            <form className="flex flex-col gap-4 w-full">
                <h1 className="text-center mb-5">Login</h1>

                <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                type="password"
                name="password"
                placeholder="Adgangskode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <div className="flex items-center justify-between">
                    <Checkbox
                    name="remember"
                    label="Husk mig"
                    />

                    <a
                    href="/forgot-password"
                    className="text-sm text-text-secondary underline"
                    >Glemt password?
                    </a>
                </div>

                <Button type="submit">
                Login
                </Button>

                <p className="text-center text-sm text-text-secondary mt-4">
                Har du ikke en profil?{" "}
                
                <a
                    href="/sign-up"
                    className="font-bold text-text-secondary"
                >
                    Opret bruger
                </a>
                </p>
            </form>
        </div>
    </div>
  )
}