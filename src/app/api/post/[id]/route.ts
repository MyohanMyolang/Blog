import { container } from "@/inversify.config";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostService from "@/service/common/post/service/PostService";
import { NextRequest, NextResponse } from "next/server";

type props = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params: { id } }: props) {
  const post: PostType | null = await container
    .get<PostService>(Post_Identifier.PostService)
    .getPost(id);

  return NextResponse.json(post);
}
