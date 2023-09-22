"use client";

import useDebounce from "@/hooks/useDebounce";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { SearchActionProps } from "../../app/(Post)/actions";
import { PostCardType } from "@/service/common/post/types/PostTypes";
import PostCard from "./PostCard";

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
          console.log(result);
          setPosts(result);
        })();
      } catch (error) {
        console.log(error);
      }
    }
  }, [debouncedValue, action]);

  return (
    <>
      <input
        className="rounded-sm"
        onKeyDown={checkEnter}
        onChange={textChangeHandler}
      />
      {debouncedValue === ""
        ? children
        : posts.map((post) => <PostCard key={post.id} postCard={post} />)}
    </>
  );
}
