import { cookies } from "next/headers";

type props = {};

export default function CheckAdmin(): boolean {
  if (cookies().has("token") /** && Token 검증 */) return true;

  return false;
}
