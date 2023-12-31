"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Profile({}: Props) {
  const router = useRouter();
  return (
    <div className="[&>div]:pb-4 md:grid md:grid-cols-2">
      <div id="Profile" className="flex justify-center ">
        <div
          id="ProfileImage"
          className="overflow-hidden rounded-full hover:cursor-pointer"
          onClick={() => {
            router.push("/about");
          }}
        >
          <Image
            src="http://placehold.it/240x240/a9e2ff/2ea5e3&text=tmepImage"
            alt="Profile Image"
            height={240}
            width={240}
          />
        </div>
      </div>
      <div className="justify-center text-center dark:[&>*]:text-white">
        <h1 className="text-3xl font-bold ">Myolang</h1>
        <h4 className="hidden md:block md:pt-4">
          어쩌구 저쩌구 저쩌구 어쩌구 쩌구쩌구 쩌구어쩌구 쩌구구구어쩌구 쩌구
          어쩌구 저쩌구 저쩌구 어쩌구 쩌구쩌구 쩌구어쩌구 쩌구구구어쩌구 쩌구
          어쩌구 저쩌구 저쩌구 어쩌구 쩌구쩌구 쩌구어쩌구 쩌구구구어쩌구 쩌구
          어쩌구 저쩌구 저쩌구 어쩌구 쩌구쩌구 쩌구어쩌구 쩌구구구어쩌구 쩌구
          어쩌구 저쩌구 저쩌구 어쩌구 쩌구쩌구 쩌구어쩌구 쩌구구구어쩌구 쩌구
        </h4>
      </div>
    </div>
  );
}
