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
    <div className="bg-[var(--card)] px-6 pt-30 pb-30">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <h1 className="typography-h1 text-center mb-5">Login</h1>
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
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
        <Button
            type="submit"
        >
            Login
        </Button>
        </form>
    </div>
  )
}