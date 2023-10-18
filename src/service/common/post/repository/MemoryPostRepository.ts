import "reflect-metadata";
import { injectable } from "inversify";
import PostRepository from "./PostRepository";
import { DateTime } from "luxon";
import { revalidateTag } from "next/cache";
import { ConvPostToPC } from "@/service/lib/decorators/Decorators";

let posts: PostType[] = [
  {
    id: 1,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des1",
    featured: false,
  },
  {
    id: 2,
    RCate: "life",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des2",
    featured: true,
  },
  {
    id: 3,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des3",
    featured: false,
  },
  {
    id: 4,
    RCate: "life",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des4",
    featured: true,
  },
  {
    id: 5,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des5",
    featured: false,
  },
  {
    id: 6,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des6",
    featured: true,
  },
  {
    id: 7,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des7",
    featured: false,
  },
  {
    id: 8,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des8",
    featured: true,
  },
  {
    id: 9,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des9",
    featured: true,
  },
  {
    id: 10,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp D421es",
    featured: false,
  },
  {
    id: 11,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De142s",
    featured: false,
  },
  {
    id: 12,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De421s",
    featured: false,
  },
  {
    id: 13,
    RCate: "life",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De421s",
    featured: false,
  },
  {
    id: 14,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De321s",
    featured: false,
  },
  {
    id: 15,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De321s",
    featured: false,
  },
  {
    id: 16,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp D321es",
    featured: false,
  },
  {
    id: 17,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp D321es",
    featured: false,
  },
];

let postsCount = posts.length;

@injectable()
export default class MemoryPostRepository implements PostRepository {
  constructor() {}

  @ConvPostToPC()
  getPosts({
    page,
    rootCategory,
  }: {
    page: number;
    rootCategory: RootCategoryType;
  }): PostCardType[] {
    return posts
      .filter((post) => post.RCate === rootCategory)
      .slice((page - 1) * 10, page * 10);
  }

  @ConvPostToPC()
  public getRecentlyPosts(postNum: number): PostCardType[] {
    const length = postsCount;
    const result: PostType[] = posts.slice(
      postNum >= length ? 0 : length - postNum
    );

    return result;
  }

  @ConvPostToPC()
  getFeaturedPosts(): PostCardType[] {
    return posts.filter((item, index) => item.featured);
  }

  getPost(postId: number): PostType | null {
    return posts.find((post) => post.id === postId) ?? null;
  }
  writePost(data: PostWriteReqType): number {
    const { year, month, day } = DateTime.now();
    const postData: PostType = {
      id: ++postsCount,
      date: `${year}-${month}-${day}`,
      featured: false,
      ...data,
    };
    posts.unshift(postData);
    return postsCount; // return post Number
  }

  deletePost(postId: number): boolean {
    const idx = posts.findIndex((post) => post.id === postId);
    if (idx > -1) {
      const deleted = posts.splice(idx, 1);
      revalidateTag(`posts-${deleted[0].RCate}`);
      return true;
    }
    return false;
  }

  updatePost(postId: number, data: PostWriteReqType) {
    const idx = posts.findIndex((post) => post.id === postId);
    if (idx > -1) {
      if (posts[idx].RCate !== data.RCate) {
        revalidateTag(`posts-${data.RCate}`);
        revalidateTag(`posts-${posts[idx].RCate}`);
        revalidateTag(`post-${postId}`);
      }
      posts[idx] = { ...posts[idx], ...data };
      return true;
    }
    return false;
  }

  @ConvPostToPC()
  searchPost({ searchText, page }: PostSearchType): PostCardType[] | null {
    const foundPosts: PostType[] = posts.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.des.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    return foundPosts.length !== 0
      ? foundPosts.slice((page - 1) * 10, page * 10)
      : null;
  }
}
