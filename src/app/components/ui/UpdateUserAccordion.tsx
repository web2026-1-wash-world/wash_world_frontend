"use client";
import { useEffect, useState } from "react";
import { LuUser, LuChevronDown } from "react-icons/lu";
import { Input } from "./Input";
import { Button } from "./Button";
import { useUpdateUser } from "@/app/hooks/useAuth";

export function UpdateUserAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const updateUser = useUpdateUser(token);

  useEffect(() => {
    setToken(localStorage.getItem("access_token") ?? "");
    const user = JSON.parse(localStorage.getItem("user") ?? "null");
    if (user) {
      setFirstName(user.user_first_name ?? "");
      setLastName(user.user_last_name ?? "");
      setEmail(user.user_email ?? "");
    }
  }, []);


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback("");
    updateUser.mutate(
      { user_first_name: firstName, user_last_name: lastName, user_email: email },
      {
        onSuccess: (data) => {
          localStorage.setItem("user", JSON.stringify(data.user));
          if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
            setToken(data.access_token);
          }
          setFeedback("Oplysninger opdateret");
        },
      }
    );
  }

  return (
    <div className="bg-surface rounded-card">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center gap-3 p-4 text-left"
      >
        <LuUser className="text-brand-green" />
        <div className="flex-1">
          <div className="text-text-white">Oplysninger</div>
          <div className="text-text-secondary text-sm">
            Lav ændringer i dine informationer
          </div>
        </div>
        <LuChevronDown
          className={`text-text-white transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-4 pb-4">
          <Input
            placeholder="Fornavn"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="Efternavn"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" disabled={updateUser.isPending}>
            {updateUser.isPending ? "Gemmer..." : "Gem"}
          </Button>
          {feedback && (
            <p className="text-brand-green text-sm">{feedback}</p>
          )}
          {updateUser.isError && (
            <p className="text-red-500 text-sm">
              {(updateUser.error as { error?: string })?.error ?? "Fejl"}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
