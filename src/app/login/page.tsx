"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useLogin } from "../hooks/useAuth"

import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"
import { Checkbox } from "../components/ui/Checkbox"
import Image from "next/image"
import Link from "next/link"

import { useSearchParams } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const login = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const searchParams = useSearchParams();

    const successMessage = searchParams.get("message");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login.mutate({ user_email: email, user_password: password },{onSuccess: (data) => {
            localStorage.setItem("access_token", data.access_token)
            localStorage.setItem("user", JSON.stringify(data.user))
            router.push("/dashboard")
        }}
    );
};

  return (
    <div className="h-screen overflow-hidden bg-black pt-10 -m-4">
        <div className="flex items-center justify-center">
            <Image
                src="/images/WashWorld-Logo.svg"
                width={200}
                height={200}
                alt="Wash World Logo"
                className="my-10"
            />
            </div>
        <div className="bg-surface h-full px-6 flex items-start justify-center py-15 rounded-t-nav">
            <form className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit}
            >
                <h1 className="text-center mb-5">Login</h1>
                <div>
                    {successMessage ? (
                    <p className="text-(--color-green-on-black)">
                        {successMessage}
                    </p>
                ) : null}
                </div>

                {login.isSuccess ? (<p className="text-green-600">{login.data.message}</p>) : ""}
                {login.isError ? (<p className="text-red-600">{login.error.error}</p>) : ""}

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

                <Button type="submit"
                disabled={login.isPending}>
                {login.isPending ? "Login in..." : "Login"}
                </Button>
                <Link href="/sign-up">
                <p className="text-center text-sm text-text-secondary mt-4">
                Har du ikke en profil?
                </p>
                </Link>
            </form>
        </div>
    </div>
  )
}
