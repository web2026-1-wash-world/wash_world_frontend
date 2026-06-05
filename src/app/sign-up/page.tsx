"use client";

import { useState } from "react";
import { useSignUp } from "../hooks/useAuth";

import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";
import Image from "next/image";
import { RiErrorWarningFill } from "react-icons/ri";

export default function SignUpPage() {
  const signUp = useSignUp();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signUp.mutate({
      user_first_name: firstName,
      user_last_name: lastName,
      user_email: email,
      user_password: password,
    });
  };

  return (
    <div className="flex flex-1 items-center justify-center p-8 flex-col">
      <Image
        src="/images/WashWorld-Logo.svg"
        width={200}
        height={200}
        alt="Wash World Logo"
        className="my-10"
      />

      <form
        data-cy="signup-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-sm"
      >
        <h1 className="text-center">OPRET PROFIL</h1>

        {signUp.isSuccess ? (
          <div className="flex">
            <p data-cy="signup-success" className="text-green-600">
              {signUp.data.message}
            </p>
          </div>
        ) : null}

        <Input
          data-cy="first-name-input"
          type="text"
          placeholder="Fornavn"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        {signUp.isError && signUp.error.field === "user_first_name" ? (
          <div data-cy="first-name-error" className="flex items-center gap-2">
            <RiErrorWarningFill className="fill-red-600" />
            <p className="text-(--color-text-secondary)">
              {signUp.error.error}
            </p>
          </div>
        ) : null}

        <Input
          data-cy="last-name-input"
          type="text"
          placeholder="Efternavn"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        {signUp.isError && signUp.error.field === "user_last_name" ? (
          <div data-cy="last-name-error" className="flex items-center gap-2">
            <RiErrorWarningFill className="fill-red-600" />
            <p className="text-(--color-text-secondary)">
              {signUp.error.error}
            </p>
          </div>
        ) : null}

        <Input
          data-cy="signup-email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {signUp.isError && signUp.error.field === "user_email" ? (
          <div data-cy="email-error" className="flex items-center gap-2">
            <RiErrorWarningFill className="fill-red-600" />
            <p className="text-(--color-text-secondary)">
              {signUp.error.error}
            </p>
          </div>
        ) : null}

        <Input
          data-cy="signup-password-input"
          type="password"
          placeholder="Adgangskode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {signUp.isError && signUp.error.field === "user_password" ? (
          <div data-cy="password-error" className="flex items-center gap-2">
            <RiErrorWarningFill className="fill-red-600" />
            <p className="text-(--color-text-secondary)">
              {signUp.error.error}
            </p>
          </div>
        ) : null}

        <Button
          data-cy="signup-button"
          type="submit"
          disabled={signUp.isPending}
        >
          {signUp.isPending ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}