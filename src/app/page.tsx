import Profile from "@/components/profile/Profile";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Profile />
      <div id="Recently_Posts"></div>
      <div id="featured_Posts"></div>
    </>
  );
}
