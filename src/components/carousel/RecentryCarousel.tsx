import React from "react";
import MultiCarousel from "./MultiCarousel";
import CarouselCard from "../common/CarouselPostCard";
import { PostService } from "@/service/common/post/service/PostService";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import { PostType } from "@/service/common/post/types/PostTypes";
import CarouselPostCard from "../common/CarouselPostCard";
import InverManager from "@/inversify/InversifyManager";
import MemoryPostRepository from "@/service/common/post/repository/MemoryPostRepository";
import PostRepository from "@/service/common/post/repository/PostRepository";

type Props = {};

InverManager.bindDfendency<PostService, PostService>({
  identifier: Post_Identifier.PostService,
  target: PostService,
});
InverManager.bindDfendency<PostRepository, MemoryPostRepository>({
  identifier: Post_Identifier.PostRepository,
  target: MemoryPostRepository,
});

export default function RecentryCarousel({}: Props) {
  /*
  const recentryData: PostType[] = useContainer<PostService>(
    Post_Identifier.PostService,
    (service) => {
      return service.getRecentryPosts(5);
    }
  );*/
  const postService: PostService =
    InverManager.getDependencyByType<PostService>(
      Post_Identifier.PostRepository
    );
  const recentryData: PostType[] = postService.getRecentryPosts(5);
  return (
    <div>
      <h1 className="pb-4 text-3xl font-bold dark:text-white">
        Recentry Posts
      </h1>
      <MultiCarousel>
        {recentryData.map((item, index) => {
          return <CarouselPostCard key={item.title} post={item} />;
        })}
      </MultiCarousel>
    </div>
  );
}
