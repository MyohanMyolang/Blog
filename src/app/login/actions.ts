"use server";

import { container } from "@/inversify.config";
import Auth_Identifier from "@/service/common/auth/inversify/AuthIdentifier";
import AuthService from "@/service/common/auth/service/AuthService";
import { RedirectType, redirect } from "next/navigation";
import { cookies } from "next/headers";

type ResType = {
  code: number | undefined;
  msg: string | undefined;
};

export type loginResType = ResType & {};

// TODO: Add Validate with Zod
export async function loginAction(prevState: any, formData: FormData) {
  const id = formData.get("email") as string;
  const pw = formData.get("password") as string;

  const user = container
    .get<AuthService>(Auth_Identifier.AuthService)
    .getUser({ id, pw });
  if (user !== null) {
    // TODO: cookieSet Jwt Token
    cookies().set("token", user);
    redirect("/", RedirectType.replace);
  }
  return {
    code: 403,
    msg: "ID 또는 PassWord를 확인하여 주십시오.",
  } as loginResType;
}

export async function logoutAction() {
  cookies().delete("token");
  redirect("/", RedirectType.replace);
}
