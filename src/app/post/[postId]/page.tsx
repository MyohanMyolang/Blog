import { container } from "@/inversify.config";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import { PostService } from "@/service/common/post/service/PostService";
import { PostType } from "@/service/common/post/types/PostTypes";
import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

export default async function PostPage({ params: { postId } }: Props) {
  const post: PostType = await container
    .get<PostService>(Post_Identifier.PostService)
    .getPost(postId);
  return (
    <div className="dark:text-white">
      <div>{post.title}</div>
      <div>{post.date}</div>
      <div>{post.des}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const a = [];
  for (let i = 0; i < 7; i++) a.push(i);
  return a.map((number) => {
    postId: number.toString();
  });
}
