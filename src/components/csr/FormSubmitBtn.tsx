"use client";

import React from "react";
import { useFormStatus } from "react-dom";

type Props = {
  className: string;
  children: React.ReactNode;
};

export default function LoginButton({ className, children }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className} ${pending ? "bg-gray-200 text-black" : ""}`}
    >
      {pending ? "Login..." : children}
    </button>
  );
}
