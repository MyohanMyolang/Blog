import { PostType } from "@/service/common/post/types/PostTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: PostType;
};

export default function CarouselPostCard({ post }: Props) {
  return (
    <>
      <Link
        href={`\\${post.rootCategory}\\${post.id}`}
        className="dark:text-white hover:text-blue-400"
      >
        <Image
          src="/images/posts/tempImage.png"
          width={480}
          height={400}
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
