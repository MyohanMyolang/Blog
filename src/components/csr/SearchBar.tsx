"use client";

import useDebounce from "@/hooks/useDebounce";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { SearchActionProps } from "../../app/(Categories)/actions";
import PostCard from "../common/PostCard";
import PostCardSkeleton from "../common/PostCardSkeleton";

type Props = {
  action: (props: SearchActionProps) => Promise<PostCardType[]>;
};

export default function SearchBar({ action }: Props) {
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedValue, forceFetch] = useDebounce<string>({
    delay: 2000,
    value: searchText,
  });
  const [posts, setPosts] = useState<PostCardType[] | null | undefined>([]);

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
        setPosts(undefined);
        console.log("test");
        (async () => {
          try {
            console.log("before result");
            const result = await action({ text: debouncedValue });
            setPosts(result);
          } catch (error) {
            console.log(error);
          }
        })();
      } catch (error) {
        console.log(error);
      }
    }
  }, [debouncedValue, action]);

  useEffect(() => {
    // TODO: Add Posts to Session Storage And Scroll | Check Before Searched Result when Mount This Page
    return () => {};
  }, []);

  return (
    <>
      <div className="flex flex-row-reverse items-center my-4">
        <input
          className="p-2 transition-shadow border-2 duration-300 focus:border-cyan-300 border-gray-600 rounded-lg focus:shadow-[0_0_5px_5px] focus:shadow-cyan-300 focus:outline-none dark:bg-gray-800 dark:text-white"
          onKeyDown={checkEnter}
          onChange={textChangeHandler}
        />
      </div>
      {posts === undefined && <PostCardSkeleton />}
      {posts === null && <p>Not Found Posts</p>}
      {posts?.map((post) => (
        <PostCard key={post.id} postCard={post} />
      ))}
    </>
  );
}
