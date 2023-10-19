"use client";

import useDebounce from "@/hooks/useDebounce";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import PostCard from "../common/PostCard";
import PostCardSkeleton from "../common/PostCardSkeleton";
import { fetchSearchPosts } from "@/lib/post/PostFetchMethods";
import NotFound from "./NotFound";
import InfiScrollTrigger from "./InfiScrollTrigger";

type Props = {
  isPost: boolean;
};

export default function SearchBar({ isPost }: Props) {
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedValue, forceFetch] = useDebounce<string>({
    delay: 2000,
    value: searchText,
  });
  const [posts, setPosts] = useState<PostCardType[] | null | undefined>([]);
  const [isSearching, setIsSearching] = useState(false);
  const checkEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      forceFetch();
    }
  };

  const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const getSearchPosts = async (page: number) => {
    const result = await fetchSearchPosts({
      searchText: debouncedValue,
      page,
    });
    console.log(result);
    console.log(posts);
    if (result !== undefined && result !== null) {
      setPosts([...(posts ?? []), ...result]);
    } else {
    }
    setIsSearching(false);
    return result?.length;
  };
  useEffect(() => {
    // fetch Items
    if (debouncedValue !== "") {
      // ServerAction Exception
      setPosts([]);
      setIsSearching(true);
      getSearchPosts(1);
    }
  }, [debouncedValue]);

  // Craete infinite Scroll

  return (
    <>
      <div className="flex flex-row-reverse items-center my-4">
        <input
          className="p-2 transition-shadow border-2 duration-300 focus:border-cyan-300 border-gray-600 rounded-lg focus:shadow-[0_0_5px_5px] focus:shadow-cyan-300 focus:outline-none dark:bg-gray-800 dark:text-white"
          onKeyDown={checkEnter}
          onChange={textChangeHandler}
          placeholder="Search Post"
          value={searchText}
        />
      </div>
      {!isPost && (
        <>
          <div
            className={`${
              isSearching ? "animate-pulse" : ""
            } flex justify-center pb-4 text-2xl font-bold`}
          >
            {isSearching ? "검색중..." : "검색 결과"}
          </div>
          {posts === undefined && <PostCardSkeleton />}
          {posts === null && <NotFound>Not Found Post!</NotFound>}
          {posts?.map((post) => (
            <PostCard key={post.id} postCard={post} />
          ))}
          {posts !== null && posts?.length !== 0 && (
            <InfiScrollTrigger
              setIsSearching={setIsSearching}
              getSearchPosts={getSearchPosts}
            />
          )}
        </>
      )}
    </>
  );
}
