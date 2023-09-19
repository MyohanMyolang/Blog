import "reflect-metadata";
import { injectable, inject } from "inversify";
import type PostRepository from "../repository/PostRepository";
import Post_Identifier from "../inversify/PostIdentifier";
import { PostCardType, RootCategoryType } from "../types/PostTypes";

@injectable()
export class PostService {
  private _postRepository: PostRepository;

  constructor(
    @inject(Post_Identifier.PostRepository) postRepository: PostRepository
  ) {
    this._postRepository = postRepository;
  }

  public getRecentryPosts(postNum: number) {
    return this._postRepository.getRecentryPosts(postNum).reverse();
  }

  public getFeaturedPosts() {
    return this._postRepository.getFeaturedPosts();
  }

  public getPosts(
    page: string,
    rootCategory: RootCategoryType
  ): PostCardType[] {
    return this._postRepository.getPosts({
      page: parseInt(page),
      rootCategory,
    });
  }
}
