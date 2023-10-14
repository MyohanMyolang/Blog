import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

type Props = {
  post: PostType;
};

export default function PostViewer({ post }: Props) {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-start-2">{post.title}</div>
        <div className="grid grid-rows-2">
          <div>{post.category}</div>
          <div>{post.date}</div>
        </div>
        <MDXRemote source={`# ffff - fdjaslkdfjkasldfjsafjlkkasldfj`} />
      </div>
    </>
  );
}
