"use client";

import { useMutation } from "@tanstack/react-query";
import { User } from "../../types/user";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

type SignUpData = {
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_password: string;
};

type LoginData = {
    user_email: string;
    user_password: string;
};

export function useSignUp() {
    return useMutation<{ message: string }, { error: string }, SignUpData>({
        mutationFn: async (data: SignUpData) => {
            const formData = new FormData();

            formData.append("user_first_name", data.user_first_name);
            formData.append("user_last_name", data.user_last_name);
            formData.append("user_email", data.user_email);
            formData.append("user_password", data.user_password);

            const response = await fetch(baseUrl + "/sign-up", {
                method: "POST",
                body: formData,
            });

            const json = await response.json();

            if (!response.ok) throw json;

            return json;
        },
    });
}
export function useSignUpCopy() {
    return useMutation<{ message: string }, { error: string }, SignUpData>({
        mutationFn: async (data: SignUpData) => {
            const response = await fetch(baseUrl + "/sign-up-copy", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await response.json();
            if (!response.ok) throw json;
            return json;
        },
    });
}

export function useLogin() {
    return useMutation<{ message: string; access_token: string, user: User }, { error: string }, LoginData>({
        mutationFn: async (data: LoginData) => {
            const response = await fetch(baseUrl + "/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await response.json();
            if (!response.ok) throw json;
            return json;
        },
    });
}
