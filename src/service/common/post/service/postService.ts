import "reflect-metadata";
import { injectable, inject } from "inversify";
import type PostRepository from "../repository/PostRepository";
import Post_Identifier from "../inversify/PostIdentifier";
import { resolve } from "path";

const wait = (timeToDelay: number) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

@injectable()
export default class PostService {
  private _postRepository: PostRepository;

  constructor(
    @inject(Post_Identifier.PostRepository) postRepository: PostRepository
  ) {
    this._postRepository = postRepository;
  }

  public async getRecentryPosts(postNum: number) {
    await wait(2000);
    return this._postRepository.getRecentryPosts(postNum).reverse();
  }

  public async getFeaturedPosts() {
    await wait(2000);
    return this._postRepository.getFeaturedPosts();
  }

  public async getPosts(
    page: string,
    rootCategory: RootCategoryType
  ): Promise<PostCardType[]> {
    await wait(2000);
    return this._postRepository.getPosts({
      page: parseInt(page),
      rootCategory,
    });
  }

  public async getPost(postId: string): Promise<PostType> {
    return this._postRepository.getPost(parseInt(postId));
  }
}
