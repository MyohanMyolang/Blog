import React from "react";
import MultiCarousel from "./MultiCarousel";
import CarouselCard from "../common/PostCard";
import { PostService } from "@/service/common/post/service/PostService";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import { useContainer } from "@/service/common/post/inversify/InversifyUtils";
import { PostType } from "@/service/common/post/types/PostTypes";
import PostCard from "../common/PostCard";

type Props = {};

export default function RecentryCarousel({}: Props) {
  const recentryData: PostType[] = useContainer<PostService>(
    Post_Identifier.PostService,
    (service) => {
      return service.getRecentryPost(5);
    }
  );
  return (
    <div>
      <h1 className="pb-4 text-3xl font-bold dark:text-white">
        Recentry Posts
      </h1>
      <MultiCarousel>
        {recentryData.map((item, index) => {
          return <PostCard key={item.title} post={item} />;
        })}
      </MultiCarousel>
    </div>
  );
}
