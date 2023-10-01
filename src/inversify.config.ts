import { Container } from "inversify";
import { PostService } from "./service/common/post/service/PostService";
import Post_Identifier from "./service/common/post/inversify/PostIdentifier";
import PostRepository from "./service/common/post/repository/PostRepository";
import MemoryPostRepository from "./service/common/post/repository/MemoryPostRepository";
import AuthService from "./service/common/auth/service/AuthService";
import Auth_Identifier from "./service/common/auth/inversify/AuthIdentifier";
import AuthRepository from "./service/common/auth/repository/AuthRepository";
import MemoryAuthRepository from "./service/common/auth/repository/MemoryAuthRepository";

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

// Auth
container
  .bind<AuthService>(Auth_Identifier.AuthService)
  .to(AuthService)
  .inSingletonScope();

container
  .bind<AuthRepository>(Auth_Identifier.AuthRepository)
  .to(MemoryAuthRepository)
  .inSingletonScope();

export { container };
