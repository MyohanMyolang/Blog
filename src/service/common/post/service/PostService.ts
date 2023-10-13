import "reflect-metadata";
import { injectable, inject } from "inversify";
import type PostRepository from "../repository/PostRepository";
import Post_Identifier from "../inversify/PostIdentifier";
import CheckAdminDec from "@/service/lib/decorators/ChecAdminDec";
import "server-only";

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

  public async getRecentlyPosts(postNum: number): Promise<PostCardType[]> {
    await wait(2000);
    return this._postRepository.getRecentlyPosts(postNum).reverse();
  }

  public async getFeaturedPosts(): Promise<PostCardType[]> {
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

  public async getPost(postId: string): Promise<PostType | null> {
    return this._postRepository.getPost(parseInt(postId));
  }

  @CheckAdminDec()
  public async writePost(post: PostWriteReqType): Promise<number> {
    await wait(2000);
    return this._postRepository.writePost(post);
  }

  @CheckAdminDec()
  public async deletePost(postId: string): Promise<boolean> {
    await wait(2000);
    return this._postRepository.deletePost(parseInt(postId));
  }
}
