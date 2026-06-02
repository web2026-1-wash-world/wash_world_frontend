"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

type SubscribeData = {
    membership_id: number;
};

type UserMembership = {
    membership_pk: number;
    name: string;
    price_per_month: number;
    status: string;
};

export function useSubscribe(access_token: string) {
    return useMutation<{ message: string }, { error: string; field: string }, SubscribeData>({
        mutationFn: async (data: SubscribeData) => {
            const response = await fetch(baseUrl + "/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer ${access_token}`,
                },
                body: new URLSearchParams(data), 
            });
            const json = await response.json();
            if (!response.ok) throw json;
            return json;
        }
    });
}

export function useUserMembership(access_token: string) {
    return useQuery<UserMembership, { error: string }>({
        queryKey: ["user-membership"],
        queryFn: async () => {
            const response = await fetch(baseUrl + "/users/membership", {
                headers: { Authorization: `Bearer ${access_token}` },
            });
            const json = await response.json();
            if (!response.ok) throw json;
            return json;
        },
    });
}

export function useCancelMembership(access_token: string) {
    return useMutation<{ message: string }, { error: string }>({
        mutationFn: async () => {
            const response = await fetch(
                baseUrl + "/user-membership",
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            );
            const json = await response.json();
            if (!response.ok) throw json;
            return json;
        },
    });
}