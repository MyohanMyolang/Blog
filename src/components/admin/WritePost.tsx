"use client";

import { fetchWritePost } from "@/lib/post/PostMethods";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useRef, useState } from "react";

type Props = {};

// TODO: Change Category to Array Type
export default function WritePost({}: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const [rootCate, setRootCate] = useState<RootCategoryType | undefined>(
    undefined
  );
  const categoryRef = useRef<HTMLInputElement>(null);
  const desRef = useRef<HTMLTextAreaElement>(null);
  const route = useRouter();

  const [isWriting, setIsWriting] = useState<boolean>(false);

  const onSubmit = async () => {
    const post: PostWriteReqType = {
      title: titleRef.current?.value ?? "",
      category: categoryRef.current?.value ?? "",
      des: desRef.current?.value ?? "",
      rootCategory: rootCate!,
    };
    setIsWriting(true);
    const result = await fetchWritePost(post);
    if (result !== null) {
      route.push(`/post/${result}`);
      return null;
    }
    alert("게시글 저장에 실패하였습니다!");
    setIsWriting(false);
  };

  const onChangeRootCate = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "dev" || e.target.value === "life")
      setRootCate(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <input
          className="py-4 text-4xl text-center duration-200 focus:scale-110 focus:shadow-[0_0_5px_5px] focus:shadow-cyan-300 focus:outline-none"
          placeholder="Type Title"
          ref={titleRef}
        />
        <div className="flex gap-4">
          <select
            onChange={onChangeRootCate}
            className="p-4 border-2 rounded-lg focus:border-cyan-600"
          >
            <option defaultValue={undefined} value={undefined}>
              Select Category
            </option>
            <option value={"dev"}>DEV</option>
            <option value={"life"}>LIFE</option>
          </select>
          <input
            ref={categoryRef}
            placeholder="Type Category"
            className="text-center"
          />
        </div>
        <textarea
          ref={desRef}
          placeholder="Type Des"
          className="h-screen p-4 resize-none"
        />
        <div id="wirteBtnWrapper" className="flex flex-row-reverse gap-4">
          <button
            className="p-4 duration-300 border-2 rounded-full hover:scale-125"
            disabled={isWriting}
            onClick={onSubmit}
          >
            작성
          </button>
        </div>
      </div>
    </>
  );
}
