"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useDeleteUser } from "@/app/hooks/useAuth";

export default function DeleteUser() {
  const router = useRouter();

  const [confirmDelete, setConfirmDelete] = useState(false);
  const deleteUser = useDeleteUser();

  function handleDeleteUser() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const user_pk = user.user_pk;

    deleteUser.mutate(user_pk, {
      onSuccess: (data) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");

        router.push(`/login?message=${encodeURIComponent(data.message)}`);
        }
    });
  }

  return (
    <div className="relative">
      <div className={`flex flex-col gap-3 ${confirmDelete ? "blur-xl" : ""}`}>
        
        <div>
            <h1>Slet konto</h1>
            <p className="text-(--color-text-secondary)">
            Du er ved at slette din Wash World konto.
            </p>
        </div>

        <div className="rounded-card bg-(--color-surface) p-4">
            <h3>Dette vil ske:</h3>

            <ul className="list-disc pl-4 text-(--color-text-secondary)">
                <li>Din konto bliver permanent slettet</li>
                <li>Dine profiloplysninger fjernes</li>
                <li>Dine point og badges går tabt</li>
            </ul>
        </div>

        <div className="rounded-card border border-red-500 p-4">
            <p className="font-medium text-red-500">
            Denne handling kan ikke fortrydes.
            </p>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            variant="danger"
            type="button"
            onClick={() => setConfirmDelete(true)}
          >
            Delete user
          </Button>
        </div>
      </div>

      {confirmDelete ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col gap-4 rounded-xl bg-(--color-surface) p-6">
            <h2>Er du sikker på at du vil slette din bruger?</h2>

            <div className="flex gap-2">
              <Button
                type="button"
                onClick={handleDeleteUser}
              >
                Bekræft
              </Button>

              <Button
                type="button"
                variant="danger"
                onClick={() => setConfirmDelete(false)}
              >
                Afbryd
              </Button>
            </div>

            {deleteUser.isPending ? <p>Sletter bruger...</p> : null}

            {deleteUser.isError ? (
              <p className="text-red-600">
                {deleteUser.error.error || "Der skete en fejl"}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}