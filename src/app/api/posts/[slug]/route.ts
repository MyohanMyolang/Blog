import { container } from "@/inversify.config";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostService from "@/service/common/post/service/PostService";
import { NextRequest, NextResponse } from "next/server";

type props = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params: { slug } }: props) {
  const postService: PostService = container.get<PostService>(
    Post_Identifier.PostService
  );
  let result: PostCardType[];

  switch (slug) {
    case "featured":
      result = await postService.getFeaturedPosts();
      break;

    case "recently":
      result = await postService.getRecentlyPosts(5);
      break;

    default:
      return NextResponse.json({
        failure: true,
        errMsg: slug,
      });
  }
  return NextResponse.json(result);
}
