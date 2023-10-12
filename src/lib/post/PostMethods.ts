export async function fetchPosts({ page, rootCate }: PostsReqType) {
  const result = await fetch(
    `http://localhost:3000/api/posts?page=${page}&rootcate=${rootCate}`,
    {
      method: "get",
      next: {
        tags: [`posts-${rootCate}`],
      },
    }
  );
  if (result.status !== 200) {
    return null;
  }
  return result.json();
}

export async function fetchPost({ id }: PostReqType) {
  const result = await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "get",
    next: {
      tags: [`post-${id}`],
    },
  });

  return result.json();
}

export async function fetchCarouselPosts({
  type,
}: {
  type: "featured" | "recently";
}) {
  const result = await fetch(`http://localhost:3000/api/posts/${type}`, {
    method: "get",
    next: {
      tags: [`carousel-${type}`],
    },
  });

  return result.json();
}

export async function fetchSearchPosts(props: { searchText: string }) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_baseUrl}/api/posts/search`,
    {
      method: "post",
      body: JSON.stringify(props),
    }
  );

  return result.json();
}

export async function fetchWritePost(post: PostWriteReqType) {
  const result = await fetch("http://localhost:3000/api/post", {
    method: "post",
    body: JSON.stringify(post),
  });

  return result.json();
}

export async function fetchDeletePost(postId: string) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_baseUrl}/api/post/${postId}`,
    {
      method: "delete",
    }
  );

  return result.json();
}
