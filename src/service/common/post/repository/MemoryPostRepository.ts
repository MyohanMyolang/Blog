import "reflect-metadata";
import { injectable } from "inversify";
import PostRepository from "./PostRepository";
import { omit } from "lodash";
import { DateTime } from "luxon";

let posts: PostType[] = [
  {
    id: 1,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des1",
    featured: false,
  },
  {
    id: 2,
    rootCategory: "life",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des2",
    featured: true,
  },
  {
    id: 3,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des3",
    featured: false,
  },
  {
    id: 4,
    rootCategory: "life",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des4",
    featured: true,
  },
  {
    id: 5,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des5",
    featured: false,
  },
  {
    id: 6,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des6",
    featured: true,
  },
  {
    id: 7,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des7",
    featured: false,
  },
  {
    id: 8,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des8",
    featured: true,
  },
  {
    id: 9,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des9",
    featured: true,
  },
  {
    id: 10,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp D421es",
    featured: false,
  },
  {
    id: 11,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De142s",
    featured: false,
  },
  {
    id: 12,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De421s",
    featured: false,
  },
  {
    id: 13,
    rootCategory: "life",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De421s",
    featured: false,
  },
  {
    id: 14,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De321s",
    featured: false,
  },
  {
    id: 15,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp De321s",
    featured: false,
  },
  {
    id: 16,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp D321es",
    featured: false,
  },
  {
    id: 17,
    rootCategory: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp D321es",
    featured: false,
  },
];

//
type rootCategories = "dev" | "life";

let postsCount = posts.length;

@injectable()
export default class MemoryPostRepository implements PostRepository {
  constructor() {}

  private postConvertPostCard(post: PostType) {
    return omit(post, ["featured", "rootCategory"]);
  }

  getPosts({
    page,
    rootCategory,
  }: {
    page: number;
    rootCategory: RootCategoryType;
  }): PostCardType[] {
    return posts
      .filter((post) => post.rootCategory === rootCategory)
      .slice((page - 1) * 10, page * 10)
      .map((post) => {
        return this.postConvertPostCard(post);
      });
  }

  public getRecentlyPosts(postNum: number): PostCardType[] {
    const length = postsCount;
    const result: PostType[] = posts.slice(
      postNum >= length ? 0 : length - postNum
    );

    return result.map((post) => {
      return this.postConvertPostCard(post);
    });
  }

  getFeaturedPosts(): PostCardType[] {
    return posts
      .filter((item, index) => item.featured)
      .map((post) => {
        return this.postConvertPostCard(post);
      });
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
      posts.splice(idx, 1);
      return true;
    }
    return false;
  }
  updatePost(postId: number) {
    throw new Error("Method not implemented.");
  }
}
