import WritePost from "@/components/admin/WritePost";
import CheckAdmin from "@/lib/CheckAdmin";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { postId?: string[] };
};

export default function WritePage({ params: { postId } }: Props) {
  const isAdmin = CheckAdmin();
  if (!isAdmin) notFound();
  return <WritePost postId={postId?.at(0)} />;
}
