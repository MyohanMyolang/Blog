"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function RootNotFoundPage({}: Props) {
  const router = useRouter();
  return (
    <div>
      RootNotFoundPage <br />
      <button onClick={() => router.back()}>돌아가기</button>
    </div>
  );
}
