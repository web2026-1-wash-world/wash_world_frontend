"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLogin } from "../hooks/useAuth";

import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";
import { Checkbox } from "../components/ui/Checkbox";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const login = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const successMessage = searchParams.get("message");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    login.mutate(
      {
        user_email: email,
        user_password: password,
      },
      {
        onSuccess: (data) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("user", JSON.stringify(data.user));
          router.push("/dashboard");
        },
      }
    );
  }

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
        <form
          data-cy="login-form"
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center mb-5">Login</h1>

          {successMessage ? (
            <p data-cy="success-message" className="text-(--color-green-on-black)">
              {successMessage}
            </p>
          ) : null}

          {login.isSuccess ? (
            <p data-cy="login-success" className="text-green-600">
              {login.data.message}
            </p>
          ) : null}

          {login.isError ? (
            <p data-cy="login-error" className="text-red-600">
              {login.error.error}
            </p>
          ) : null}

          <Input
            data-cy="email-input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            data-cy="password-input"
            type="password"
            name="password"
            placeholder="Adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between">
            <Checkbox name="remember" label="Husk mig" />

            <Link
              data-cy="forgot-password-link"
              href="/forgot-password"
              className="text-sm text-text-secondary underline"
            >
              Glemt password?
            </Link>
          </div>

          <Button
            data-cy="login-button"
            type="submit"
            disabled={login.isPending}
          >
            {login.isPending ? "Logger ind..." : "Login"}
          </Button>

          <Link href="/sign-up">
            <p
              data-cy="signup-link"
              className="text-center text-sm text-text-secondary mt-4"
            >
              Har du ikke en profil?
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}