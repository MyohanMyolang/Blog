import React from "react";

type Props = {
  params: {
    post: string;
  };
};

export default function PostPage({ params }: Props) {
  return <div>{params.post}</div>;
}

export async function generateStaticParams() {
  return ["1", "2", "3"];
}
