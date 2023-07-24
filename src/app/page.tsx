import CarouselCard from "@/components/common/PostCard";
import MultiCarousel from "@/components/carousel/MultiCarousel";
import RecentryCarousel from "@/components/carousel/RecentryCarousel";
import Profile from "@/components/profile/Profile";
import React from "react";

type Props = {};

export default function page({}: Props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Profile />
      <div id="Recently_Posts">
        <RecentryCarousel />
      </div>
      <div id="featured_Posts"></div>
    </>
  );
}
