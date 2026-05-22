"use client"

import { useState } from "react"
import { useLogin } from "../hooks/useAuth"

import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"

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
    <div>
        <div className="bg-[var(--card)] min-h-screen px-6 flex items-start justify-center pt-15 mt-60 rounded-t-[36px]">
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

                <Button type="submit">
                Login
                </Button>
            </form>
        </div>
    </div>
  )
}