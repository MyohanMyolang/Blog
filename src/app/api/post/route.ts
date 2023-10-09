import { container } from "@/inversify.config";
import CheckAdmin from "@/lib/CheckAdmin";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostService from "@/service/common/post/service/PostService";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { routeError } from "../RouteResList";

export async function POST(req: NextRequest) {
  const body: PostWriteReqType = await req.json();
  const result: number = await container
    .get<PostService>(Post_Identifier.PostService)
    .writePost(body);
  if (!result) {
    return routeError({ msg: "Can't Write Post", status: 418 });
  }
  revalidateTag(`posts-${1}`); //post root category
  return NextResponse.json(result);
}
