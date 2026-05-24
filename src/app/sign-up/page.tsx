"use client";

import { useState } from "react";
import { useSignUp } from "../hooks/useAuth";

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
        <div className="flex flex-1 items-center justify-center p-8">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold">Sign Up</h1>

                {signUp.isSuccess && (
                    <p className="text-green-600">{signUp.data.message}</p>
                )}
                {signUp.isError && (
                    <p className="text-red-600">{signUp.error.error}</p>
                )}

                <input
                    className="border rounded p-2 bg-white text-black placeholder-zinc-500"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    className="border rounded p-2 bg-white text-black placeholder-zinc-500"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    className="border rounded p-2 bg-white text-black placeholder-zinc-500"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="border rounded p-2 bg-white text-black placeholder-zinc-500"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    disabled={signUp.isPending}
                    className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 disabled:opacity-50"
                >
                    {signUp.isPending ? "Signing up..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
}
