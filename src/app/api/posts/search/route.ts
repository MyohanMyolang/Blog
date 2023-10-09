import { container } from "@/inversify.config";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostService from "@/service/common/post/service/PostService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const posts = await container
    .get<PostService>(Post_Identifier.PostService)
    .getPosts("1", "dev");

  return NextResponse.json(posts);
}
