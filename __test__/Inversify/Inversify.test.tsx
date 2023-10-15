import "reflect-metadata";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostRepository from "@/service/common/post/repository/PostRepository";
import MemoryPostRepository from "@/service/common/post/repository/MemoryPostRepository";
import { inject } from "inversify";

let posts: PostType[] = [
  {
    id: 1,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 2,
    RCate: "life",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 3,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 4,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 5,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 6,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 7,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 8,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 9,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 10,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 11,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 12,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 13,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 14,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 15,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 16,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
  {
    id: 17,
    RCate: "dev",
    category: "tempCate1",
    date: "2023-07-22",
    title: "tempTitle",
    des: "temp Des",
    featured: false,
  },
];

/*
describe("Inversify Identifier Test", () => {
  it("recentryPosts Test", () => {
    const result: PostType[] = container
      .get<PostService>(Post_Identifier.PostService)
      .getRecentryPosts(5);
    result.forEach((item, index) => {
      expect(item).toEqual(posts[posts.length - 1 - index]);
      //expect(item).toEqual(posts[posts.length - index]);
    });
  });
});

it.only("getRecentryPosts Test", () => {
  const result: PostType[] = useContainer<PostService>(
    Post_Identifier.PostService,
    (service) => {
      return service.getRecentryPosts(5);
    }
  );

  expect(result.length).toBe(5);
});
*/
