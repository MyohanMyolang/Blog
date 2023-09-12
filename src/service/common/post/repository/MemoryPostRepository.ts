import "reflect-metadata";
import { injectable } from "inversify";
import PostRepository from "./PostRepository";
import { PostType } from "../types/PostTypes";

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
  getPosts({ page, rootCategory }: { page: number; rootCategory: string; }) {
    throw new Error("Method not implemented.");
  }

  public getRecentryPosts(postNum: number): PostType[] {
    const length = postsCount;
    const result: PostType[] = posts.slice(
      postNum >= length ? 0 : length - postNum
    );

    return result;
  }

  /* 
  개발 도중 생각 한 것
    ㄴ relation DB를 사용하여 기능을 구현한 경우 query를 어떻게 만들어야 할까 생각이 들었다.
    ㄴ 만약 한 table안에 모든 Post들이 들어있다 가정하고, 
    ㄴ limit과 offset을 이용하면 더욱 간단하게 구현 가능할 것 같다.
  */

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
