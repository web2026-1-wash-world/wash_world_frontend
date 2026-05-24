"use client";

import { useState } from "react";
import { useLogin } from "../hooks/useAuth";

export default function LoginPage() {
    const login = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login.mutate({ user_email: email, user_password: password });
    };

    return (
        <div className="flex flex-1 items-center justify-center p-8">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold">Login</h1>

                {login.isSuccess && (
                    <p className="text-green-600">
                        Welcome, {login.data.user.user_first_name}!
                    </p>
                )}
                {login.isError && (
                    <p className="text-red-600">{login.error.error}</p>
                )}

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
                    disabled={login.isPending}
                    className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 disabled:opacity-50"
                >
                    {login.isPending ? "Logging in..." : "Login"}
                </button>

                <a className="text-sm text-blue-600 hover:underline" href="http://127.0.0.1/forgot-password">
                    Forgot password?
                </a>
            </form>
        </div>
    )
}
