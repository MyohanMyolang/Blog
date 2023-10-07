import Modal from "@/components/csr/Modal";
import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

export default function InterceptPostPage({ params: { postId } }: Props) {
  return (
    <div className="fixed h-screen animation animate-spin">
      InterceptPostPage{postId}
    </div>
  );
}
