"use client";

import { useState } from "react";
import { useSignUp } from "../hooks/useAuth";

import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"
import Image from 'next/image'

export default function SignUpPage() {
    const signUp = useSignUp();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        signUp.mutate({ user_first_name: firstName, user_last_name: lastName, user_email: email, user_password: password });
    };

    return (
        <div className="flex flex-1 items-center justify-center p-8 flex-col">
            <Image
                src="/images/WashWorld-logo.png"
                width={200}
                height={200}
                alt="Wash World Logo"
            />
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 w-full max-w-sm "
            >
                <h1 className="text-center">OPRET PROFIL</h1>

                {signUp.isSuccess && (
                    <p className="text-green-600">{signUp.data.message}</p>
                )}
                {signUp.isError && (
                    <p className="text-red-600">{signUp.error.error}</p>
                )}

                <Input
                    type="text"
                    placeholder="Fornavn"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Efternavn"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Adgangskode"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit"
                    disabled={signUp.isPending}>
                    {signUp.isPending ? "Signing up..." : "Sign Up"}
                </Button>
            </form>
        </div>
    );
}
