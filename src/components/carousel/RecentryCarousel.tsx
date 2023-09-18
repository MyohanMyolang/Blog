import React from "react";
import MultiCarousel from "./MultiCarousel";
import { PostType } from "@/service/common/post/types/PostTypes";
import CarouselPostCard from "../common/CarouselPostCard";
import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import { PostService } from "@/service/common/post/service/PostService";
import { container } from "@/inversify.config";

type Props = {};

export default function RecentryCarousel({}: Props) {
  const recentryData: PostType[] = container
    .get<PostService>(Post_Identifier.PostService)
    .getRecentryPosts(5);
  return (
    <div className="text-center">
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
