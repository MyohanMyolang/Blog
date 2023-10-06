import React from "react";
import MultiCarousel from "./MultiCarousel";
import CarouselPostCard from "../common/CarouselPostCard";
import { fetchCarouselPosts } from "@/lib/post/PostMethods";

type Props = {};

export default async function RecentlyCarousel({}: Props) {
  const recentlyData: PostCardType[] = await fetchCarouselPosts({
    type: "recently",
  });
  return (
    <div className="text-center">
      <h1 className="pb-4 text-3xl font-bold dark:text-white">
        Recently Posts
      </h1>
      <MultiCarousel>
        {recentlyData.map((item, index) => {
          return <CarouselPostCard key={item.title} post={item} />;
        })}
      </MultiCarousel>
    </div>
  );
}
