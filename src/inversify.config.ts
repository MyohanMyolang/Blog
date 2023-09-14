import { Container } from "inversify";
import { PostService } from "./service/common/post/service/PostService";
import Post_Identifier from "./service/common/post/inversify/PostIdentifier";
import PostRepository from "./service/common/post/repository/PostRepository";
import MemoryPostRepository from "./service/common/post/repository/MemoryPostRepository";

const container = new Container();

//  Post
container
  .bind<PostService>(Post_Identifier.PostService)
  .to(PostService)
  .inSingletonScope();
container
  .bind<PostRepository>(Post_Identifier.PostRepository)
  .to(MemoryPostRepository)
  .inSingletonScope();

//

export { container };
