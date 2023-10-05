import PostCard from "@/components/common/PostCard";
import { fetchPosts } from "@/lib/post/PostMethods";
import React from "react";

type Props = {
  params: {
    page: string;
  };
};

export default async function PostPage({ params: { page = "1" } }: Props) {
  const posts: PostCardType[] = await fetchPosts({ page, rootCate: "dev" });

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} postCard={post} />
      ))}
    </>
  );
}
