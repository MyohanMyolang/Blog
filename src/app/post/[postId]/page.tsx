import PostViewer from "@/components/post/PostViewer";
import { fetchPost } from "@/lib/post/PostFetchMethods";
import { notFound } from "next/navigation";

type Props = {
  params: {
    postId: string;
  };
};

export default async function PostPage({ params: { postId } }: Props) {
  const post: PostType = await fetchPost({ id: postId });

  if (post === null) notFound();

  return (
    <div>
      <PostViewer post={post} />
    </div>
  );
}

export async function generateStaticParams() {
  return Array.from({ length: 10 }, (v, i) => i).map((number) => {
    postId: number.toString();
  });
}
