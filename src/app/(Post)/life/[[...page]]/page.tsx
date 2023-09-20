import PostCard from "@/components/common/PostCard";
import { container } from "@/inversify.config";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import { PostService } from "@/service/common/post/service/PostService";
import { PostCardType } from "@/service/common/post/types/PostTypes";
import React from "react";

type Props = {
  params: {
    page: string;
  };
};

export default function LifePage({ params: { page = "1" } }: Props) {
  const posts: PostCardType[] = container
    .get<PostService>(Post_Identifier.PostService)
    .getPosts(page, "life");
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} postCard={post} />
      ))}
    </>
  );
}
