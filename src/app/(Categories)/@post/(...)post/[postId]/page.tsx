import AdminPostContBtnWrapper from "@/components/admin/AdminPostContBtnWrapper";
import Modal from "@/components/csr/Modal";
import CheckAdmin from "@/lib/CheckAdmin";
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
  const isAdmin = CheckAdmin();

  if (post === null) notFound();
  return (
    <div id="des" className="p-4 dark:text-white">
      <div>{post.title}</div>
      <div>{post.date}</div>
      <div>{post.des}</div>
      <div className="flex flex-row-reverse">
        {isAdmin && <AdminPostContBtnWrapper />}
      </div>
    </div>
  );
}
