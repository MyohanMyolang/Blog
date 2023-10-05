import { container } from "@/inversify.config";
import CheckAdmin from "@/lib/CheckAdmin";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostService from "@/service/common/post/service/PostService";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const page = url.searchParams.get("page");
  const rootCate = url.searchParams.get("rootcate");
  const postService = container.get<PostService>(Post_Identifier.PostService);

  if (page === null || rootCate === null) {
    return NextResponse.json({
      failure: true,
      errMsg: "there's No searchParams, Should Check",
    });
  }

  if (rootCate !== "dev" && rootCate !== "life") {
    return NextResponse.json({
      failure: true,
      errMsg: "Not Found Category",
    });
  }
  const posts = await postService.getPosts(page, rootCate as RootCategoryType);

  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  if (CheckAdmin()) {
    console.log("it's Admin!");
    // TODO: Save Posts
    revalidateTag("posts");
    return NextResponse.json({
      success: "Upload Post!",
    });
  }
  console.log("is Not Admin");
  return NextResponse.json({
    failure: true,
    errMsg: "can't Upload Post",
  });
}
