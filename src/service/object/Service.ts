import { container } from "@/inversify.config";
import PostService from "../common/post/service/PostService";
import Post_Identifier from "../common/post/inversify/PostIdentifier";

const postService: PostService = container.get<PostService>(
  Post_Identifier.PostService
);

export { postService };
