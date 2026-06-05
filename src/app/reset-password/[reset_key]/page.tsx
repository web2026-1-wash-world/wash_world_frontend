"use client"
import { useParams } from "next/navigation";

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/app/components/ui/Input"
import { Button } from "@/app/components/ui/Button"

import { useResetPassword } from "@/app/hooks/useAuth";

import { RiErrorWarningFill } from "react-icons/ri";

type ResetPasswordParams = {
    reset_key: string;
};

export default function ResetPassword() {
    const params = useParams<ResetPasswordParams>();
    const resetKey = params.reset_key;

    const resetPassword = useResetPassword();
    const router = useRouter();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  resetPassword.mutate(
    {
      user_password: password,
      confirm_password: confirmPassword,
      reset_key: resetKey,
    },
    {
      onSuccess: (data) => {
        router.push(`/login?message=${encodeURIComponent(data.message)}`);
      },
    }
  );
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
                {resetPassword.isError && resetPassword.error.field === "user_password" ? (
                    <div className="flex items-center gap-2">
                        <RiErrorWarningFill 
                        className="fill-red-600"/>
                        <p className="text-(--color-text-secondary)">{resetPassword.error.error}</p>
                    </div>
                ) : ""}
                <Input
                type="password"
                name="confirm_password"
                placeholder="Bekræft adgangskode"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {resetPassword.isError && resetPassword.error.field === "confirm_password" ? (
                    <div className="flex items-center gap-2">
                        <RiErrorWarningFill 
                        className="fill-red-600"/>
                        <p className="text-(--color-text-secondary)">{resetPassword.error.error}</p>
                    </div>
                ) : ""}

                <Button type="submit"
                    disabled={resetPassword.isPending}>
                    {resetPassword.isPending ? "Opdaterer adgangskode..." : "Opdater adgangskode"}
                </Button>
            </form>
        </div>
    </div>
  )
}
