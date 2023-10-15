import AdminPostContBtnWrapper from "@/components/admin/AdminPostContBtnWrapper";
import Modal from "@/components/csr/Modal";
import PostViewer from "@/components/post/PostViewer";
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
      <PostViewer post={post} />

      {isAdmin && (
        <div className="flex flex-row-reverse items-center border-t-2 border-white">
          <AdminPostContBtnWrapper postId={postId} />
        </div>
      )}
    </div>
  );
}
