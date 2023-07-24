"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "../common/PostCard";

type Props = {
  children: React.ReactNode;
};
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel
      infinite
      ssr
      autoPlay
      autoPlaySpeed={5000}
      responsive={responsive}
      removeArrowOnDeviceType={"mobile"}
      itemClass="px-4"
    >
      {children}
    </Carousel>
  );
}
