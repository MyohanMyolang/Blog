import "reflect-metadata";
import { injectable } from "inversify";
import PostRepository from "./PostRepository";
import { PostCardType, PostType, RootCategoryType } from "../types/PostTypes";

let posts: PostType[] = [
  {
    id: 1,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 2,
    rootCategory: "life",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: true,
  },
  {
    id: 3,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 4,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: true,
  },
  {
    id: 5,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 6,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: true,
  },
  {
    id: 7,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 8,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: true,
  },
  {
    id: 9,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: true,
  },
  {
    id: 10,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 11,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 12,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 13,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 14,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 15,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 16,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 17,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
];

//
type rootCategories = "dev" | "life";

let postsCount = posts.length;

@injectable()
export default class MemoryPostRepository implements PostRepository {
  constructor() {}

  getPosts({
    page,
    rootCategory,
  }: {
    page: number;
    rootCategory: RootCategoryType;
  }): PostCardType[] {
    return posts
      .filter((post) => post.rootCategory === rootCategory)
      .slice((page - 1) * 10, page * 10 - 1);
  }

  public getRecentryPosts(postNum: number): PostType[] {
    const length = postsCount;
    const result: PostType[] = posts.slice(
      postNum >= length ? 0 : length - postNum
    );

    return result;
  }

  getFeaturedPosts(): PostType[] {
    return posts.filter((item, index) => item.featured);
  }

  getPost(postId: number) {
    throw new Error("Method not implemented.");
  }
  savePost(data: PostType): boolean {
    throw new Error("Method not implemented.");
  }
  deletePost(postId: number): boolean {
    throw new Error("Method not implemented.");
  }
  updatePost(postId: number) {
    throw new Error("Method not implemented.");
  }
}
