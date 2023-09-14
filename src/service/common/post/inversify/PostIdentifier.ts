const Post_Identifier = {
  PostRepository: Symbol.for("PostRepository"),
  PostService: Symbol.for("PostService"),
} as const;

export default Post_Identifier;
