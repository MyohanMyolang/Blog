"use server";

import { container } from "@/inversify.config";
import Auth_Identifier from "@/service/common/auth/inversify/AuthIdentifier";
import AuthService from "@/service/common/auth/service/AuthService";
import { RedirectType, redirect } from "next/navigation";
import { cookies } from "next/headers";

// TODO: Add Validate with Zod
export async function loginAction(formData: FormData) {
  const id = formData.get("email") as string;
  const pw = formData.get("password") as string;

  const user = container
    .get<AuthService>(Auth_Identifier.AuthService)
    .getUser({ id, pw });
  console.log(user);
  if (user !== null) {
    console.log("login success");
    cookies().set("token", user);
    redirect("/", RedirectType.replace);
  }
}

export async function logoutAction() {
  cookies().delete("token");
  redirect("/", RedirectType.replace);
}
