import CarouselCard from "@/components/common/CarouselPostCard";
import MultiCarousel from "@/components/carousel/MultiCarousel";
import RecentryCarousel from "@/components/carousel/RecentryCarousel";
import Profile from "@/components/profile/Profile";
import React from "react";
import FeaturedCarousel from "@/components/carousel/FeaturedCarousel";
import { headers } from "next/headers";
import Script from "next/script";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Profile />

      <div className="grid grid-cols-1 grid-rows-2 mt-4 md:grid-cols-2 md:grid-rows-1 ">
        <RecentryCarousel key="recentryCarousel" />
        <FeaturedCarousel key="featuredCarousel" />
      </div>
    </>
  );
}
