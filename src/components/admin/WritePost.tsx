"use client";

import {
  fetchUpdatePost,
  fetchPost,
  fetchWritePost,
} from "@/lib/post/PostFetchMethods";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import { AnimatePresence, motion } from "framer-motion";
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

  const onTypeMD = (value?: string) => {
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
        {/* Animation을 이용하여 아래에서 올라오는 기능 구현 / intro와 image를 넣을 수 있는 창을 만든다. */}
        <AnimatePresence mode="popLayout">
          <motion.div animate={{ opacity: 1, scaleY: 10 }}></motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

/*
TODO: create Toolbar for local Image Upload
  - 버튼 클릭 시 Dialog를 띄운 후 파일을 가져오기
  - 이후 가져온 데이터를 서버에 전송
  - 서버에서 받아온 url주소 입력 시키기
    - ![image](url)
  - url은 Image 변수에 등록시키도록 한다. // 썸네일을 따로 지정하지 않았을 때, 가장 처음 upload한 이미지 사용하기 위해.
import React, { useContext } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";

const help = {
  name: "help",
  keyCommand: "help",
  buttonProps: { "aria-label": "Insert help" },
  icon: (
    <svg viewBox="0 0 16 16" width="12px" height="12px">
      <path
        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.9 13H7v-1.8h1.9V13Zm-.1-3.6v.5H7.1v-.6c.2-2.1 2-1.9 1.9-3.2.1-.7-.3-1.1-1-1.1-.8 0-1.2.7-1.2 1.6H5c0-1.7 1.2-3 2.9-3 2.3 0 3 1.4 3 2.3.1 2.3-1.9 2-2.1 3.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  execute: (state, api) => {
    window.open("https://www.markdownguide.org/basic-syntax/", "_blank");
  }
};

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <MDEditor
      value={value}
      preview="edit"
      commands={[...commands.getCommands(), help]}
      onChange={(val) => setValue(val)}
    />
  );
}
*/
