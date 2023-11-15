import CheckAdmin from "@/lib/CheckAdmin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: Props) {
  if (CheckAdmin()) redirect("/dashboard");
  return <>{children}</>;
}
