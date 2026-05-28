"use client";

import { useMutation } from "@tanstack/react-query";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

type SubscribeData = {
    membership_id: number;
};

type ChangeMembershipData = {
    membership_id: number;
};

export function useMemberships() {
    return useMutation<any, { error: string }>({
        mutationFn: async () => {
            const response = await fetch(baseUrl + "/memberships", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            if (!response.ok) throw json;
            return json;
        },
    });
}

export function useSubscribe(access_token: string) {
    return useMutation<{ message: string }, { error: string; field: string }, SubscribeData>({
        mutationFn: async (data: SubscribeData) => {
            const response = await fetch(baseUrl + "/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access_token}`,
                },
                body: JSON.stringify(data),
            });
            const json = await response.json();
            if (!response.ok) throw json;
            return json;
        }
    });
}