import { container } from "@/inversify.config";
import CheckAdmin from "@/lib/CheckAdmin";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostService from "@/service/common/post/service/PostService";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { routeError } from "../RouteResList";

export async function POST(req: NextRequest) {
  // TODO: Save Posts
  const result: boolean = await container
    .get<PostService>(Post_Identifier.PostService)
    .writePost({});
  if (!result) {
    return routeError({ msg: "Can't Write Post", status: 418 });
  }
  revalidateTag(`posts-${1}`); //post root category
  return NextResponse.json({
    success: "Upload Post!",
  });
}
