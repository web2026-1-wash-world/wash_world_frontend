"use client";

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Car } from "../../types/car";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export function useCars() {
  const queryClient = useQueryClient();
  type CreateCarData = {
    car_license_plate: string;
    car_brand: string;
    car_model: string;
  };

  const {
    data: cars = [],
    isLoading,
    error: error,
  } = useQuery<Car[]>({
    queryKey: ["cars"],
    queryFn: async () => {
      const token = localStorage.getItem("access_token");
      const response = await fetch(baseUrl + "/cars", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      if (!response.ok) throw json;
      return json;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: CreateCarData) => {
      const token = localStorage.getItem("access_token");
      const response = await fetch(baseUrl + "/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
        body: new URLSearchParams(data),
      });
      const json = await response.json();
      if (!response.ok) throw json;
      return json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });

  const createCar = createMutation.mutate;

  const deleteMutation = useMutation({
    mutationFn: async (car_pk: number) => {
      const token = localStorage.getItem("access_token");
      const response = await fetch(baseUrl + "/cars/" + car_pk, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const json = await response.json();
        throw json;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });

  const deleteCar = (car_pk: number) => deleteMutation.mutateAsync(car_pk);

  return {
    cars,
    isLoading,
    createCar,
    isCreating: createMutation.isPending,
    isCreateError: createMutation.isError,
    createError: createMutation.error as any,
    deleteCar,
  };
}
