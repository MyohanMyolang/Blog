import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

type Props = {
  post: PostType;
};

export default function PostViewer({ post }: Props) {
  return (
    <div className="py-4">
      <div className="grid items-center grid-cols-3 pb-4 mb-4 border-b-2 border-b-black dark:border-b-white">
        <div className="col-start-2 text-xl font-bold text-center md:text-4xl">
          {post.title}
        </div>
        <div className="grid justify-end grid-rows-2">
          <div>{post.category}</div>
          <div>{post.date}</div>
        </div>
      </div>
      <div className="prose dark:prose-invert">
        <MDXRemote source={post.des} />
      </div>
    </div>
  );
}
