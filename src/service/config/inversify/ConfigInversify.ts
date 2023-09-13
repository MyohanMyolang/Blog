import InverManager from "@/inversify/InversifyManager";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import MemoryPostRepository from "@/service/common/post/repository/MemoryPostRepository";
import PostRepository from "@/service/common/post/repository/PostRepository";
import { PostService } from "@/service/common/post/service/PostService";

function PostInverConfig() {
  if (process.env.NODE_ENV === "production") {
  } else if (process.env.NODE_ENV === "development") {
    console.log("develoment Setting");
    InverManager.bindDfendency<PostService>({
      identifier: Post_Identifier.PostService,
      target: PostService,
    });
    InverManager.bindDfendency<PostRepository>({
      identifier: Post_Identifier.PostRepository,
      target: MemoryPostRepository,
    });
  }
}

const Config = [PostInverConfig];
InverManager.configuration(Config);
