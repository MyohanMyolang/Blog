"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  children: React.ReactNode;
};
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
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
      ssr={true}
      autoPlay
      autoPlaySpeed={5000}
      responsive={responsive}
      removeArrowOnDeviceType={"mobile"}
      arrows={false}
      itemClass="flex justify-center px-4"
    >
      {children}
    </Carousel>
  );
}
