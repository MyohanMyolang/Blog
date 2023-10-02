"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function PostNotFound({}: Props) {
  const router = useRouter();
  return (
    <div>
      존재하지 않는 게시물 입니다. <br />
      <button onClick={() => router.back()}>돌아가기</button>
    </div>
  );
}
