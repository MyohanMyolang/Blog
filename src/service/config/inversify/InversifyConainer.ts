import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import MemoryPostRepository from "@/service/common/post/repository/MemoryPostRepository";
import PostRepository from "@/service/common/post/repository/PostRepository";
import { PostService } from "@/service/common/post/service/PostService";
import { Container } from "inversify";

const container = new Container();

// Post
container.bind<PostService>(Post_Identifier.PostService).to(PostService);
container
  .bind<PostRepository>(Post_Identifier.PostRepository)
  .to(MemoryPostRepository);

// Life

// Dev
export { container };
