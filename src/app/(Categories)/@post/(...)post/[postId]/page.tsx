import Modal from "@/components/csr/Modal";
import { fetchPost } from "@/lib/post/PostMethods";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

export default async function InterceptPostPage({ params: { postId } }: Props) {
  const post: PostType = await fetchPost({ id: postId });

  if (post === null) notFound();
  return (
    <div className="dark:text-white">
      <div>{post.title}</div>
      <div>{post.date}</div>
      <div>{post.des}</div>
    </div>
  );
}
