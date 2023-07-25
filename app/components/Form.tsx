"use client";

import { FormEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";

type Props = {
  onSubmit: (email: string) => void;
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Form({ onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError("");
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      setEmailError("Valid email required");
      return;
    }

    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Input
        label="Email address"
        value={email}
        setValue={setEmail}
        name="email"
        error={emailError}
        placeholder="email@company.com"
      />
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
}
