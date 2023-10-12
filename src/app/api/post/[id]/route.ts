import { container } from "@/inversify.config";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostService from "@/service/common/post/service/PostService";
import { postService } from "@/service/object/Service";
import { NextRequest, NextResponse } from "next/server";
import { routeError } from "../../RouteResList";

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

export async function DELETE(req: NextRequest, { params: { id } }: props) {
  const result = await postService.deletePost(id);
  if (!result) return routeError({ msg: "찾을 수 없는 id", status: 404 });

  return NextResponse.json(result);
}
