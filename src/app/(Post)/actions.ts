import { PostType } from "@/service/common/post/types/PostTypes";

export type SearchActionType = {};

export async function searchAction(
  props: SearchActionType
): Promise<PostType[]> {
  return [] as PostType[];
}
