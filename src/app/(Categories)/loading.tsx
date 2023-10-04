"use server";
import PostCardSkeleton from "@/components/common/PostCardSkeleton";
import React from "react";

type Props = {};

export default async function CategiryPageLoading({}: Props) {
  return (
    <>
      <PostCardSkeleton />
    </>
  );
}
