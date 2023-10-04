import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidatePath("/dev");

  return NextResponse.json({
    a: "a",
  });
}
