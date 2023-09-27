import Test from "@/test/Test";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("route Console : ", Test.getNum());

  return new Response(Test.getNum().toString());
}

export async function POST() {
  Test.incNum();
  revalidatePath("/dev");

  return NextResponse.json({
    a: "a",
  });
}
