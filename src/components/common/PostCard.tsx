import { PostCardType } from "@/service/common/post/types/PostTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  postCard: PostCardType;
};

export default function PostCard({ postCard }: Props) {
  return (
    <Link
      href={`/post/${postCard.id}`}
      className="grid grid-cols-2 pb-8 dark:text-white"
    >
      <div className="justify-self-center w-[128px] h-[128px] md:w-[240px] md:h-[240px] border-4 dark:border-white border-black">
        {postCard.imgSrc !== undefined ? (
          <Image fill src={postCard.imgSrc} alt="Post Image" />
        ) : (
          <div className="flex flex-col w-[128px] h-[128px] md:w-[240px] md:h-[240px]  text-center justify-center ">
            <h1 className="text-sm md:text-2xl">No Image</h1>
          </div>
        )}
      </div>
      <div className="md:h-[240px] overflow-hidden ">
        <div className="flex justify-around pb-4">
          <h1 className="text-lg font-bold md:text-2xl ">{postCard.title}</h1>
          <h4>{postCard.date}</h4>
        </div>
        {postCard.des}
      </div>
    </Link>
  );
}
