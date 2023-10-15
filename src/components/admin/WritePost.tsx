"use client";

import {
  fetchUpdatePost,
  fetchPost,
  fetchWritePost,
} from "@/lib/post/PostMethods";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

type Props = {
  postId?: string;
};

// TODO: Change Category to Array Type
export default function WritePost({ postId }: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const [rootCate, setRootCate] = useState<RootCategoryType | undefined>(
    undefined
  );
  const categoryRef = useRef<HTMLInputElement>(null);
  const route = useRouter();

  const [isWriting, setIsWriting] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>();
  const [des, setDes] = useState<string>("");

  useEffect(() => {
    if (postId !== undefined) {
      (async () => {
        const result = await fetchPost({ id: postId });
        setPost(result);
      })();
    }
  }, [postId]);

  const initPostData = () => {
    titleRef.current!.value = post?.title ?? "";
    categoryRef.current!.value = post?.category ?? "";
    setDes(post?.des ?? "");
  };

  useEffect(() => {
    initPostData();
  }, [titleRef.current, categoryRef.current]);

  const onSubmit = async () => {
    const post: PostWriteReqType = {
      title: titleRef.current?.value ?? "",
      category: categoryRef.current?.value ?? "",
      des: des,
      RCate: rootCate!,
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

  const onUpdate = async () => {
    const post: PostWriteReqType = {
      title: titleRef.current?.value ?? "",
      category: categoryRef.current?.value ?? "",
      des: des,
      RCate: rootCate!,
    };
    setIsWriting(true);
    const result = await fetchUpdatePost(post, postId!);
    if (result !== null) {
      route.push(`/post/${postId}`);
      return null;
    }
    alert("게시글 수정에 실패하였습니다!");
    setIsWriting(false);
  };

  const onChangeRootCate = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "dev" || e.target.value === "life")
      setRootCate(e.target.value);
  };

  const onTypeMD = (
    value?: string,
    e?: ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore
  ) => {
    console.log(des);
    setDes(value ?? "");
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
            defaultValue={post?.RCate}
            key={post?.RCate}
          >
            <option value={undefined}>Select Category</option>
            <option value={"dev"}>DEV</option>
            <option value={"life"}>LIFE</option>
          </select>
          <input
            ref={categoryRef}
            placeholder="Type Category"
            className="text-center"
          />
        </div>
        <MDEditor height={800} value={des} onChange={onTypeMD} />
        <div id="wirteBtnWrapper" className="flex flex-row-reverse gap-4">
          <button
            className="p-2 transition transform active:translate-y-2 duration:300 hover:-translate-y-2 hover:border-b-2 hover:border-b-cyan-300"
            disabled={isWriting}
            onClick={postId === undefined ? onSubmit : onUpdate}
          >
            {postId === undefined ? "작성" : "수정"}
          </button>
        </div>
      </div>
    </>
  );
}
