import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

export default function PostPage({ params: { postId } }: Props) {
  return <div className="dark:text-white">PostPage</div>;
}
