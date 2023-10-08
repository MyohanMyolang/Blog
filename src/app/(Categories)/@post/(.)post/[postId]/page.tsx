import Modal from "@/components/csr/Modal";
import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

export default function InterceptPostPage({ params: { postId } }: Props) {
  return (
    <div className="">
      InterceptPostPage{postId}
      hi
    </div>
  );
}
