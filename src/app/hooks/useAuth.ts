"use client";

import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../types/user";
import { resolve } from "path";
import { rejects } from "assert";

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

type ForgotPasswordData = {
    user_email: string;
};

type ResetPasswordData = {
    user_password: string;
    confirm_password: string;
    reset_key: string;
};

type DeleteAccountData = {
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_password: string;
};

type NearestStationData = {
  station_pk: string;
  name: string;
  adress: string;
  latitude: number;
  longitude: number;
  distance: number;
};

export function useSignUp() {
    return useMutation<{ message: string }, { error: string; field: string }, SignUpData>({
        mutationFn: async (data: SignUpData) => {
            const response = await fetch(baseUrl + "/sign-up", {
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
    return useMutation<{ message: string; access_token: string, user: User }, { error: string; }, LoginData>({
        mutationFn: async (data: LoginData) => {
            const response = await fetch(baseUrl + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    },
                body: JSON.stringify(data),
            });
            const json = await response.json();
            if (!response.ok) throw json;
            return json;
        },
    });
}

export function useForgotPassword() {
    return useMutation<{ message: string; access_token: string, user: User }, { error: string; field: string }, ForgotPasswordData>({
        mutationFn: async (data: ForgotPasswordData) => {
            const response = await fetch(baseUrl + "/forgot-password", {
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

export function useResetPassword() {
    return useMutation<{ message: string }, { error: string; field: string }, ResetPasswordData>({
        mutationFn: async (data: ResetPasswordData) => {
            const response = await fetch(baseUrl + "/reset-password", {
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

export function useDeleteAccount() {
    return useMutation<{ message: string }, { error: string; field: string }, DeleteAccountData>({
        mutationFn: async (data: DeleteAccountData) => {
            const response = await fetch(baseUrl + "/reset-password", {
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

export function useGetNearestLocation() {
  return useQuery<NearestStationData[], { error: string; field?: string }>({
    queryKey: ["nearest-location"],

    queryFn: async () => {
      const token = localStorage.getItem("access_token")

      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      );

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const response = await fetch(baseUrl + `/stations/nearby?lat=${lat}&lon=${lon}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await response.json();

      if (!response.ok) {
        throw json;
      }

      return json;
    },
  });
}