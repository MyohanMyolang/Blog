import React, { Suspense } from "react";
import CarouselPostCard from "../common/CarouselPostCard";
import MultiCarousel from "./MultiCarousel";
import { fetchCarouselPosts } from "@/lib/post/server/PostFetchMethods";

type Props = {};

export default async function FeaturedCarousel({}: Props) {
  const featuredData: PostCardType[] = await fetchCarouselPosts({
    type: "featured",
  });

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
