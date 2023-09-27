"use client";

import useDebounce from "@/hooks/useDebounce";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { SearchActionProps } from "../../app/(Categories)/actions";
import { PostCardType } from "@/service/common/post/types/PostTypes";
import PostCard from "../common/PostCard";

type Props = {
  action: (props: SearchActionProps) => Promise<PostCardType[]>;
  children: React.ReactNode;
};

export default function SearchBar({ action, children }: Props) {
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedValue, forceFetch] = useDebounce<string>({
    delay: 1000,
    value: searchText,
  });
  const [posts, setPosts] = useState<PostCardType[]>([]);

  const checkEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      forceFetch();
    }
  };

  const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    // fetch Items
    if (debouncedValue !== "") {
      try {
        // ServerAction Exception
        (async () => {
          const result = await action({
            text: debouncedValue,
          });
          setPosts(result);
        })();
      } catch (error) {
        console.log(error);
      }
    }
  }, [debouncedValue, action]);

  return (
    <>
      <div className="flex flex-row-reverse my-4 ">
        <input
          className="p-2 border-2 border-gray-600 rounded-lg focus:outline-none dark:bg-gray-800 dark:text-white"
          onKeyDown={checkEnter}
          onChange={textChangeHandler}
        />
      </div>
      {debouncedValue === ""
        ? children
        : posts?.map((post) => <PostCard key={post.id} postCard={post} />)}
    </>
  );
}
