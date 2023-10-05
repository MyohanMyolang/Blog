"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NotFound({ children }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] gap-8">
      <div className="text-xl font-bold animate-bounce">{children}</div>
      <button
        className="p-4 border-4 rounded-full text-cyan-300 border-cyan-300 hover:animate-spin"
        onClick={() => router.back()}
      >
        돌아가기
      </button>
    </div>
  );
}
