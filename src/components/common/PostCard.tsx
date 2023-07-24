import { PostType } from "@/service/common/post/types/PostTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: PostType;
};

export default function PostCard({ post }: Props) {
  post.title = post.title.concat(" Blog Project With NextJs");
  return (
    <>
      <Link
        href={`\\${post.rootCategory}\\${post.id}`}
        className="bg-white dark:text-white hover:text-blue-400"
      >
        <Image
          src="http://placehold.it/1024x600/a9e2ff/2ea5e3&text=UndefinedImage"
          width={600}
          height={480}
          alt="undefinedImage"
        />
        <div className="flex justify-between my-2">
          <time dateTime={post.date}>{post.date}</time>
          <h6>{post.id}</h6>
        </div>
        <div className="text-center">
          <h1 className="text-2xl">
            {post.title.length > 20
              ? `${post.title.slice(0, 20)}...`
              : post.title}
          </h1>
        </div>
      </Link>
    </>
  );
}
