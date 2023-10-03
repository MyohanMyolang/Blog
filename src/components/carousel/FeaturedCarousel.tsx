import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import PostService from "@/service/common/post/service/PostService";
import React, { Suspense } from "react";
import CarouselPostCard from "../common/CarouselPostCard";
import MultiCarousel from "./MultiCarousel";
import { container } from "@/inversify.config";

type Props = {};

export default async function FeaturedCarousel({}: Props) {
  const postService = container.get<PostService>(Post_Identifier.PostService);
  const featuredData = await postService.getFeaturedPosts();

  return (
    <div className="text-center">
      <h1 className="pb-4 text-3xl font-bold dark:text-white">
        Featured Posts
      </h1>
      <MultiCarousel>
        {featuredData.map((item, index) => {
          return <CarouselPostCard key={item.title} post={item} />;
        })}
      </MultiCarousel>
    </div>
  );
}
