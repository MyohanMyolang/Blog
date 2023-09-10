import Post_Identifier from "@/service/common/post/inversify/PostIdentifier";
import { PostService } from "@/service/common/post/service/PostService";
import { PostType } from "@/service/common/post/types/PostTypes";
import React from "react";
import CarouselPostCard from "../common/CarouselPostCard";
import MultiCarousel from "./MultiCarousel";
import InverManager from "@/inversify/InversifyManager";

type Props = {};

export default function FeaturedCarousel({}: Props) {
  // const featuredData: PostType[] = useContainer<PostService>(
  //   Post_Identifier.PostService,
  //   (service) => {
  //     return service.getFeaturedPosts();
  //   }
  // );
  // return (
  //   <div>
  //     <h1 className="pb-4 text-3xl font-bold dark:text-white">
  //       Featured Posts
  //     </h1>
  //     <MultiCarousel>
  //       {featuredData.map((item, index) => {
  //         return <CarouselPostCard key={item.title} post={item} />;
  //       })}
  //     </MultiCarousel>
  //   </div>
  // );
}
