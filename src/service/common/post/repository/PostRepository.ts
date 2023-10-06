export default interface PostRepository {
  /**
   * rootCategory에 상관하지 않고 최신의 게시글을 가져온다.
   * @param postNum 가져올 Post의 수
   */
  getRecentlyPosts(postNum: number): PostCardType[];

  getFeaturedPosts(): PostCardType[];

  getPosts({
    page,
    rootCategory,
  }: {
    page: number;
    rootCategory: RootCategoryType;
  }): PostCardType[];
  getPost(postId: number): PostType | null;

  writePost(data: PostWriteReqType): boolean;

  deletePost(postId: number): boolean;

  updatePost(postId: number, data: PostType): any;
}
