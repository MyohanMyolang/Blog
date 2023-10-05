export async function fetchPosts({ page, rootCate }: PostsReqType) {
  const result = await fetch(
    `http://localhost:3000/api/posts?page=${page}&rootcate=${rootCate}`,
    {
      method: "get",
      next: {
        tags: ["posts"],
      },
    }
  );

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

// export async function fetchF
