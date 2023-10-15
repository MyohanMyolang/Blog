"use client";

import React, { useState } from "react";
import ContMenuBtn from "../csr/ContMenuBtn";
import { fetchDeletePost, fetchUpdatePost } from "@/lib/post/PostMethods";
import { useRouter } from "next/navigation";

type Props = {
  postId: string;
};

export default function AdminPostContBtnWrapper({ postId }: Props) {
  const route = useRouter();
  const [pending, setPending] = useState<boolean>(false);

  const onDeletePost = async () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      setPending(true);
      const result = await fetchDeletePost(postId);
      if (result) {
        alert("삭제되었습니다.");
        route.push("/");
        return;
      }
      setPending(false);
      alert("삭제 실패");
    }
  };

  const onUpdatePost = async () => {
    route.push(`/write/${postId}`);
  };

  return (
    <div className="flex gap-4 my-4">
      <ContMenuBtn onClick={onUpdatePost}>수정</ContMenuBtn>
      <ContMenuBtn pending={pending} onClick={onDeletePost}>
        삭제
      </ContMenuBtn>
    </div>
  );
}
