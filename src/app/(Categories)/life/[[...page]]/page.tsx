import PostCard from "@/components/common/PostCard";
import NotFound from "@/components/csr/NotFound";
import { fetchPosts } from "@/lib/post/server/PostFetchMethods";
import React from "react";

type Props = {
  params: {
    page: string[];
  };
};

export default async function LifePage({ params: { page = ["1"] } }: Props) {
  const posts: PostCardType[] | null = await fetchPosts({
    page: page[0],
    rootCate: "life",
  });
  return (
    <>
      {posts !== null ? (
        posts.length !== 0 ? (
          posts.map((post) => <PostCard key={post.id} postCard={post} />)
        ) : (
          <NotFound>
            <h1>포스트가 없습니다.</h1>
          </NotFound>
        )
      ) : (
        <NotFound>
          <h1 className="text-6xl text-red-600">서버 에러!</h1>
        </NotFound>
      )}
    </>
  );
}
