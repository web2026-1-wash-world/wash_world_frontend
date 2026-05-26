"use client"
import { useParams } from "next/navigation";

import { useState } from "react"

import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"

import { useResetPassword } from "@/app/hooks/useAuth";

type ResetPasswordParams = {
    reset_key: string;
};

export default function ResetPassword() {
    const params = useParams<ResetPasswordParams>();
    const resetKey = params.reset_key;

    const resetPassword = useResetPassword();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        resetPassword.mutate({
            user_password: password,
            confirm_password: confirmPassword,
            reset_key: resetKey,
        });
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
                {resetPassword.isError ? (
                    <p className="text-red-600">{resetPassword.error.error}</p>
                ) : ""}
                {resetPassword.isSuccess ? (
                    <p className="text-green-600">{resetPassword.data.message}</p>
                ) : ""}
                <Input
                type="password"
                name="user_password"
                placeholder="Ny adgangkode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                type="password"
                name="confirm_password"
                placeholder="Bekræft adgangskode"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Button type="submit">
                    Opdater adgangskode
                </Button>
            </form>
        </div>
    </div>
  )
}
