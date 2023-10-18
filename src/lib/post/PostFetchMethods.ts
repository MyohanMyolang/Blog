export async function fetchSearchPosts(searchData: PostSearchType) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_baseUrl}/api/posts/search`,
      {
        method: "post",
        body: JSON.stringify(searchData),
      }
    );
    return result.json();
  } catch (e) {
    return null;
  }
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

export async function fetchUpdatePost(post: PostWriteReqType, postId: string) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_baseUrl}/api/post/${postId}`,
    {
      method: "put",
      body: JSON.stringify(post),
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
