"use server";

import { container } from "@/inversify.config";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import { PostService } from "@/service/common/post/service/PostService";
import { PostCardType } from "@/service/common/post/types/PostTypes";

export type SearchActionProps = {
  text: string;
};

export async function searchAction(
  props: SearchActionProps
): Promise<PostCardType[]> {
  const posts = container
    .get<PostService>(Post_Identifier.PostService)
    .getPosts("1", "dev");
  return posts;
}
