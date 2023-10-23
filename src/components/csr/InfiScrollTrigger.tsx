import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PostCardSkeleton from "../common/PostCardSkeleton";

type Props = {
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  getSearchPosts: (page: number) => Promise<number>;
  searchText: string;
};

export default function InfiScrollTrigger({
  setIsSearching,
  getSearchPosts,
  searchText,
}: Props) {
  const [page, setPage] = useState<number>(1);
  const [ref, inView] = useInView();
  const [duringSearch, setDuringSearch] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const searchMorePosts = async (nextPage: number) => {
    const result: number = await getSearchPosts(nextPage);
    setDuringSearch(false);
    setPage(nextPage);

    if (result === 0) {
      setIsEnd(true);
    }
  };

  useEffect(() => {
    if (inView) {
      const next = page + 1;
      setIsSearching(true);
      setDuringSearch(true);
      searchMorePosts(next);
      setIsEnd(false);
    }
  }, [inView, searchText]);

  return (
    <>
      {duringSearch && <PostCardSkeleton />}
      {!isEnd && <div ref={ref}>스피너어어어어어어</div>}
    </>
  );
}
