import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostService from "@/service/common/post/service/PostService";
import { NextRequest, NextResponse } from "next/server";
import { routeError } from "../RouteResList";
import { container } from "@/inversify.config";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const page = url.searchParams.get("page");
  const rootCate = url.searchParams.get("rootcate");
  const postService = container.get<PostService>(Post_Identifier.PostService);

  if (page === null || rootCate === null) {
    return routeError({
      status: 404,
      msg: "there's No searchParams, Should Check",
    });
  }

  if (rootCate !== "dev" && rootCate !== "life") {
    return routeError({
      status: 404,
      msg: "Not Found Category",
    });
  }
  const posts = await postService.getPosts(page, rootCate as RootCategoryType);

  return NextResponse.json(posts);
}
